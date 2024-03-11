"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ContainerTable = _interopRequireDefault(require("./Component/ContainerTable/ContainerTable.jsx"));
var _ActiveContext = _interopRequireDefault(require("./Context/ActiveContext.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_ActiveContext.default, null, /*#__PURE__*/React.createElement(_ContainerTable.default, null)));
};
var _default = exports.default = App;