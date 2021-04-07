/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
  import * as HelperFileField from "seed/helpers/FileField";
import * as HelperLoading from "seed/helpers/Loading";
import * as HelperModal from "seed/helpers/Modal";
import * as HelperModalRoute from "seed/helpers/ModalRoute";
import * as HelperMultiField from "seed/helpers/MultiField";
import * as HelperScriptTag from "seed/helpers/ScriptTag";
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
 * @function
 */

const Modal = require('seed/helpers/Modal').default;

/**
 * Helper component to wrap any component in a modal context according to a Route path
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
 * Helper component to bing javascript tag code (e.g. <script> ... </script>)
 * @function
 * @param {string} content Script content
 */

const ScriptTag = require('seed/helpers/ScriptTag').default;


export { FileField, Loading, Modal, ModalRoute, MultiField, ScriptTag };