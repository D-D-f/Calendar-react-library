"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./TableDate.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TableDate = ({
  nbDaysAndFirstDayOnTheMonth,
  changeDate
}) => {
  let firstDay = Number(nbDaysAndFirstDayOnTheMonth.premierJourDuMois);
  let allCase = [];
  let day = 0;
  for (let i = 1; i <= 35; i++) {
    if (firstDay > i || day >= nbDaysAndFirstDayOnTheMonth.nbJourDuMois) {
      allCase.push(null);
    } else {
      day++;
      allCase.push(day);
    }
  }
  const rows = [];
  for (let i = 0; i < allCase.length; i += 7) {
    rows.push( /*#__PURE__*/_react.default.createElement("tr", {
      key: i / 7
    }, allCase.slice(i, i + 7).map((day, index) => /*#__PURE__*/_react.default.createElement("td", {
      onClick: e => changeDate(curr => curr.length > 2 ? [...curr.splice(2, 1), Number(e.target.textContent)] : [...curr, Number(e.target.textContent)]),
      key: index
    }, day !== null ? day : ""))));
  }
  return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Mon"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Tue"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Wed"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Thu"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Fri"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Sat"), /*#__PURE__*/_react.default.createElement("th", {
    scope: "col"
  }, "Sun"))), /*#__PURE__*/_react.default.createElement("tbody", null, rows));
};
var _default = exports.default = TableDate;