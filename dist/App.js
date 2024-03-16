"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ContainerTable = _interopRequireDefault(require("./ContainerTable.jsx"));
var _ActiveContext = _interopRequireDefault(require("./ActiveContext.js"));
require("./App.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_ActiveContext.default, null, /*#__PURE__*/_react.default.createElement(_ContainerTable.default, null)));
};
var _default = exports.default = App;