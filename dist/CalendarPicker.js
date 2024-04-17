"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Calendar = _interopRequireDefault(require("./Calendar"));
var _DateCurrentContext = _interopRequireDefault(require("./DateCurrentContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CalendarPicker = ({
  getDate,
  langage,
  start,
  end
}) => {
  return /*#__PURE__*/_react.default.createElement(_DateCurrentContext.default, {
    start: start,
    end: end
  }, /*#__PURE__*/_react.default.createElement(_Calendar.default, {
    getDate: getDate,
    langage: langage
  }));
};
var _default = exports.default = CalendarPicker;