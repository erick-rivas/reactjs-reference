# Actions

Represents the module that handle API connection

## Table of content

-  [Description](#description)
-  [Guidelines](#guidelines)
-  [Request methods](#request-methods)
-  [ToDisp methods](#todisp-methods)
-  [Examples](#example)
    -  [GET example](#get-example)
    -  [POST example](#post-example)
-  [References](#references)

## Description

The actions are responsible to define which methods (endpoint) will be used and how handle the responses.

Those methods are binded **automatically** binded in components using redux() wrapper.

## Guidelines

-  To export an action use command
  > $ seed-builder export -m actions:model_name
-  Just add new methods to *define endpoint actions*
    - Example: /api/players/top_players
-  Modify 'fetch' data to define which field include in the request
-  Only override existing methods if required

## Request methods

Those methods are helpers to ease the api requests
-  getList(action, filters, callback?)
-  getDetails(action, id, callback?)
-  postData(action, body, callback?)
-  putData(action, id, body, callback?)
-  deleteData(action, id, callback?)

## Examples

### GET example

```javascript
class Players extends _Players
{
  getTop10PlayerList(category, callback)
  {
    constructor()
    {
      // Fetch all attributes of inner team attribute
      const fetch = [
        "team.*",
      ]
      super(fetch)
    }

    return this.getList(
      `/top_10`, //Action
      {category: category}, //Filters
      callback //callback when complete
    )
  }
}
```

### POST example

```javascript
class Users extends _Users
{
  createUserProfile(userId, callback)
  {
    let body = {}
    return this.postData(
      `create_profile`, //Action
      body, //Body
      callback //callback when complete
    )
  }
}
```

