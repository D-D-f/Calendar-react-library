"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Calendar = _interopRequireDefault(require("./Calendar.tsx"));
var _DateCurrentContext = _interopRequireDefault(require("./DateCurrentContext.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CalendarPicker = ({
  getDate,
  langage
}) => {
  return /*#__PURE__*/_react.default.createElement(_DateCurrentContext.default, {
    start: 1950,
    end: 2030
  }, /*#__PURE__*/_react.default.createElement(_Calendar.default, {
    getDate: getDate,
    langage: langage
  }));
};
var _default = exports.default = CalendarPicker;