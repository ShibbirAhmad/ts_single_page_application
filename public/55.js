(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {},
  data: function data() {
    var _ref;

    return _ref = {
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        studentID: ""
      }),
      base_url: this.$store.state.storage,
      result_form: false,
      course_name: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      father_name: "",
      mother_name: ""
    }, _defineProperty(_ref, "mother_name", ""), _defineProperty(_ref, "student_id", ""), _defineProperty(_ref, "image", ""), _defineProperty(_ref, "dob", ""), _defineProperty(_ref, "speaking", ""), _defineProperty(_ref, "reading", ""), _defineProperty(_ref, "writing", ""), _defineProperty(_ref, "listening", ""), _defineProperty(_ref, "brand_score", ""), _defineProperty(_ref, "joined_date", ""), _defineProperty(_ref, "published_date", ""), _defineProperty(_ref, "authority_comment", ""), _ref;
  },
  methods: {
    checkStudentResult: function checkStudentResult() {
      var _this = this;

      this.form.get("/api/check/student/result/" + this.form.studentID).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this.speaking = resp.data.result.speaking;
          _this.reading = resp.data.result.reading;
          _this.writing = resp.data.result.writing;
          _this.listening = resp.data.result.listening;
          _this.speaking = resp.data.result.speaking;
          _this.brand_score = resp.data.result.brand_score;
          _this.authority_comment = resp.data.result.authority_comment;
          _this.course_name = resp.data.result.course_name.name;
          _this.name = resp.data.result.student_info.name;
          _this.father_name = resp.data.result.student_info.father_name;
          _this.mother_name = resp.data.result.student_info.mother_name;
          _this.dob = resp.data.result.student_info.dob;
          _this.gender = resp.data.result.student_info.gender;
          _this.address = resp.data.result.student_info.address;
          _this.email = resp.data.result.student_info.email;
          _this.phone = resp.data.result.student_info.phone;
          _this.image = resp.data.result.student_info.image;
          _this.student_id = resp.data.result.student_info.student_id;
          _this.joined_date = resp.data.result.student_info.created_at;
          _this.published_date = resp.data.result.created_at;
          _this.result_form = true;
        } else {
          _this.$toasted.show(resp.data.message, {
            type: "error",
            position: "top-center",
            duration: 5000
          });
        }
      });
    },
    timeFormater: function timeFormater(created_at) {
      var dmy = new Date(created_at);
      var day = dmy.getDay();
      var month = dmy.getMonth();
      var year = dmy.getFullYear();
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
      var r_date = "".concat(da, "-").concat(mo, "-").concat(ye);
      return r_date;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "col-md-3 col-sm-12" }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-md-12 col-sm-12 form_column text-white bg-info"
                },
                [
                  _c("div", { staticClass: "form-wrapper" }, [
                    _c(
                      "h4",
                      {
                        staticStyle: {
                          "padding-top": "10px",
                          "text-align": "center"
                        }
                      },
                      [_vm._v("\n              Student Result\n            ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.checkStudentResult($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "studentID" } }, [
                              _vm._v("Student ID")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.studentID,
                                  expression: "form.studentID"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("studentID")
                              },
                              attrs: {
                                placeholder: "Exmaple: TALIBS-4563 ",
                                autofocus: "",
                                required: "",
                                type: "text",
                                name: "studentID"
                              },
                              domProps: { value: _vm.form.studentID },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "studentID",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "studentID" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group text-center" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn  login_button",
                              attrs: { disabled: _vm.form.busy, type: "submit" }
                            },
                            [
                              _vm.form.busy
                                ? _c("i", {
                                    staticClass: "fa fa-spinner fa-spin"
                                  })
                                : _vm._e(),
                              _vm._v("Submit\n                ")
                            ]
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 col-sm-12" })
            ]),
            _vm._v(" "),
            _vm.result_form
              ? _c("div", { staticClass: "row  " }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-md-12 col-sm-12 col-xs-12 student_result_row "
                    },
                    [
                      _c("div", { staticClass: "result_container" }, [
                        _c("div", { staticClass: " header-box" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("div", { staticClass: "row  course_info" }, [
                            _c("div", { staticClass: "col-md-6 col-sm-12" }, [
                              _c("p", [
                                _vm._v(
                                  " Course Name: " +
                                    _vm._s(_vm.course_name) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 col-sm-6" }, [
                              _c("p", [
                                _vm._v(
                                  "Joined: " +
                                    _vm._s(_vm.timeFormater(_vm.joined_date)) +
                                    " "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 col-sm-6" }, [
                              _c("p", [
                                _vm._v(
                                  " Published: " +
                                    _vm._s(_vm.timeFormater(_vm.published_date))
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row_line0" })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "result_body_section" }, [
                          _c("div", { staticClass: "row " }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-7 col-sm-7 col-xs-7 flex"
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.name,
                                        expression: "name"
                                      }
                                    ],
                                    staticClass: "form-control m_view1",
                                    attrs: { type: "text", disabled: "" },
                                    domProps: { value: _vm.name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.name = $event.target.value
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.father_name,
                                        expression: "father_name"
                                      }
                                    ],
                                    staticClass: "form-control m_view2",
                                    attrs: { type: "text", disabled: "" },
                                    domProps: { value: _vm.father_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.father_name = $event.target.value
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.mother_name,
                                        expression: "mother_name"
                                      }
                                    ],
                                    staticClass: "form-control m_view3",
                                    attrs: { type: "text", disabled: "" },
                                    domProps: { value: _vm.mother_name },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.mother_name = $event.target.value
                                      }
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-3 text-center" }, [
                              _c("img", {
                                staticClass: "student_profile",
                                attrs: {
                                  src: _vm.image
                                    ? _vm.base_url + _vm.image
                                    : _vm.base_url + "images/no_image.jpg",
                                  alt: ""
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: " row_line1" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: " dob_row  row" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-md-5 col-sm-5" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _vm._m(2),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-md-7 col-sm-7" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.dob,
                                                expression: "dob"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: { value: _vm.dob },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.dob = $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-3 col-sm-3" },
                                  [
                                    _c("div", { staticClass: "row " }, [
                                      _vm._m(3),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-md-8 col-sm-8" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.gender,
                                                expression: "gender"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: { value: _vm.gender },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.gender = $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-4 col-sm-4" },
                                  [
                                    _c("div", { staticClass: "row " }, [
                                      _vm._m(4),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "col-md-7 col-sm-7" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.student_id,
                                                expression: "student_id"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              disabled: ""
                                            },
                                            domProps: { value: _vm.student_id },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.student_id =
                                                  $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "studentID_row  row" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-10" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.email,
                                      expression: "email"
                                    }
                                  ],
                                  staticClass:
                                    "form-control m_view1 family_info",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: { value: _vm.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.email = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.phone,
                                      expression: "phone"
                                    }
                                  ],
                                  staticClass:
                                    "form-control m_view2 family_info",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: { value: _vm.phone },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.phone = $event.target.value
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.address,
                                      expression: "address"
                                    }
                                  ],
                                  staticClass:
                                    "form-control  m_view3 family_info",
                                  attrs: { type: "text", disabled: "" },
                                  domProps: { value: _vm.address },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.address = $event.target.value
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: " row_line2" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: " dob_row  row" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", { staticClass: "row" }, [
                                _vm._m(6),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-3" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _vm._m(7),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-4" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.speaking,
                                            expression: "speaking"
                                          }
                                        ],
                                        staticClass:
                                          "form-control speaking_input",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.speaking },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.speaking = $event.target.value
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-2" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _vm._m(8),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.reading,
                                            expression: "reading"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.reading },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.reading = $event.target.value
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-2" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _vm._m(9),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.writing,
                                            expression: "writing"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.writing },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.writing = $event.target.value
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-2" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _vm._m(10),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.listening,
                                            expression: "listening"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.listening },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.listening = $event.target.value
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-3" }, [
                                  _c("div", { staticClass: "row" }, [
                                    _vm._m(11),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.brand_score,
                                            expression: "brand_score"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { type: "text", disabled: "" },
                                        domProps: { value: _vm.brand_score },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.brand_score =
                                              $event.target.value
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: " row_line3" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: " comment_row  row" }, [
                            _vm._m(12),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6 col-sm-6" }, [
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.authority_comment,
                                    expression: "authority_comment"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { rows: "5" },
                                domProps: { value: _vm.authority_comment },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.authority_comment = $event.target.value
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-6  col-sm-6 col-xs-6" },
                              [
                                _c("div", { staticClass: "row " }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-6 col-sm-6 col-xs-6"
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "img-responsive author_sign1",
                                        attrs: {
                                          src:
                                            _vm.base_url +
                                            "images/empty_image.jpg"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "col-md-6 col-sm-6 col-xs-6"
                                    },
                                    [
                                      _c("img", {
                                        staticClass:
                                          "img-responsive author_sign2",
                                        attrs: {
                                          src:
                                            _vm.base_url +
                                            "images/empty_image.jpg"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(13)
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _c("footer-section")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_title text-center" }, [
      _c("h4", { staticClass: "title_talibs" }, [_vm._v("TALIBS INSTITUTE")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 col-sm-2 col-xs-2 flex " }, [
      _c("p", [_vm._v("Name  ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Father Name  ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Mother Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 col-sm-5" }, [
      _c("p", [_vm._v("Date Of Birth")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-4 col-sm-4" }, [
      _c("p", [_vm._v("Gender")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 col-sm-5" }, [
      _c("p", [_vm._v("Student ID")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("p", [_vm._v("Email ")]),
      _vm._v(" "),
      _c("p", [_vm._v(" Phone  ")]),
      _vm._v(" "),
      _c("p", [_vm._v(" Address  ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("p", [_c("b", [_vm._v(" Result Score")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8" }, [
      _c("p", [_vm._v("Speaking")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [_vm._v("Reading")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [_vm._v("Writing")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [_vm._v("Listening")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("p", [_vm._v("Brand Score")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12  col-sm-12" }, [
      _c("p", [_c("b", [_vm._v(" Authority Comments")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " row result_footer_row " }, [
      _c("div", { staticClass: "row_line4" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12 col-sm-12 text-center" }, [
        _c("p", [_vm._v(" All informatin is published by Talibs Institute ")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/frontend/student/Result.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/frontend/student/Result.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Result.vue?vue&type=template&id=710638b3&scoped=true& */ "./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true&");
/* harmony import */ var _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "710638b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/student/Result.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/student/Result.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Result.vue?vue&type=template&id=710638b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/student/Result.vue?vue&type=template&id=710638b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Result_vue_vue_type_template_id_710638b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);