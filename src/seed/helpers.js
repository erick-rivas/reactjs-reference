/*
__Seed builder__
  (Read_only) Builder helper
*/

/** @module helpers **/

/**
 * Helper component to ease the management of input files
 * It receive the user file, automatically pre-upload to server and returns the url. 
 * Useful for file/image preview connected to Formik values
 * @function
 * @param {string} className Class name of the component
 * @param {string} accept Type of files of file input (e.g. image/*)
 * @param {string} name Formik Field name param
 * @param {Function} setFieldValue Formik setFieldValue func
 * @param {boolean} multiple Whether the field is single (default false=single)
 */

const FileField = require('seed/helpers/FileField').default;

/**
 * Helper component to draw a material design spinner
 * @function
 */

const Loading = require('seed/helpers/Loading').default;

/**
 * Helper component to wrap any component in a modal context
 * @param {Object} component Modal component to render
 * @param {float} width Modal width (default: 500)
 * @param {float} height Modal height (default: 500)
 * @param {string} width Animate.css start animation (default zoomIn)
 * @param {string} overflow Modal css overflow property (default auto)
 * @function
 */

const Modal = require('seed/helpers/Modal').default;

/**
 * Helper component to wrap any component in a modal context according to a Route path
 * @param {string} path Route path
 * @param {Object} component Modal component to render
 * @param {float} width Modal width (default: 500)
 * @param {float} height Modal height (default: 500)
 * @param {string} width Animate.css start animation (default zoomIn)
 * @param {string} overflow Modal css overflow property (default auto)
 * @function
 */

const ModalRoute = require('seed/helpers/ModalRoute').default;

/**
 * Helper component ease the management of multiple fields selection.
 * It uses a multicheckbox approach connected with Formik values
 * @function
 * @param {Array} values Multifield values
 * @param {Array} value Selected value(s)
 * @param {string} name Formik Field name param
 * @param {Function} setFieldValue Formik setFieldValue func
 * @param {boolean} singleChoice Whether the multiselect is single (default false=multiple)
 */

const MultiField = require('seed/helpers/MultiField').default;

/**
 * Helper component to draw pagination footer (pages)
 * @function
 * @param {int} pageNum Current page num
 * @param {int} totalPages Total number of pages
 * @param {Function} onClickPage Function when a page is clicked
 */

const PaginationFooter = require('seed/helpers/PaginationFooter').default;

/**
 * Helper component to bing javascript tag code (e.g. <script> ... </script>)
 * @function
 * @param {string} content Script content
 */

const ScriptTag = require('seed/helpers/ScriptTag').default;

/**
 * Helper component to bing style tag code (e.g. <style> ... </style>)
 * @function
 * @param {string} content Style content
 */

const StyleTag = require('seed/helpers/StyleTag').default;

/**
 * Helper component to bind GA route
 * @function
 */
const Route = require('seed/helpers/Route').default;

export { FileField, Loading, Modal, ModalRoute, MultiField, PaginationFooter, ScriptTag, StyleTag, Route };