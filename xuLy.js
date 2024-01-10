/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/xuLy.js":
/*!************************!*\
  !*** ./public/xuLy.js ***!
  \************************/
/***/ (() => {

eval("var socket = io(\"http://localhost:3000\");\nsocket.on(\"server-send-dki-thatbai\", function () {\n  alert(\"da dang ky roi\");\n});\nsocket.on(\"server-send-danhsach-Users\", function (data) {\n  $(\"#boxContent\").html(\"\");\n  data.forEach(function (i) {\n    $(\"#boxContent\").append(\"<div class='user'>\" + i + \"</div>\");\n  });\n});\nsocket.on(\"server-send-dky-thanhcong\", function (data) {\n  $(\"#currentUser\").html(data);\n  $(\"#loginForm\").hide(2000);\n  $(\"#chatForm\").show(1000);\n});\nsocket.on(\"server-send-message\", function (data) {\n  $(\"#listMessages\").append(\"<div class='ms'>\" + data.un + \":\" + data.nd + \"</div>\");\n});\nsocket.on(\"ai-do-dang-go-chu\", function (data) {\n  $(\"#thongbao\").html(data);\n});\nsocket.on(\"ai-do-stop-go-chu\", function (data) {\n  $(\"#thongbao\").html(data);\n});\n$(document).ready(function () {\n  $(\"#loginForm\").show();\n  $(\"#chatForm\").hide();\n  $(\"#txtMessage\").focusin(function () {\n    socket.emit(\"toi-dang-go-chu\");\n  });\n  $(\"#txtMessage\").focusout(function () {\n    socket.emit(\"toi-stop-go-chu\");\n  });\n  $(\"#btnRegister\").click(function () {\n    socket.emit(\"client-sen-txtUsername\", $(\"#txtUsername\").val());\n  });\n  $(\"#btnLogout\").click(function () {\n    socket.emit(\"logout\");\n    $(\"#chatForm\").hide(2000);\n    $(\"#loginForm\").show(1000);\n  });\n  $(\"#btnSendMessage\").click(function () {\n    socket.emit(\"user-send-message\", $(\"#txtMessage\").val());\n  });\n});\n\n//# sourceURL=webpack://b/./public/xuLy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/xuLy.js"]();
/******/ 	
/******/ })()
;