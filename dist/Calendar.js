"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ContainerTable = _interopRequireDefault(require("./ContainerTable"));
var _ActiveContext = _interopRequireDefault(require("./ActiveContext.js"));
require("./Calendar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Calendar = ({
  handleChangeDate,
  attributNameInput,
  nameLabel
}) => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ActiveContext.default, null, /*#__PURE__*/_react.default.createElement(_ContainerTable.default, {
    onChange: handleChangeDate,
    attributNameInput: attributNameInput,
    nameLabel: nameLabel
  })));
};
var _default = exports.default = Calendar;