"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./TableDate.css");
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
    rows.push( /*#__PURE__*/React.createElement("tr", {
      key: i / 7
    }, allCase.slice(i, i + 7).map((day, index) => /*#__PURE__*/React.createElement("td", {
      onClick: e => {
        changeDate(() => {
          return e.target.textContent;
        });
      },
      key: index
    }, day !== null ? day : ""))));
  }
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Mon"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Tue"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Wed"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Thu"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Fri"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Sat"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Sun"))), /*#__PURE__*/React.createElement("tbody", null, rows));
};
var _default = exports.default = TableDate;