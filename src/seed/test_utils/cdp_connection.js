class CDPConnection {

  constructor(driver) {
      
    driver._wsConnection.on('message', this.onMessage.bind(this));
    driver._wsConnection.on('close', this.onClose.bind(this));
    driver._wsConnection.on('error', this.rejectAll.bind(this));

    this.wsConnection = driver._wsConnection;
    this.sessionId = driver.sessionId;
    this.requests = new Map();
    this.ID = 0;

  }

  execute(method, params, onMessageSent) {

    let message = {
      sessionId: this.sessionId,
      method,
      params,
      id: ++this.ID,
    };

    let listener = {
      id: message.id,
      resolve: null,
      reject: null,
    };

    let promise = new Promise((resolve, reject) => {
      listener.resolve = resolve;
      listener.reject = reject;
    });

    this.requests.set(listener.id, listener);
    this.wsConnection.send(JSON.stringify(message), onMessageSent);

    return promise;
      
  }

  onMessage(message) {

    let params = JSON.parse(message.toString());
    let { id, result } = params;

    if(id != null && this.requests.has(id)) {
      this.requests.get(id)?.resolve?.(result);
      this.requests.delete(id);
    }

  }

  onClose() {
    this.rejectAll(new Error(`CDPConnection: The underlying connection was closed`));
  }

  rejectAll(error) {

    let awaiters = this.requests.values();
    this.requests = new Map();

    for(let awaiter of awaiters) 
      awaiter.reject(error);
      
  }

}

export default CDPConnection;