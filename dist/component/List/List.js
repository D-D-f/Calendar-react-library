"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _GetDate = require("../../GetDate");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _DateCurrentContext = require("../../DateCurrentContext");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("./List.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const List = ({
  arrayList,
  typeList
}) => {
  const [activeList, setActiveList] = (0, _react.useState)(false);
  const context = (0, _react.useContext)(_DateCurrentContext.ActiveContext);
  if (!context) throw new Error("Context is undefined");
  const {
    userChosenMonth,
    setUserChosenMonth,
    userChosenYear,
    setUserChosenYear
  } = context;
  const {
    currentMonth,
    currentYear
  } = (0, _GetDate.GetCurrentDate)();
  const displayList = arrayList.map((value, index) => typeList === "year" ? /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    onClick: () => setUserChosenYear(index)
  }, value) : /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    onClick: () => setUserChosenMonth(index)
  }, value));
  const indexCurrentList = typeList === "year" ? arrayList.indexOf(currentYear) : currentMonth;
  let chosenYear;
  let chosenMonth;
  if (typeList === "year" && userChosenYear !== undefined) {
    chosenYear = arrayList[userChosenYear];
  }
  if (typeList === "month" && userChosenMonth !== undefined) {
    chosenMonth = arrayList[userChosenMonth];
  }
  const list = typeList === "year" ? chosenYear : chosenMonth;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => setActiveList(!activeList),
    className: "header_list"
  }, /*#__PURE__*/_react.default.createElement("h4", null, list !== undefined ? list : arrayList[indexCurrentList]), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSortDown
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: activeList ? "active" : "not-active"
  }, displayList));
};
var _default = exports.default = List;