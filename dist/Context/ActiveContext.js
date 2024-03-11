"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ActiveContext = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ActiveContext = exports.ActiveContext = /*#__PURE__*/(0, _react.createContext)();
const ActiveContextProvider = ({
  children
}) => {
  const [activeDateTime, setActiveDateTime] = (0, _react.useState)(false);
  const [activeListMonth, setActiveListMonth] = (0, _react.useState)(false);
  const [activeListYear, setActiveListYear] = (0, _react.useState)(false);
  console.log(activeListYear, activeListMonth);
  const displayMonthList = () => {
    setActiveListMonth(!activeListMonth);
  };
  const displayYearList = () => {
    setActiveListYear(!activeListYear);
  };
  const displayDateTime = () => {
    setActiveDateTime(!activeDateTime);
  };
  return /*#__PURE__*/_react.default.createElement(ActiveContext.Provider, {
    value: {
      displayDateTime,
      displayYearList,
      displayMonthList,
      activeDateTime,
      activeListMonth,
      activeListYear
    }
  }, children);
};
var _default = exports.default = ActiveContextProvider;