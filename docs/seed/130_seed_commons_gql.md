# Seed Commons - GQL

## Description

Library to ease the connection to Graphql

## Methods

### useQuery(gqlQuery, paramQuery, options) ⇒
Return a hook to execute a graphql query

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Query hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>paramQuery</td><td><code>string</code></td><td><p>Query param (sql alike)</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const reqPlayers = useQuery(`
{
  players {
    name,
    age
  }
}`, "name=messi")
```
<a name="module_gql..usePagination"></a>

### usePagination(gqlQuery, pageNum, pageSize, paramQuery, options) ⇒
Return a hook to execute a graphql query with pagination

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Pagination hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>pageNum</td><td><code>number</code></td><td><p>Page number</p>
</td>
    </tr><tr>
    <td>pageSize</td><td><code>number</code></td><td><p>Number of objects per page</p>
</td>
    </tr><tr>
    <td>paramQuery</td><td><code>string</code></td><td><p>Query param (sql alike)</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const reqPlayers = useQuery(`
{
  playerPagination {
    totalPages
    players {
      id
   }
  }
}`, "name=messi", 1, 10)
```
<a name="module_gql..useCount"></a>

### useCount(modelName, paramQuery, options) ⇒
Return a hook to execute a graphql count

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Count hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>modelName</td><td><code>string</code></td><td><p>Graphql model name</p>
</td>
    </tr><tr>
    <td>paramQuery</td><td><code>string</code></td><td><p>Query param (sql alike)</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const reqCount = useQuery("player")
```
<a name="module_gql..useDetail"></a>

### useDetail(gqlQuery, id, options) ⇒
Return a hook to execute a graphql detail query (single object)

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Detail hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>id</td><td><code>number</code></td><td><p>Identifier of the object</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const reqPlayer = useQuery(`
{
  player {
    name,
    age
  }
}`, 1)
```
<a name="module_gql..useSave"></a>

### useSave(gqlQuery, options) ⇒
Return a hook to execute a save graphql mutation

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Save hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callSave, reqSave] = useSave(SAVE_PLAYER, {
  onCompleted: (data) => alert("Player saved")
})
...
// Execute request
callSave({ name: "messi" })
```
<a name="module_gql..useSet"></a>

### useSet(gqlQuery, options) ⇒
Return a hook to execute a set graphql mutation

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Set hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callSet, reqSet] = useSave(SET_PLAYER, {
  onCompleted: (data) => alert("Player modified")
})
...
// Execute request
callSet({ id:1, name: "messi" })
```
<a name="module_gql..useDelete"></a>

### useDelete(gqlQuery, options) ⇒
Return a hook to execute a delete graphql mutation

**Kind**: inner method of [<code>gql</code>](#module_gql)
**Returns**: Delete hook
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>gqlQuery</td><td><code>string</code></td><td><p>Graphql query</p>
</td>
    </tr><tr>
    <td>options</td><td><code>Object</code></td><td><p>Request options (onCompleted, onError)</p>
</td>
    </tr>  </tbody>
</table>

**Example**
```js
const [callDelete, reqDelete] = useDelete(DELETE_PLAYER, {
  onCompleted: (data) => alert("Player deleted")
})
...
// Execute request
callDelete({ id: 1 })
```