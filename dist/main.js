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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 *
 * ALL ICONS
 *
 */
var __addGithubBadge_ICONS = {
    url: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"2.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244\" /></svg>",
};
/**
 *
 * POPUP INTERNAL COMPONENTS
 *
 */
var __addGithubBadge_widgetPopupOverview = function (username, location, custom_name) {
    return "\n <!-- addGithubBadge POPUP PROFILE OVERVIEW START -->\n <div id=\"__addGithubBadge_cross_btn\">\n X\n </div>\n   <div class=\"__addGithubBadge_overview_upper __addGithubBadge_select_none\">\n     <img\n       id=\"__addGithubBadge_popup_img\"\n       class=\"__addGithubBadge_popup_avatar\"\n       src=\"https://github.com/".concat(username, ".png\"\n       alt=\"").concat(username, "\"\n       draggable=\"false\"\n     />\n     <p>\n       This project is made by\n     </p>\n     <h3>\n      ").concat(custom_name ? custom_name : "@".concat(username), "\n     </h3>\n   </div>\n   ").concat(location
        ? "\n   <div class=\"__addGithubBadge_popup_txt_w_icon\">\n   <svg\n     xmlns=\"http://www.w3.org/2000/svg\"\n     fill=\"none\"\n     viewBox=\"0 0 24 24\"\n     stroke-width=\"2.5\"\n     stroke=\"currentColor\"\n   >\n     <path\n       stroke-linecap=\"round\"\n       stroke-linejoin=\"round\"\n       d=\"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z\"\n     />\n     <path\n       stroke-linecap=\"round\"\n       stroke-linejoin=\"round\"\n       d=\"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z\"\n     />\n   </svg>\n   ".concat(location, "\n </div>\n   ")
        : "", "\n   <hr class=\"__addGithubBadge_hr\" />\n </div>\n <!-- addGithubBadge POPUP PROFILE OVERVIEW END -->\n ");
};
var __addGithubBadge_widgetPopupBio = function (bio) {
    return "<!-- addGithubBadge BIO START -->\n  <div class=\"__addGithubBadge_bio\">\n    <details class=\"__addGithubBadge_popup_details\" open>\n      <summary><strong>Bio:-</strong></summary>\n      <p>\n        ".concat(bio, "\n      </p>\n    </details>\n  </div>\n  <!-- addGithubBadge BIO END -->\n  ");
};
var __addGithubBadge_widgetPopupLinks = function (links) {
    return "<!-- addGithubBadge LINKS START -->\n  <div class=\"__addGithubBadge_popup_desc\">\n    <details id=\"__addGithubBadge_links\" class=\"__addGithubBadge_popup_details\" open>\n      <summary><strong>Links:-</strong></summary>\n      <ol>\n        ".concat(links.map(function (link) { var _a; return "<li><span>".concat(__addGithubBadge_ICONS.url, "</span><a href=\"").concat(link.href, "\" target=\"_blank\">").concat((_a = link.title) !== null && _a !== void 0 ? _a : link.href, "</a></li>"); }), "\n      </ol>\n    </details>\n  </div>\n  <!-- addGithubBadge LINKS END -->");
};
/**
 *
 * addGithubBadge Popup Trigger Button
 *
 */
var __addGithubBadge_PopupTriggerBtn = function (text, username) {
    return "\n  <section aria-label=\"open-addGithubBadge-widget\" id=\"__addGithubBadge_popup_trigger_btn\">\n  <img src=\"".concat("https://github.com/".concat(username, ".png"), "\" alt=\"").concat(text, "\" />\n  <p>").concat(text, "</p></section>\n  ");
};
/**
 *
 * addGithubBadge Popup
 *
 */
var __addGithubBadge_Popup = function (user, props) {
    var _a;
    return "\n  <aside class=\"__addGithubBadge_noscrollbar\" id=\"__addGithubBadge_popup\">\n  ".concat(__addGithubBadge_widgetPopupOverview(user.login, user.location, props.custom_name), "\n  ").concat(user.bio ? __addGithubBadge_widgetPopupBio(user.bio) : "", "\n  ").concat(__addGithubBadge_widgetPopupLinks(__spreadArray([
        {
            href: "//github.com/" + user.login,
            title: "Github @" + user.login,
        }
    ], ((_a = props.links) !== null && _a !== void 0 ? _a : [null]), true).filter(Boolean)), "\n  </aside>\n  ");
};
/**
 *
 * addGithubBadge Whole style source
 *
 */
var __addGithubBadge_Styles = function () {
    return "\n  /* Popup styles */\n  #__addGithubBadge_popup {\n    font-family: \"Lucida Console\", \"Courier New\", monospace;\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    overflow-x: hidden;\n    padding: 1rem;\n    width: 16rem;\n    overflow-wrap: break-word;\n    border-radius: 0.7rem 0.7rem 0 0;\n    background-color: #0d1117;\n    position: fixed;\n    left: 0.9rem;\n    bottom: 0rem;\n    z-index: 60;\n    color: white;\n    transform: translateY(130%);\n    transition-timing-function: ease-in;\n    transition: 0.4s;\n  }\n  \n  .__addGithubBadge_popup_open {\n    transition: 0.4s !important;\n    transition-timing-function: ease-out !important;\n    transform: translateY(0) !important;\n  }\n  \n  #__addGithubBadge_cross_btn {\n    cursor: pointer;\n    margin-top: -0.25rem;\n    font-weight: 700;\n    text-align: right;\n  }\n  \n  /* Popup trigger btn */\n  #__addGithubBadge_popup_trigger_btn {\n    font-family: \"Lucida Console\", \"Courier New\", monospace;\n    display: inline-flex;\n    position: fixed;\n    bottom: 0rem;\n    z-index: 50;\n    padding: 0.3rem 0.55rem;\n    left: 1rem;\n    border-radius: 10px 10px 0 0;\n    color: #ffffff;\n    background-color: #0d1117;\n    cursor: pointer;\n    user-select: none;\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    transition-property: background-color, border-color, color, fill, stroke,\n      opacity, box-shadow, transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 500ms;\n    p {\n      font-size: 12px; \n      font-weight: 700; \n      letter-spacing: 0.025em;\n      line-height: 0px;\n      text-overflow: ellipsis;\n    }\n    img {\n      aspect-ratio: 1 / 1;\n      border-radius: 9999px;\n      height: 24px;\n      margin-right: 0.5rem;\n    }\n  }\n  \n  #__addGithubBadge_popup_trigger_btn:hover {\n    border-bottom-right-radius: 0.2rem;\n    border-bottom-left-radius: 0.2rem;\n  }\n  \n  \n  .__addGithubBadge_popup_details > summary {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.975rem;\n    opacity: 0.9;\n    font-weight: 500;\n    margin-top: 1rem;\n    margin-bottom: 0.5rem;\n    text-align: left;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n  }\n  \n  .__addGithubBadge_popup_desc {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n  \n  .__addGithubBadge_popup_avatar {\n    margin-bottom: 0.3rem;\n    aspect-ratio: 1 / 1;\n    border-radius: 9999px;\n    height: fit-content;\n    margin-right: 0.5rem;\n  }\n  \n  .__addGithubBadge_popup_txt_w_icon {\n    opacity: 0.8;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 0.8em;\n    align-items: center;\n    font-size: 0.75rem;\n    height: fit-content;\n    text-align: center;\n    vertical-align: middle;\n    svg {\n      width: 0.9rem;\n      height: 0.9rem;\n      margin-right: 0.1rem;\n    }\n  }\n  \n  .__addGithubBadge_bio {\n    margin-top: 0.5rem;\n  }\n  \n  .__addGithubBadge_bio > details > p {\n    user-select: none;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    margin-top: 0.55rem;\n    font-weight: 400;\n    letter-spacing: 0.005em;\n    overflow-wrap: break-word;\n    opacity: 0.9;\n    text-decoration: none;\n  }\n  \n  #__addGithubBadge_links {\n    ul {\n      user-select: none;\n      width: 100%;\n      margin-top: 1rem;\n    }\n    li {\n      display: flex;\n      align-items: left;\n      text-align: left;\n      height: fit-content;\n    }\n    svg {\n      width: 1rem;\n      height: 1rem;\n    }\n    a {\n      font-weight: 425;\n      font-size: 0.9rem;\n      line-height: 1.25rem;\n      color: white;\n      filter: brightness(125);\n      text-decoration: none;\n    }\n    span {\n      margin-right: 0.25rem;\n    }\n  }\n  \n  #__addGithubBadge_projects {\n    border-radius: 0.6rem;\n    margin-right: -0.67rem;\n    margin-top: 0.67rem;\n    display: flex;\n    overflow-x: scroll;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: fit-content;\n  }\n  \n  #__addGithubBadge_popup_img {\n    height: 7em;\n    width: auto;\n    aspect-rato: 1 / 1;\n  }\n  \n  .__addGithubBadge_overview_upper {\n    padding-bottom: 0.3rem;\n    display: grid;\n    place-items: center;\n    p {\n      margin-top: 1rem;\n      font-weight: 550;\n      font-size: 0.75rem;\n      letter-spacing: 0.025em;\n      color: #d1d5db;\n      line-height: 0;\n    }\n    h3 {\n      font-weight: 700;\n      font-size: 1.125rem;\n      margin-top: 10px;\n      line-height: 0;\n    }\n  }\n  \n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .__addGithubBadge_noscrollbar::-webkit-scrollbar {\n    display: none;\n  }\n  \n  /* Hide scrollbar for IE, Edge and Firefox */\n  .__addGithubBadge_noscrollbar {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n  \n  /* Misc addGithubBadge */\n  .__addGithubBadge_hr {\n    margin-top: 0.3rem;\n    border-width: 0;\n    height: 1px;\n    background-color: #e5e7eb;\n    opacity: 0.3;\n  }\n  .__addGithubBadge_select_none {\n    user-select: none;\n  }  \n  ";
};
/**
 *
 * addGithubBadge initialization function, to be called by consumer on html side
 *
 */
function addGithubBadge(props) {
    return __awaiter(this, void 0, void 0, function () {
        var UTILS, addGithubBadge_GH_REQ, addGithubBadge_GH_USER, addGithubBadge_STYLES, addGithubBadge_TRIGGER_BTN_TXT, addGithubBadgePopupHandler;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    // if no props
                    if (!props)
                        throw new Error("[addGithubBadge] addGithubBadge initialized without any props.");
                    // providing functionality even if only username provided
                    if (typeof props == "string") {
                        props = {
                            github_username: props.toString().trim(),
                        };
                    }
                    UTILS = {
                        log: function () {
                            var _a;
                            var anything = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                anything[_i] = arguments[_i];
                            }
                            if (((_a = props.options) === null || _a === void 0 ? void 0 : _a.debug) == true) {
                                console.log.apply(console, __spreadArray(["[addGithubBadge]"], anything, false));
                            }
                        },
                    };
                    // check user name
                    UTILS.log("addGithubBadge widget initialized");
                    if (!(props === null || props === void 0 ? void 0 : props.github_username))
                        return [2 /*return*/, UTILS.log("No Github username provided!")];
                    return [4 /*yield*/, fetch("https://api.github.com/users/".concat(props.github_username))];
                case 1:
                    addGithubBadge_GH_REQ = _d.sent();
                    if (!addGithubBadge_GH_REQ.ok)
                        return [2 /*return*/, UTILS.log("Failed to fetch Github User!")];
                    return [4 /*yield*/, addGithubBadge_GH_REQ.json()];
                case 2:
                    addGithubBadge_GH_USER = _d.sent();
                    UTILS.log("Fetched Github User");
                    addGithubBadge_STYLES = document.createElement("style");
                    addGithubBadge_STYLES.innerHTML = __addGithubBadge_Styles();
                    document.body.appendChild(addGithubBadge_STYLES);
                    UTILS.log("Appended addGithubBadge_STYLES to document body!");
                    addGithubBadge_TRIGGER_BTN_TXT = ((_a = props.trigger_options) === null || _a === void 0 ? void 0 : _a.text)
                        ? (_b = props.trigger_options) === null || _b === void 0 ? void 0 : _b.text.replace("{{username}}", props.github_username).trim()
                        : "Made by @".concat(props.github_username);
                    document.documentElement.innerHTML += __addGithubBadge_PopupTriggerBtn(addGithubBadge_TRIGGER_BTN_TXT, addGithubBadge_GH_USER.login);
                    UTILS.log("Appended addGithubBadge_TRIGGER_BTN to document body with content :- ".concat(addGithubBadge_TRIGGER_BTN_TXT));
                    // appending popup
                    document.documentElement.innerHTML += __addGithubBadge_Popup(addGithubBadge_GH_USER, props);
                    UTILS.log("Appended addGithubBadge_POPUP to document body!");
                    addGithubBadgePopupHandler = function () {
                        var _a;
                        return (_a = document
                            .getElementById("__addGithubBadge_popup")) === null || _a === void 0 ? void 0 : _a.classList.toggle("__addGithubBadge_popup_open");
                    };
                    // configuring handlers
                    document
                        .getElementById("__addGithubBadge_popup_trigger_btn")
                        .addEventListener("click", addGithubBadgePopupHandler);
                    (_c = document
                        .getElementById("__addGithubBadge_cross_btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addGithubBadgePopupHandler);
                    UTILS.log("Configured addGithubBadge Event Handlers!");
                    return [2 /*return*/];
            }
        });
    });
}
