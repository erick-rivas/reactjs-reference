# Seed Commons - API

## Description

Library to ease the connection to REST API

## Methods

### useGet(endpoint, queryArgs, options) ⇒
Returns a hook to execute a GET request

**Kind**: inner method of [<code>api</code>](#module_api)
**Returns**: GET hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>endpoint</td><td><code>string</code></td><td><p>Relative path to SERVER_URL/api</p>
</td>
    </tr><tr>
    <td>queryArgs</td><td><code>Object</code></td><td><p>Query args of the request</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError, includeAuth)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const reqPlayers = useGet("/players", { name: "messi" })
// It is equal to /players?name=messi
```
<a name="module_api..usePost"></a>

### usePost(endpoint, options) ⇒
Returns a hook to execute a POST request

**Kind**: inner method of [<code>api</code>](#module_api)
**Returns**: POST hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>endpoint</td><td><code>string</code></td><td><p>Relative path to SERVER_URL/api</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError, includeAuth)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callSave, reqSave] = usePost("/players", {
  onCompleted: (data) => alert("Player saved")
})
...
// Execute request
callSave({ name: "messi" })
```
<a name="module_api..usePut"></a>

### usePut(endpoint, options) ⇒
Returns a hook to execute a PUT request

**Kind**: inner method of [<code>api</code>](#module_api)
**Returns**: PUT hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>endpoint</td><td><code>string</code></td><td><p>Relative path to SERVER_URL/api</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError, includeAuth)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callPut, reqPut] = usePut("/players", {
  onCompleted: (data) => alert("Player modified")
})
...
// Execute request
callPut({ id: 1, name: "messi" })
```
<a name="module_api..useDelete"></a>

### useDelete(endpoint, options) ⇒
Returns a hook to execute a DELETE request

**Kind**: inner method of [<code>api</code>](#module_api)
**Returns**: DELETE hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>endpoint</td><td><code>string</code></td><td><p>Relative path to SERVER_URL/api</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError, includeAuth)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callDelete, reqDelete] = useDelete("/players", {
  onCompleted: (data) => alert("Player deleted")
})
...
// Execute request
callDelete({ id: 1 })
```