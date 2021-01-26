(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  created: function created() {
    this.getPostDetails();
    this.$store.dispatch("user");
  },
  data: function data() {
    return {
      related_blog_posts: "",
      blogDetails: "",
      base_url: this.$store.state.storage,
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        post_id: "",
        comment: ""
      }),
      reply_input: false,
      comment_reply: ""
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
    getPostDetails: function getPostDetails() {
      var _this = this;

      axios.get("/api/blog/details/" + this.$route.params.slug).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this.blogDetails = resp.data.blog_post;
          _this.form.post_id = resp.data.blog_post.id;
          _this.related_blog_posts = resp.data.related_blog_posts;
        }
      });
    },
    userComment: function userComment() {
      var _this2 = this;

      this.form.post("/api/user/comment", {
        transformRequest: [function (data, headers) {
          return objectToFormData(data);
        }]
      }).then(function (resp) {
        if (resp.data.status == "OK") {
          _this2.form.comment = "";

          _this2.$toasted.show(resp.data.message, {
            type: "success",
            position: "top-center",
            duration: 4000
          });

          _this2.getPostDetails();
        }
      });
    },
    addCommentLike: function addCommentLike($comment_id, index) {
      var _this3 = this;

      axios.get("/api/user/like/to/comment/" + $comment_id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "LIKE") {
          document.getElementById("__like_btn_" + $comment_id).classList.toggle("highlight");

          _this3.getPostDetails();
        }

        if (resp.data.status == "DISLIKE") {
          document.getElementById("__like_btn_" + $comment_id).classList.toggle("highlight");

          _this3.getPostDetails();
        }
      });
    },
    addReplyLike: function addReplyLike($reply_id, index) {
      var _this4 = this;

      axios.get("/api/user/like/to/reply/" + $reply_id).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "LIKE") {
          document.getElementById("__reply_like_" + $reply_id).classList.toggle("highlight");

          _this4.getPostDetails();
        }

        if (resp.data.status == "DISLIKE") {
          document.getElementById("__reply_like_" + $reply_id).classList.toggle("highlight");

          _this4.getPostDetails();
        }
      });
    },
    addUserReply: function addUserReply($comment_id) {
      var _this5 = this;

      axios.post("/api/user/reply/on/comment", {
        comment_reply: this.comment_reply,
        comment_id: $comment_id
      }).then(function (resp) {
        console.log(resp);

        if (resp.data.status == "OK") {
          _this5.getPostDetails();
        }
      });
    },
    ReplyFormDiplayer: function ReplyFormDiplayer(e) {
      var target_element = e.target.nextSibling;
      target_element.nextElementSibling.classList.toggle("block");
    }
  },
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.like_display[data-v-3f096c2e] {\r\n  background: #eee;\r\n  color: #000;\r\n  padding: 1px 15px;\r\n  border-radius: 5px;\n}\n.like_count[data-v-3f096c2e] {\r\n  color: #f6783a;\n}\n.commentReply[data-v-3f096c2e] {\r\n  display: none;\r\n  margin-top: 10px;\r\n  padding: 5px;\n}\n.block[data-v-3f096c2e] {\r\n  display: block;\n}\n.highlight[data-v-3f096c2e] {\r\n  background: #f6783a;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                _c("div", { staticClass: "post-item post-details" }, [
                  _c("img", {
                    staticClass: "post-thumb-full",
                    attrs: {
                      src: _vm.blogDetails.image
                        ? _vm.base_url + _vm.blogDetails.image
                        : _vm.base_url + "images/no_image.jpg",
                      alt: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "post-content" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.blogDetails.title))]),
                    _vm._v(" "),
                    _c("div", { staticClass: "post-meta" }, [
                      _c("span", [
                        _c("i", { staticClass: "fa fa-calendar-o" }),
                        _vm._v(
                          _vm._s(_vm.timeFormater(_vm.blogDetails.created_at))
                        )
                      ]),
                      _vm._v(" "),
                      _vm.blogDetails.admin_name
                        ? _c("span", [
                            _c("i", { staticClass: "fa fa-user" }),
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.blogDetails.admin_name.name) +
                                "\n                  "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("p", {
                      domProps: {
                        innerHTML: _vm._s(_vm.blogDetails.description)
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "post-author" }, [
                    _c("div", [
                      _c("img", {
                        staticClass: "pa-thumb set-bg",
                        attrs: {
                          src: _vm.blogDetails.admin_name.image
                            ? _vm.base_url + _vm.blogDetails.admin_name.image
                            : _vm.base_url + "images/no_image.jpg",
                          alt: ""
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pa-content" }, [
                      _vm.blogDetails.admin_name
                        ? _c("h4", [
                            _vm._v("\n                    Written by "),
                            _c("b", [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.blogDetails.admin_name.name) +
                                  " "
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                    Mauris lectus justo, tempor ac auctor at, congue id erat.\n                    Pellentesque et massa odio. Fusce vel fermentum tortor, nec\n                    gravida ligula. Vivamus at malesuada tortor, in posuere ex.\n                    Phasellus pretium turpis non ipsum vestibulum, a finibus\n                    quam rhoncus.\n                  "
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "comment-warp" }, [
                    _c("h4", { staticClass: "comment-title" }, [
                      _vm._v(
                        "\n                  " +
                          _vm._s(_vm.blogDetails.comments.length) +
                          "\n                  "
                      ),
                      _c("i", { staticClass: "fa fa-comments" })
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "comment-list" },
                      _vm._l(_vm.blogDetails.comments, function(
                        comment,
                        index
                      ) {
                        return _c("li", { key: index }, [
                          _c("div", { staticClass: "comment" }, [
                            _c("div", { staticClass: "set-bg" }, [
                              _c("img", {
                                staticClass: "comment-avator",
                                attrs: {
                                  src: comment.user.image
                                    ? _vm.base_url + comment.user.image
                                    : _vm.base_url + "images/no_image.jpg"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "comment-content" }, [
                              _c("span", { staticClass: "c-date" }, [
                                _vm._v(
                                  _vm._s(_vm.timeFormater(comment.created_at))
                                )
                              ]),
                              _vm._v(" "),
                              _c("h5", [_vm._v(_vm._s(comment.user.name))]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                          " +
                                    _vm._s(comment.comment) +
                                    "\n                          "
                                ),
                                comment.likes.length
                                  ? _c(
                                      "span",
                                      { staticClass: "like_display" },
                                      [
                                        _c("i", {
                                          staticClass:
                                            "fa fa-thumbs-up like_count"
                                        }),
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(comment.likes.length)
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              Object.keys(_vm.user).length
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "c-btn",
                                      attrs: { id: "__like_btn_" + comment.id },
                                      on: {
                                        click: function($event) {
                                          return _vm.addCommentLike(
                                            comment.id,
                                            index
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-thumbs-up fa-lg"
                                      })
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              Object.keys(_vm.user).length
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "c-btn",
                                      on: { click: _vm.ReplyFormDiplayer }
                                    },
                                    [_vm._v("Reply")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", { staticClass: "commentReply" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.addUserReply(comment.id)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group text-center" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.comment_reply,
                                              expression: "comment_reply"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "text", required: "" },
                                          domProps: {
                                            value: _vm.comment_reply
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.comment_reply =
                                                $event.target.value
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          comment.replies.length
                            ? _c(
                                "ul",
                                { staticClass: "replay-comment-list" },
                                _vm._l(comment.replies, function(
                                  comment_reply,
                                  index
                                ) {
                                  return _c("li", { key: index }, [
                                    _c("div", { staticClass: "comment" }, [
                                      _c("div", { staticClass: "set-bg" }, [
                                        _c("img", {
                                          staticClass: "comment-avator",
                                          attrs: {
                                            src: comment_reply.user.image
                                              ? _vm.base_url +
                                                comment_reply.user.image
                                              : _vm.base_url +
                                                "images/no_image.jpg"
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "comment-content" },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "c-date" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.timeFormater(
                                                    comment_reply.created_at
                                                  )
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("h5", [
                                            _vm._v(
                                              _vm._s(comment_reply.user.name)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", [
                                            _vm._v(_vm._s(comment_reply.reply))
                                          ]),
                                          _vm._v(" "),
                                          Object.keys(_vm.user).length
                                            ? _c(
                                                "a",
                                                {
                                                  staticClass: "c-btn",
                                                  attrs: {
                                                    id:
                                                      "__reply_like_" +
                                                      comment_reply.id
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.addReplyLike(
                                                        comment_reply.id,
                                                        index
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Like\n                            "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          comment_reply.likes.length
                                            ? _c(
                                                "span",
                                                { staticClass: "like_display" },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fa fa-thumbs-up like_count"
                                                  }),
                                                  _vm._v(
                                                    "\n                              " +
                                                      _vm._s(
                                                        comment_reply.likes
                                                          .length
                                                      )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            : _vm._e()
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "comment-form-warp text-center" },
                      [
                        _c("h4", { staticClass: "comment-title" }, [
                          _vm._v("Leave Your Comment")
                        ]),
                        _vm._v(" "),
                        Object.keys(_vm.user).length
                          ? _c(
                              "form",
                              {
                                staticClass: "comment-form",
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.userComment($event)
                                  }
                                }
                              },
                              [
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-sm-12" },
                                    [
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.comment,
                                            expression: "form.comment"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "has-invalid": _vm.form.errors.has(
                                            "comment"
                                          )
                                        },
                                        attrs: {
                                          required: "",
                                          name: "comment",
                                          rows: "1"
                                        },
                                        domProps: { value: _vm.form.comment },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "comment",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("has-error", {
                                        attrs: {
                                          form: _vm.form,
                                          field: "comment"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "site-btn",
                                          attrs: { type: "submit" }
                                        },
                                        [_vm._v("COMMENT")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ]
                            )
                          : _c(
                              "router-link",
                              {
                                staticClass: "btn btn-info",
                                attrs: { to: { name: "user_login" } }
                              },
                              [_vm._v("signin to comment")]
                            )
                      ],
                      1
                    )
                  ])
                ])
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
                      _vm._v("Related Article")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "recent-post-widget" },
                      _vm._l(_vm.related_blog_posts, function(
                        related_blog,
                        index
                      ) {
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
                                        name: "blog_post_details",
                                        params: { slug: related_blog.slug }
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: related_blog.image
                                          ? _vm.base_url + related_blog.image
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
                                          name: "blog_post_details",
                                          params: { slug: related_blog.slug }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(related_blog.title) +
                                          "\n                      "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(
                                  "\n                      " +
                                    _vm._s(
                                      _vm.timeFormater(related_blog.created_at)
                                    ) +
                                    "\n                    "
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

/***/ "./resources/js/components/frontend/BlogPostDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/frontend/BlogPostDetails.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true& */ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true&");
/* harmony import */ var _BlogPostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPostDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& */ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlogPostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f096c2e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/BlogPostDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=style&index=0&id=3f096c2e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_style_index_0_id_3f096c2e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/BlogPostDetails.vue?vue&type=template&id=3f096c2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogPostDetails_vue_vue_type_template_id_3f096c2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);