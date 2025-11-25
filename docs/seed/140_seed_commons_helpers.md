# Seed Commons - Helpers

## Description

Common components to reuse in the project

## Components

### FileField(className, accept, name, setFieldValue, multiple)
Helper component to ease the management of input files
It receive the user file, automatically pre-upload to server and returns the url.
Useful for file/image preview connected to Formik values

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>className</td><td><code>string</code></td><td><p>Class name of the component</p>
</td>
    </tr><tr>
    <td>accept</td><td><code>string</code></td><td><p>Type of files of file input (e.g. image/*)</p>
</td>
    </tr><tr>
    <td>name</td><td><code>string</code></td><td><p>Formik Field name param</p>
</td>
    </tr><tr>
    <td>setFieldValue</td><td><code>function</code></td><td><p>Formik setFieldValue func</p>
</td>
    </tr><tr>
    <td>multiple</td><td><code>boolean</code></td><td><p>Whether the field is single (default false=single)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..Loading"></a>

### helpers~Loading()
Helper component to draw a material design spinner

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<a name="module_helpers..Modal"></a>

### Modal(component, width, height, width, overflow)
Helper component to wrap any component in a modal context

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>component</td><td><code>Object</code></td><td><p>Modal component to render</p>
</td>
    </tr><tr>
    <td>width</td><td><code>float</code></td><td><p>Modal width (default: 500)</p>
</td>
    </tr><tr>
    <td>height</td><td><code>float</code></td><td><p>Modal height (default: 500)</p>
</td>
    </tr><tr>
    <td>width</td><td><code>string</code></td><td><p>Animate.css start animation (default zoomIn)</p>
</td>
    </tr><tr>
    <td>overflow</td><td><code>string</code></td><td><p>Modal css overflow property (default auto)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..ModalRoute"></a>

### ModalRoute(path, component, width, height, width, overflow)
Helper component to wrap any component in a modal context according to a Route path

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>path</td><td><code>string</code></td><td><p>Route path</p>
</td>
    </tr><tr>
    <td>component</td><td><code>Object</code></td><td><p>Modal component to render</p>
</td>
    </tr><tr>
    <td>width</td><td><code>float</code></td><td><p>Modal width (default: 500)</p>
</td>
    </tr><tr>
    <td>height</td><td><code>float</code></td><td><p>Modal height (default: 500)</p>
</td>
    </tr><tr>
    <td>width</td><td><code>string</code></td><td><p>Animate.css start animation (default zoomIn)</p>
</td>
    </tr><tr>
    <td>overflow</td><td><code>string</code></td><td><p>Modal css overflow property (default auto)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..MultiField"></a>

### MultiField(values, value, name, setFieldValue, singleChoice)
Helper component ease the management of multiple fields selection.
It uses a multicheckbox approach connected with Formik values

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>values</td><td><code>Array</code></td><td><p>Multifield values</p>
</td>
    </tr><tr>
    <td>value</td><td><code>Array</code></td><td><p>Selected value(s)</p>
</td>
    </tr><tr>
    <td>name</td><td><code>string</code></td><td><p>Formik Field name param</p>
</td>
    </tr><tr>
    <td>setFieldValue</td><td><code>function</code></td><td><p>Formik setFieldValue func</p>
</td>
    </tr><tr>
    <td>singleChoice</td><td><code>boolean</code></td><td><p>Whether the multiselect is single (default false=multiple)</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..PaginationFooter"></a>

### PaginationFooter(pageNum, totalPages, onClickPage)
Helper component to draw pagination footer (pages)

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>pageNum</td><td><code>int</code></td><td><p>Current page num</p>
</td>
    </tr><tr>
    <td>totalPages</td><td><code>int</code></td><td><p>Total number of pages</p>
</td>
    </tr><tr>
    <td>onClickPage</td><td><code>function</code></td><td><p>Function when a page is clicked</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..ScriptTag"></a>

### ScriptTag(content)
Helper component to bing javascript tag code (e.g. <script> ... </script>)

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td><td><code>string</code></td><td><p>Script content</p>
</td>
    </tr>  </tbody>
</table>

<a name="module_helpers..StyleTag"></a>

### helpers~StyleTag(content)
Helper component to bing style tag code (e.g. <style> ... </style>)

**Kind**: inner method of [<code>helpers</code>](#module_helpers)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>content</td><td><code>string</code></td><td><p>Style content</p>
</td>
    </tr>  </tbody>
</table>