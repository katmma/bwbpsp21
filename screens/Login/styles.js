"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GuestButton = exports.GuestButtonText = exports.LoginText = exports.LoginButtonText = exports.LoginButton = exports.LoginInput = exports.LoginHeader = exports.LoginImg = exports.ImageContainer = void 0;
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var Colors_1 = require("@assets/Colors");
var win = react_native_1.Dimensions.get('window');
exports.ImageContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  flex: 0.95;\n"], ["\n  align-items: center;\n  flex: 0.95;\n"])));
exports.LoginImg = native_1["default"].Image(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: 400px;\n  aspect-ratio: 1;\n"], ["\n  width: ", ";\n  height: 400px;\n  aspect-ratio: 1;\n"])), win.height * 1.2);
exports.LoginHeader = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 40px;\n  font-family: source-sans-pro-bold;\n  margin: 12.5% 0 5% 10%;\n"], ["\n  font-size: 40px;\n  font-family: source-sans-pro-bold;\n  margin: 12.5% 0 5% 10%;\n"])));
exports.LoginInput = native_1["default"].TextInput(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-color: ", ";\n  border-radius: 5;\n  border-width: 2;\n  padding-horizontal: 5%;\n  align-items: stretch;\n  font-size: 20;\n  height: 8%;\n  margin: 0 10% 5% 10%;\n"], ["\n  border-color: ", ";\n  border-radius: 5;\n  border-width: 2;\n  padding-horizontal: 5%;\n  align-items: stretch;\n  font-size: 20;\n  height: 8%;\n  margin: 0 10% 5% 10%;\n"])), Colors_1.Colors.brandBlue);
exports.LoginButton = native_1["default"].TouchableOpacity(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 5;\n  background-color: ", ";\n  height: 8%;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10% 0 10%;\n"], ["\n  border-radius: 5;\n  background-color: ", ";\n  height: 8%;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10% 0 10%;\n"])), Colors_1.Colors.brandBlue);
exports.LoginButtonText = native_1["default"].Text(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: 20;\n"], ["\n  font-size: 20;\n"])));
exports.LoginText = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0 10% 0 10%;\n  font-size: 20;\n"], ["\n  margin: 0 10% 0 10%;\n  font-size: 20;\n"])));
exports.GuestButtonText = native_1["default"].Text(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  font-size: 18;\n  text-decoration-line: underline;\n"], ["\n  font-size: 18;\n  text-decoration-line: underline;\n"])));
exports.GuestButton = native_1["default"].TouchableOpacity(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  border-radius: 5;\n  background-color: transparent;\n  height: 7%;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10% 0 10%;\n"], ["\n  border-radius: 5;\n  background-color: transparent;\n  height: 7%;\n  align-items: center;\n  justify-content: center;\n  margin: 0 10% 0 10%;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
