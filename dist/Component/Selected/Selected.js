"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react = _interopRequireWildcard(require("react"));
var _ActiveContext = require("../../Context/ActiveContext");
require("./Selected.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Selected = ({
  Months,
  Years,
  currentMonth,
  currentYear,
  setCurrentMonth,
  setCurrentYear
}) => {
  const {
    activeListMonth,
    activeListYear,
    displayYearList,
    displayMonthList
  } = (0, _react.useContext)(_ActiveContext.ActiveContext);
  const listMonth = Months.map((months, index) => /*#__PURE__*/_react.default.createElement("li", {
    style: currentMonth === index ? {
      backgroundColor: "#212AFBFF",
      color: "white",
      cursor: "pointer"
    } : {
      backgroundColor: "",
      cursor: "pointer"
    },
    className: currentMonth !== index ? "notSelected" : "",
    onClick: () => setCurrentMonth(index),
    key: index
  }, months));
  const listYears = Years.map((years, index) => /*#__PURE__*/_react.default.createElement("li", {
    style: currentYear === index ? {
      backgroundColor: "#212AFBFF",
      color: "white",
      cursor: "pointer"
    } : {
      backgroundColor: "",
      cursor: "pointer"
    },
    className: currentYear !== index ? "notSelected" : "",
    onClick: () => setCurrentYear(index),
    key: index
  }, years));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selected"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-around"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => displayMonthList()
  }, Months[currentMonth], /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown,
    style: {
      marginLeft: "10px"
    },
    size: "xs"
  }), /*#__PURE__*/_react.default.createElement("ul", {
    style: activeListMonth ? {
      display: "block"
    } : {
      display: "none"
    },
    className: "ulMonthYear"
  }, listMonth)), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => displayYearList()
  }, Years[currentYear], /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown,
    style: {
      marginLeft: "10px"
    },
    size: "xs"
  }), /*#__PURE__*/_react.default.createElement("ul", {
    style: activeListYear ? {
      display: "block"
    } : {
      display: "none"
    },
    className: "ulYear"
  }, listYears))));
};
var _default = exports.default = Selected;