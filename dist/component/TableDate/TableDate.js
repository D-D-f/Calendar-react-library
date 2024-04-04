"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./TableDate.css");
var _react = _interopRequireWildcard(require("react"));
var _DateCurrentContext = require("../../DateCurrentContext");
var _GetDate = require("../../GetDate");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TableDate = ({
  getDate,
  langage
}) => {
  const context = (0, _react.useContext)(_DateCurrentContext.ActiveContext);
  if (!context) throw new Error("Context is undefined");
  const {
    userChosenMonth,
    userChosenYear,
    allYears
  } = context;
  const getDaysMonthAndFirstDayMonth = (0, _GetDate.GetFirstDayAndTheMonth)(allYears[userChosenYear], userChosenMonth, 1);
  const currentDate = (0, _GetDate.GetCurrentDate)();
  const nbDaysInMonth = (0, _GetDate.daysInMonth)(userChosenMonth, allYears[userChosenYear]);
  const [selectedDay, setSelectedDay] = (0, _react.useState)(0);
  const caseTable = [];
  let day = 0;
  for (let i = 1; i <= 35; i++) {
    if (getDaysMonthAndFirstDayMonth.userChosenDay > i || day >= nbDaysInMonth) {
      caseTable.push(null);
    } else {
      day++;
      caseTable.push(day);
    }
  }
  const handleDayClick = day => {
    setSelectedDay(day);
    const date = langage === "fr" ? `${day < 10 ? `0${day}` : day}/${userChosenMonth < 10 ? `0${userChosenMonth}` : userChosenMonth}/${allYears[userChosenYear]}` : `${allYears[userChosenYear]}/${userChosenMonth < 10 ? `0${userChosenMonth}` : userChosenMonth}/${day < 10 ? `0${day}` : day}/${userChosenMonth < 10 ? `0${userChosenMonth}` : userChosenMonth}`;
    getDate(date);
  };
  const rows = [];
  for (let i = 0; i < caseTable.length; i += 7) {
    rows.push( /*#__PURE__*/_react.default.createElement("tr", {
      key: i / 7
    }, caseTable.slice(i, i + 7).map((day, index) => /*#__PURE__*/_react.default.createElement("td", {
      className: day === null ? "" : "td_date",
      key: index,
      onClick: () => {
        handleDayClick(day);
      },
      style: {
        backgroundColor: day === selectedDay ? "lightblue" : "",
        color: userChosenMonth === currentDate.currentMonth && day === currentDate.currentDay ? "red" : "black",
        fontWeight: userChosenMonth === currentDate.currentMonth && day === currentDate.currentDay ? "bold" : "normal"
      }
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