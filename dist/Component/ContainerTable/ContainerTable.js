"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _TableDate = _interopRequireDefault(require("../../Component/TableDate/TableDate"));
var _Selected = _interopRequireDefault(require("../../Component/Selected/Selected"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _UseCalculDay = _interopRequireDefault(require("../../CustomHooks/UseCalculDay"));
var _UseCalculDate = _interopRequireDefault(require("../../CustomHooks/UseCalculDate"));
require("./ContainerTable.css");
var _react = _interopRequireWildcard(require("react"));
var _ActiveContext = require("../../Context/ActiveContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// @ts-nocheck

const ContainerTable = () => {
  const {
    years,
    months,
    incrementMonth,
    incrementYear,
    decrementMonth,
    decrementYear,
    currentDate,
    currentMonth,
    currentYear,
    setCurrentMonth,
    setCurrentYear
  } = (0, _UseCalculDate.default)();
  const {
    activeDateTime,
    displayDateTime
  } = (0, _react.useContext)(_ActiveContext.ActiveContext);
  const [chosenDate, setChosenDate] = (0, _react.useState)([]);
  const getFirstDayAndNumbersDays = (0, _UseCalculDay.default)(currentMonth, currentYear, 1);
  (0, _react.useEffect)(() => {
    setChosenDate(() => [currentMonth, years[currentYear]]);
  }, [currentMonth, currentYear]);
  const currentDay = `${currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : `${currentDate.getDate()}`}/${currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : `${currentDate.getMonth() + 1}`}/${currentDate.getFullYear()}`;
  let [monthcurrent, yearcurrent, datecurrent] = [...chosenDate];
  let valueInput = `${datecurrent < 10 ? `0${datecurrent}` : `${datecurrent}`}/${monthcurrent < 10 ? `0${monthcurrent}` : `${monthcurrent}`}/${yearcurrent}`;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "containerTable"
  }, /*#__PURE__*/_react.default.createElement("input", {
    style: {
      width: "100%"
    },
    type: "text",
    readOnly: true,
    onClick: () => displayDateTime(),
    value: datecurrent !== undefined ? valueInput : currentDay
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: activeDateTime ? {
      display: "block"
    } : {
      display: "none"
    },
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "head"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretLeft,
    onClick: () => {
      decrementMonth();
      decrementYear();
    },
    style: {
      cursor: "pointer"
    }
  }), /*#__PURE__*/_react.default.createElement(_Selected.default, {
    Months: months,
    Years: years,
    currentMonth: currentMonth,
    currentYear: currentYear,
    setCurrentMonth: setCurrentMonth,
    setCurrentYear: setCurrentYear
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretRight,
    onClick: () => {
      incrementMonth();
      incrementYear();
    },
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/_react.default.createElement(_TableDate.default, {
    nbDaysAndFirstDayOnTheMonth: getFirstDayAndNumbersDays,
    changeDate: setChosenDate
  })));
};
var _default = exports.default = ContainerTable;