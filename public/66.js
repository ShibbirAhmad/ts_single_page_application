(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-flip-countdown */ "./node_modules/vue2-flip-countdown/dist/vue2-flip-countdown.js");
/* harmony import */ var vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-owl-carousel */ "./node_modules/vue-owl-carousel/dist/vue-owl-carousel.js");
/* harmony import */ var vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.getCourseList();
    this.getPostList();
    this.$store.dispatch("landing_sliders");
    this.$store.dispatch("banner");
    this.$store.dispatch("upcoming_course");
  },
  data: function data() {
    return {
      courses: "",
      blogPosts: "",
      base_url: this.$store.state.storage
    };
  },
  methods: {
    getCourseList: function getCourseList() {
      var _this = this;

      axios.get("/api/display/course/public").then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "OK") {
          _this.courses = resp.data.courses;
        }
      });
    },
    getPostList: function getPostList() {
      var _this2 = this;

      axios.get("/api/blog/post/public").then(function (resp) {
        // console.log(resp);
        if (resp.data.status == "OK") {
          _this2.blogPosts = resp.data.blog_posts;
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
  },
  computed: {
    landing_sliders: function landing_sliders() {
      return this.$store.getters.landing_sliders;
    },
    banner: function banner() {
      return this.$store.getters.banner;
    },
    upcoming_course: function upcoming_course() {
      return this.$store.getters.upcoming_course;
    }
  },
  components: {
    carousel: vue_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default.a,
    FlipCountdown: vue2_flip_countdown__WEBPACK_IMPORTED_MODULE_0___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "hero-section" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-8 col-md-8 col-sm-12" }, [
            _c(
              "div",
              { staticClass: "slider_container" },
              [
                _vm.landing_sliders
                  ? _c(
                      "carousel",
                      {
                        attrs: {
                          items: 1,
                          nav: false,
                          autoplay: true,
                          autoplayTimeout: 2000
                        }
                      },
                      _vm._l(_vm.landing_sliders, function(slider) {
                        return _c(
                          "a",
                          { key: slider.id, attrs: { href: slider.url } },
                          [
                            _c("img", {
                              attrs: {
                                src: slider.image
                                  ? _vm.base_url + slider.image
                                  : _vm.base_url + "images/no_image.jpg"
                              }
                            })
                          ]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-4 col-sm-0" }, [
            _c("div", { staticClass: "baner_container" }, [
              _vm.banner
                ? _c("img", {
                    attrs: {
                      id: "banner",
                      src: _vm.banner[0].banner
                        ? _vm.base_url + _vm.banner[0].banner
                        : _vm.base_url + "images/no_image.jpg"
                    }
                  })
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "counter-section" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 col-md-6" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "counter-content" }, [
                _c("h2", [
                  _vm._v(
                    "UPCOMING COUSRE: " + _vm._s(_vm.upcoming_course.name) + " "
                  )
                ]),
                _vm._v(" "),
                _vm.upcoming_course.category_name
                  ? _c("h2", [
                      _vm._v(
                        " " +
                          _vm._s(_vm.upcoming_course.category_name.name) +
                          " "
                      )
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-lg-6 col-md-6" },
              [
                _c("flip-countdown", {
                  staticStyle: { color: "#fff" },
                  attrs: { deadline: "2021-02-15 00:00:00" }
                })
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("section", { staticClass: "courses-section spad" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.courses, function(course, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "col-lg-4 col-md-6 col-sm-12 course-item "
                },
                [
                  _c("div", { staticClass: "course_container" }, [
                    _c(
                      "div",
                      { staticClass: "course-thumb img-responsive" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "course_details",
                                params: { slug: course.slug }
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: course.image
                                  ? _vm.base_url + course.image
                                  : _vm.base_url + "images/no_image.jpg"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "course-cat" }, [
                          _c("span", [
                            _vm._v(_vm._s(course.category_name.name))
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "course-info" },
                      [
                        _c("div", { staticClass: "date" }, [
                          _c("i", { staticClass: "fa fa-clock-o" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.timeFormater(course.start_date)) +
                              " \n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "course_details",
                                params: { slug: course.slug }
                              }
                            }
                          },
                          [_c("h4", [_vm._v(_vm._s(course.name))])]
                        ),
                        _vm._v(" "),
                        _c("h4", { staticClass: "cource-price" }, [
                          _vm._v(_vm._s(course.duration))
                        ])
                      ],
                      1
                    )
                  ])
                ]
              )
            }),
            0
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("section", { staticClass: "event-section spad" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "parallax_background" }, [
              _c("div", { staticClass: "parallax_inside" }, [
                _c(
                  "div",
                  { staticClass: "parallax_content" },
                  [
                    _c("h4", [_vm._v(" Limited Time Offer ")]),
                    _vm._v(" "),
                    _c("h1", { staticClass: "parallax_offer" }, [
                      _vm._v(" 20% off ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-discover ",
                        attrs: { to: { name: "home" } }
                      },
                      [_vm._v(" DISCOVER NOW ")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "blog-section spad" }, [
        _c("div", { staticClass: "container" }, [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.blogPosts, function(post, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-xl-6 col-md-6 col-sm-12 " },
                [
                  _c("div", { staticClass: "blog-item" }, [
                    _c(
                      "div",
                      { staticClass: "blog-thumb set-bg" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "blog_post_details",
                                params: { slug: post.slug }
                              }
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: post.image
                                  ? _vm.base_url + post.image
                                  : _vm.base_url + "images/no_image.jpg",
                                alt: ""
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "blog-content" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "blog_post_details",
                                params: { slug: post.slug }
                              }
                            }
                          },
                          [_c("h4", [_vm._v(_vm._s(post.title))])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "blog-meta" }, [
                          _c("span", [
                            _c("i", { staticClass: "fa fa-calendar-o" }),
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.timeFormater(post.created_at)) +
                                "\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _c("i", { staticClass: "fa fa-user" }),
                            _vm._v(
                              " " +
                                _vm._s(post.admin_name.name) +
                                "\n                  "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", {
                          domProps: {
                            innerHTML: _vm._s(post.description.substr(0, 150))
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-read-more",
                            attrs: {
                              to: {
                                name: "blog_post_details",
                                params: { slug: post.slug }
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                     read more...\n                "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            }),
            0
          )
        ])
      ]),
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
    return _c("div", { staticClass: "big-icon" }, [
      _c("i", { staticClass: "fa fa-graduation-cap" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "enroll-section spad set-bg",
        attrs: { "data-setbg": "img/enroll-bg.jpg" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row service_row" }, [
            _c("div", { staticClass: "col-md-6 col-sm-12" }, [
              _c("div", { staticClass: "service_container" }, [
                _c("div", { staticClass: "service_outer" }, [
                  _c("div", { staticClass: "service_inner" }, [
                    _c("i", {
                      staticClass:
                        "fa fa-american-sign-language-interpreting service_icon1"
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "service_description1" }, [
                  _vm._v(" FREE LANGUAGE CLUB EVERY FRIDAY ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "service_container" }, [
                _c("div", { staticClass: "service_outer" }, [
                  _c("div", { staticClass: "service_inner" }, [
                    _c("i", { staticClass: "fa fa-money service_icon" })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "service_description2" }, [
                  _vm._v("MONEY-BACK GURANTEE WITH-IN 3 DAYS")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 col-sm-12 service_optional" }, [
              _c("div", { staticClass: "service_container" }, [
                _c("div", { staticClass: "service_outer" }, [
                  _c("div", { staticClass: "service_inner" }, [
                    _c("i", {
                      staticClass: "fa fa-thumbs-up service_icon",
                      staticStyle: { "margin-left": "15px" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "service_description3" }, [
                  _vm._v(" HIGH SKILL TRAINERS ")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "service_container" }, [
                _c("div", { staticClass: "service_outer" }, [
                  _c("div", { staticClass: "service_inner" }, [
                    _c("i", {
                      staticClass: "fa fa-headphones service_icon",
                      staticStyle: { margin: "14px" }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "service_description4" }, [
                  _vm._v(" DEDICATED ONLINE SUPPORT ")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-5" }, [
              _c("div", { staticClass: "section-title text-white" }, [
                _c("h3", [_vm._v("ENROLLMENT SKILL")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Get started with us to explore english skill")
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "enroll-list text-white" }, [
                _c("div", { staticClass: "enroll-list-item" }, [
                  _c("span", [_vm._v("1")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("SPEAKING")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.\n                  Vivamus interdum ultrices augue.\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "enroll-list-item" }, [
                  _c("span", [_vm._v("2")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("LISTENING")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.\n                  Vivamus interdum ultrices augue.\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "enroll-list-item" }, [
                  _c("span", [_vm._v("3")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("WRITING")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.\n                  Vivamus interdum ultrices augue.\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "enroll-list-item" }, [
                  _c("span", [_vm._v("4")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v("READING")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.\n                  Vivamus interdum ultrices augue.\n                "
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 offset-lg-1 p-lg-0 p-4" }, [
              _c("img", { attrs: { src: "img/encroll-img.jpg", alt: "" } })
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-center" }, [
      _c("h3", { staticClass: "heading" }, [_vm._v("OUR COURSES")]),
      _vm._v(" "),
      _c("p", [_vm._v("Building a better world, one course at a time")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      {
        staticClass: "fact-section spad set-bg",
        attrs: { "data-setbg": "img/fact-bg.jpg" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6 col-lg-3 fact" }, [
              _c("div", { staticClass: "fact-icon" }, [
                _c("i", { staticClass: "ti-crown" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fact-text" }, [
                _c("h2", [_vm._v("3")]),
                _vm._v(" "),
                _c("p", [_vm._v("YEARS")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 col-lg-3 fact" }, [
              _c("div", { staticClass: "fact-icon" }, [
                _c("i", { staticClass: "ti-briefcase" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fact-text" }, [
                _c("h2", [_vm._v("10")]),
                _vm._v(" "),
                _c("p", [_vm._v("TEACHERS")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 col-lg-3 fact" }, [
              _c("div", { staticClass: "fact-icon" }, [
                _c("i", { staticClass: "ti-user" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fact-text" }, [
                _c("h2", [_vm._v("500")]),
                _vm._v(" "),
                _c("p", [_vm._v("STUDENTS")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 col-lg-3 fact" }, [
              _c("div", { staticClass: "fact-icon" }, [
                _c("i", { staticClass: "ti-pencil-alt" })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fact-text" }, [
                _c("h2", [_vm._v("800+")]),
                _vm._v(" "),
                _c("p", [_vm._v("LESSONS")])
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-title text-center" }, [
      _c("h3", [_vm._v("LATEST BLOG")]),
      _vm._v(" "),
      _c("p", [_vm._v("Get latest article & top stories today")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/frontend/Index.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/frontend/Index.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6bd0a300&scoped=true& */ "./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bd0a300",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/frontend/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6bd0a300&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/Index.vue?vue&type=template&id=6bd0a300&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6bd0a300_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);