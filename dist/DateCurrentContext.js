"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ActiveContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _date = _interopRequireDefault(require("./date.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ActiveContext = exports.ActiveContext = /*#__PURE__*/(0, _react.createContext)(undefined);
const DateCurrentContextProvider = ({
  children,
  start,
  end
}) => {
  const currentDate = new Date();
  const months = _date.default.months;
  const allYears = [];
  for (let i = start; i <= end; i++) {
    allYears.push(i);
  }
  const [userChosenMonth, setUserChosenMonth] = (0, _react.useState)(currentDate.getMonth());
  const [userChosenYear, setUserChosenYear] = (0, _react.useState)(allYears.indexOf(currentDate.getFullYear()));
  const resetCurrentDate = () => {
    setUserChosenYear(allYears.indexOf(currentDate.getFullYear()));
    setUserChosenMonth(currentDate.getMonth());
  };
  const incrementYear = () => {
    if (userChosenMonth === 11) {
      setUserChosenYear(curr => curr + 1);
    }
  };
  const decrementYear = () => {
    if (userChosenMonth === 0) {
      return setUserChosenYear(curr => curr - 1);
    }
  };
  const incrementMonth = () => {
    return setUserChosenMonth(curr => {
      if (userChosenYear === allYears.length - 1 && curr === 11) {
        return curr;
      }
      if (curr === 11) {
        return curr = 0;
      }
      if (months.length === curr) {
        return curr;
      }
      return curr += 1;
    });
  };
  const decrementMonth = () => {
    return setUserChosenMonth(curr => {
      if (userChosenYear === 0 && curr === 0) {
        return curr;
      }
      if (curr === 0) {
        return curr = 11;
      }
      return curr - 1;
    });
  };
  return /*#__PURE__*/_react.default.createElement(ActiveContext.Provider, {
    value: {
      userChosenMonth,
      setUserChosenMonth,
      userChosenYear,
      setUserChosenYear,
      incrementMonth,
      decrementMonth,
      months,
      allYears,
      incrementYear,
      decrementYear,
      resetCurrentDate
    }
  }, children);
};
var _default = exports.default = DateCurrentContextProvider;