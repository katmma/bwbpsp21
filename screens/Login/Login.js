"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var requests_1 = require("@utils/airtable/requests");
var ContextProvider_1 = require("@components/ContextProvider");
var mocks_1 = require("@utils/airtable/mocks");
/**
 * Uh oh! There's a frontend bug in this code. it looks like anyone can log-in.
 *
 * 1. If a user click's Log In without providing credentials it
 *    should alert the user of an incorrect username or password
 * 2. If a user click's Log i with providing incorrect credentials it should
 *    also alert the suser of an incorrect username or password
 *
 * TIPS:
 * - Shake your phone to reload the app!
 * - Hit Command + S in VSCode to save your code. The simulator will automatically reload.
 */
var LoginScreen = /** @class */ (function (_super) {
    __extends(LoginScreen, _super);
    function LoginScreen(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            user: __assign({}, mocks_1.UserMock)
        };
        return _this;
    }
    LoginScreen.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, requests_1.getUser(this.state.user)];
                    case 1:
                        user = _a.sent();
                        if (!user) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.context.setUser(user)];
                    case 2:
                        _a.sent();
                        this.props.navigation.navigate('App');
                        return [3 /*break*/, 4];
                    case 3:
                        alert('Incorrect username or password.');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginScreen.prototype.render = function () {
        var _this = this;
        console.log(this.state.user);
        return (<react_native_1.KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <react_native_1.ScrollView style={{ flex: 1 }}>
          <styles_1.ImageContainer>
            <styles_1.LoginImg source={require('@assets/imgs/colored_icon.png')} resizeMode="center"/>
          </styles_1.ImageContainer>
          <styles_1.LoginHeader>Welcome</styles_1.LoginHeader>
          <styles_1.LoginText>Username</styles_1.LoginText>
          <styles_1.LoginInput autoCapitalize="none" onChangeText={function (text) {
            return _this.setState({
                user: __assign(__assign({}, _this.state.user), { uname: text.trim().toLowerCase() })
            });
        }} value={this.state.user.uname}/>

          <styles_1.LoginText>Password</styles_1.LoginText>
          <styles_1.LoginInput secureTextEntry onChangeText={function (text) {
            return _this.setState({
                user: __assign(__assign({}, _this.state.user), { password: text })
            });
        }} value={this.state.user.password}/>

          <styles_1.LoginButton onPress={function () { return _this.login(); }}>
            <styles_1.LoginButtonText>Log In</styles_1.LoginButtonText>
          </styles_1.LoginButton>
        </react_native_1.ScrollView>
      </react_native_1.KeyboardAvoidingView>);
    };
    LoginScreen.contextType = ContextProvider_1.GlobalContext;
    return LoginScreen;
}(react_1["default"].Component));
exports["default"] = LoginScreen;
