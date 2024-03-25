"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.dateChange = void 0;
var _react = _interopRequireDefault(require("react"));
var _ContainerTable = _interopRequireDefault(require("./ContainerTable"));
var _ActiveContext = _interopRequireDefault(require("./ActiveContext.js"));
require("./Calendar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let dateChange = exports.dateChange = void 0;
const Calendar = () => {
  const handleChange = date => {
    exports.dateChange = dateChange = date;
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ActiveContext.default, null, /*#__PURE__*/_react.default.createElement(_ContainerTable.default, {
    onChange: handleChange
  })));
};
var _default = exports.default = Calendar;