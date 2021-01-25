(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getCourseDetails();
  },
  data: function data() {
    return {
      related_courses: "",
      courseDetails: "",
      base_url: this.$store.state.storage
    };
  },
  methods: {
    timeFormater: function timeFormater(created_at) {
      var dt = new Date(created_at);
      var day = dt.getDay();
      var month = dt.getMonth();
      var year = dt.getFullYear();
      var d = new Date(year, month, day);
      var ye = new Intl.DateTimeFormat("en", {
        year: "numeric"
      }).format(d);
      var mo = new Intl.DateTimeFormat("en", {
        month: "short"
      }).format(d);
      var da = new Intl.DateTimeFormat("en", {
        day: "2-digit"
      }).format(d);
      var formated_date = "".concat(da, "-").concat(mo, "-").concat(ye);
      return formated_date;
    },
    getCourseDetails: function getCourseDetails() {
      var _this = this;

      axios.get("/api/course/details/" + this.$route.params.slug).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this.courseDetails = resp.data.course;
          _this.other_course = resp.data.other_course;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-join-now[data-v-82871156]{\r\n     background: #f6783a;\r\n    color: #fff;\r\n    margin-bottom: 10px;\r\n    margin-left: 40%;\r\n    width: 115px;\r\n    height: 50px;\r\n    padding-top: 12px;\n}\n.btn-join-now[data-v-82871156]:hover{\r\n \r\n    box-shadow: 1px 1px 3px 1px #f6783a;\n}\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("header-section"),
      _vm._v(" "),
      _c(
        "section",
        {
          staticClass: "blog-page-section spad pt-0",
          staticStyle: { "margin-top": "20px" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-8" }, [
                _c(
                  "div",
                  { staticClass: "post-item post-details" },
                  [
                    _c("img", {
                      staticClass: "post-thumb-full",
                      attrs: {
                        src: _vm.courseDetails.image
                          ? _vm.base_url + _vm.courseDetails.image
                          : _vm.base_url + "images/no_image.jpg",
                        alt: ""
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "post-content" }, [
                      _c("h3", [
                        _vm._v(" " + _vm._s(_vm.courseDetails.title) + " ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "post-meta" }, [
                        _c("span", [
                          _c("i", { staticClass: "fa fa-calendar-o" }),
                          _vm._v(
                            _vm._s(
                              _vm.timeFormater(_vm.courseDetails.start_date)
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", {
                        domProps: {
                          innerHTML: _vm._s(_vm.courseDetails.description)
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-join-now",
                        attrs: { to: { name: "student_register" } }
                      },
                      [
                        _vm._v(
                          "\n                       Join Now \n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-sm-8 col-md-5 col-lg-4 col-xl-3 offset-xl-1 offset-0 pl-xl-0 sidebar"
                },
                [
                  _c("div", { staticClass: "widget" }, [
                    _c("h5", { staticClass: "widget-title" }, [
                      _vm._v(" OTHER COURSES ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "recent-post-widget" },
                      _vm._l(_vm.other_course, function(other_course, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "rp-item" },
                          [
                            _c(
                              "div",
                              { staticClass: "rp-thumb set-bg" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "course_details",
                                        params: { slug: other_course.slug }
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: other_course.image
                                          ? _vm.base_url + other_course.image
                                          : _vm.base_url + "images/no_image.jpg"
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "rp-content" }, [
                              _c(
                                "h6",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "course_details",
                                          params: { slug: other_course.slug }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " + _vm._s(other_course.name) + " "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v("Start On "),
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(
                                  " " +
                                    _vm._s(
                                      _vm.timeFormater(other_course.created_at)
                                    ) +
                                    " "
                                )
                              ])
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("footer-section")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/frontend/CourseDetails.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/frontend/CourseDetails.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=template&id=82871156&scoped=true& */ "./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true&");
/* harmony import */ var _CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& */ "./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "82871156",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/CourseDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=style&index=0&id=82871156&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_style_index_0_id_82871156_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetails.vue?vue&type=template&id=82871156&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/CourseDetails.vue?vue&type=template&id=82871156&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetails_vue_vue_type_template_id_82871156_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);