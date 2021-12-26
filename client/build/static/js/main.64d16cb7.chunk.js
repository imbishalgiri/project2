(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    74: function (e, t, a) {},
    75: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        s = a.n(n),
        c = a(22),
        r = a.n(c),
        o = a(6),
        l = a(9),
        i = a(2),
        d = a(3),
        h = a(5),
        m = a(4),
        j = a(12),
        u = a(23),
        b = a(20),
        p = a(38),
        O = a(27),
        x = 'CODE_SEND_ERROR',
        f = 'VERIFY_CODE_SEND_ERROR',
        v = 'SET_CURRENT_USER',
        g = 'FETCH_ALL_DATAS',
        N = 'GET_NOTICE',
        y = { isAuthenticated: !1, user: {} },
        C = function (e) {
          return (
            void 0 === e ||
            null === e ||
            ('object' === typeof e && 0 === Object.keys(e).length) ||
            ('string' === typeof e && 0 === e.trim().length)
          );
        },
        w = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === v
            ? Object(O.a)(
                Object(O.a)({}, e),
                {},
                { isAuthenticated: !C(t.payload), user: t.payload }
              )
            : e;
        },
        k = { status: '' },
        S = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === x ? t.payload : e;
        },
        E = {},
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === f ? t.payload : e;
        },
        F = { status: 'failed', data: { assignments: [] } },
        D = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : F,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === g ? t.payload : e;
        },
        T = { data: { notices: [{ title: '', description: '' }] } },
        I = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return t.type === N ? t.payload : e;
        },
        _ = Object(b.b)({ auth: w, codeErr: S, vCodeErr: A, datasFetched: D, notice: I }),
        B = [p.a],
        L = Object(b.d)(
          _,
          {},
          Object(b.c)(
            b.a.apply(void 0, B),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        ),
        U = a(11),
        V = a.n(U),
        R = function (e) {
          e
            ? (V.a.defaults.headers.common.Authorization = e)
            : delete V.a.defaults.headers.common.Authorization;
        },
        M = a(7),
        P = a.n(M),
        q = a(13),
        G = function (e, t, a) {
          return (function () {
            var n = Object(q.a)(
              P.a.mark(function n(s) {
                return P.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            console.log(e),
                            (n.prev = 1),
                            (n.next = 4),
                            V.a.post('api/v1/'.concat(a), e)
                          );
                        case 4:
                          s({ type: x, payload: { signup: !0 } }),
                            console.log('verified'),
                            'students' === a ? t.push('/login') : t.push('/teacherLogin'),
                            (n.next = 13);
                          break;
                        case 9:
                          (n.prev = 9),
                            (n.t0 = n.catch(1)),
                            console.log(n.t0),
                            s({ type: f, payload: n.t0.response.data });
                        case 13:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        X = function (e, t, a) {
          return (function () {
            var n = Object(q.a)(
              P.a.mark(function n(s) {
                var c, r, o;
                return P.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0), (n.next = 3), V.a.post('api/v1/'.concat(t, '/login'), e)
                          );
                        case 3:
                          (c = n.sent),
                            (r = c.data.token),
                            localStorage.setItem('jwtToken', r),
                            R(r),
                            (o = Object(u.a)(r)),
                            console.log(o),
                            s(H(o)),
                            a.push('/notice'),
                            (n.next = 17);
                          break;
                        case 13:
                          (n.prev = 13),
                            (n.t0 = n.catch(0)),
                            console.log(n.t0),
                            s({ type: x, payload: n.t0.response.data });
                        case 17:
                        case 'end':
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [[0, 13]]
                );
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        },
        H = function (e) {
          return { type: v, payload: e };
        },
        Y = a(0),
        z = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            var e;
            Object(i.a)(this, a);
            for (var n = arguments.length, s = new Array(n), c = 0; c < n; c++) s[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(s))).logout = function (t) {
                t.preventDefault(), e.props.logoutUser(e.props.history);
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.auth,
                    t = e.isAuthenticated,
                    a = e.user,
                    n = Object(Y.jsxs)('ul', {
                      className: 'navbar-nav ml-auto',
                      children: [
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link',
                            to: '/teacherRegister',
                            children: 'Teacher Sign Up'
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link',
                            to: '/teacherLogin',
                            children: 'Teacher Login'
                          })
                        })
                      ]
                    }),
                    s = Object(Y.jsxs)('ul', {
                      className: 'navbar-nav ml-auto',
                      children: [
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/ViewSubmittedAssignments',
                            children: Object(Y.jsx)('h6', { children: 'View Submitted Assignment' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/publishassignment',
                            children: Object(Y.jsx)('h6', { children: 'Publish Assignment' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/postitems',
                            children: Object(Y.jsx)('h6', { children: 'Discussion' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)('div', {
                            className: 'nav-link',
                            style: { cursor: 'pointer' },
                            onClick: this.logout,
                            children: 'Logout'
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/notice',
                            children: Object(Y.jsx)('h6', { children: 'Notice' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)('div', {
                            className: 'nav-link',
                            children: a.firstName
                          })
                        })
                      ]
                    }),
                    c = Object(Y.jsxs)('ul', {
                      className: 'navbar-nav ml-auto',
                      children: [
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/postitems',
                            children: Object(Y.jsx)('h6', { children: 'Discussion' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/viewassignment',
                            children: Object(Y.jsx)('h6', { children: 'Assignment' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/notice',
                            children: Object(Y.jsx)('h6', { children: 'Notice' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)('div', {
                            className: 'nav-link',
                            style: { cursor: 'pointer' },
                            onClick: this.logout,
                            children: 'Logout'
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)('div', {
                            className: 'nav-link',
                            children: a.firstName
                          })
                        })
                      ]
                    }),
                    r = Object(Y.jsxs)('ul', {
                      className: 'navbar-nav ml-auto',
                      children: [
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/addPreTeacher',
                            children: Object(Y.jsx)('h6', { children: 'Add Teacher' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/userUpload',
                            children: Object(Y.jsx)('h6', { children: 'Add Student' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/addnotice',
                            children: Object(Y.jsx)('h6', { children: 'Notice Posting' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/notice',
                            children: Object(Y.jsx)('h6', { children: 'View Notice' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)(l.b, {
                            className: 'nav-link text-light',
                            to: '/postitems',
                            children: Object(Y.jsx)('h6', { children: 'Discussion' })
                          })
                        }),
                        Object(Y.jsx)('li', {
                          className: 'nav-item',
                          children: Object(Y.jsx)('div', {
                            className: 'nav-link',
                            style: { cursor: 'pointer' },
                            onClick: this.logout,
                            children: 'Logout'
                          })
                        })
                      ]
                    });
                  return Object(Y.jsx)('nav', {
                    className: 'navbar navbar-expand-sm navbar-dark  bg-dark mb-4',
                    children: Object(Y.jsxs)('div', {
                      className: 'container',
                      children: [
                        Object(Y.jsx)(l.b, {
                          className: 'navbar-brand',
                          to: '/',
                          children: 'OurCollege'
                        }),
                        Object(Y.jsx)('button', {
                          className: 'navbar-toggler',
                          type: 'button',
                          'data-toggle': 'collapse',
                          'data-target': '#mobile-nav',
                          children: Object(Y.jsx)('span', { className: 'navbar-toggler-icon' })
                        }),
                        Object(Y.jsx)('div', {
                          className: 'collapse navbar-collapse',
                          id: 'mobile-nav',
                          children: t ? ('admin' === a.role ? r : 'teacher' === a.role ? s : c) : n
                        })
                      ]
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        J = Object(o.b)(
          function (e) {
            return { auth: e.auth };
          },
          {
            logoutUser: function (e) {
              return function (t) {
                localStorage.removeItem('jwtToken'), R(!1), t(H({})), e.push('/login');
              };
            }
          }
        )(Object(j.e)(z)),
        K = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'landing',
                    children: Object(Y.jsx)('div', {
                      className: 'dark-overlay landing-inner text-light',
                      children: Object(Y.jsx)('div', {
                        className: 'container',
                        children: Object(Y.jsx)('div', {
                          className: 'row',
                          children: Object(Y.jsxs)('div', {
                            className: 'col-md-12 text-center',
                            children: [
                              Object(Y.jsx)('h1', {
                                className: 'display-3 mb-4',
                                children: 'Our College'
                              }),
                              Object(Y.jsx)('p', {
                                className: 'lead',
                                children:
                                  " let's uplift our interaction technique with each other. "
                              }),
                              Object(Y.jsx)('hr', {}),
                              Object(Y.jsx)(l.b, {
                                to: '/register',
                                className: 'btn btn-lg btn-info mr-2',
                                children: 'Student Signup'
                              }),
                              Object(Y.jsx)(l.b, {
                                to: '/login',
                                className: 'btn btn-lg btn-light',
                                children: 'Student Login'
                              })
                            ]
                          })
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        Q = K;
      function W() {
        return Object(Y.jsxs)('footer', {
          className: 'bg-dark text-white mt-5 p-4 text-center',
          ref: function (e) {
            e && e.style.setProperty('margin-top', '200px', 'important');
          },
          children: ['Copyright \xa9 ', new Date().getFullYear(), ' Our College Developers Team.']
        });
      }
      var Z = a(8),
        $ = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = { email: t.email, password: t.password };
                n.props.loginUser(a, 'students', n.props.history);
              }),
              (n.state = { email: '', password: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'login',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            'fail' !== this.props.codeErr.status
                              ? Object(Y.jsx)('h1', {
                                  className: 'display-4 text-center',
                                  children: 'Student Log In'
                                })
                              : Object(Y.jsx)('p', {
                                  className: 'lead text-center text-danger',
                                  children: 'Incorrect Credentials'
                                }),
                            Object(Y.jsx)('p', {
                              className: 'lead text-center',
                              children: 'Sign in to your College account'
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'email',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Email Address',
                                    name: 'email',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'password',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Password',
                                    name: 'password',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        ee = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          { loginUser: X }
        )(Object(j.e)($)),
        te = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = { email: t.email, password: t.password };
                n.props.loginUser(a, 'admins', n.props.history);
              }),
              (n.state = { email: '', password: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'login',
                    style: { marginBottom: '100px' },
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            'fail' !== this.props.codeErr.status
                              ? Object(Y.jsx)('h1', {
                                  className: 'display-4 text-center',
                                  children: 'Admin Log In'
                                })
                              : Object(Y.jsx)('p', {
                                  className: 'lead text-center text-danger',
                                  children: 'Incorrect Credentials'
                                }),
                            Object(Y.jsx)('p', {
                              className: 'lead text-center',
                              children: 'Admin Login section'
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'email',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Email Address',
                                    name: 'email',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'password',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Password',
                                    name: 'password',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        ae = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          { loginUser: X }
        )(Object(j.e)(te)),
        ne = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = { email: t.email, password: t.password };
                n.props.loginUser(a, 'teachers', n.props.history);
              }),
              (n.state = { email: '', password: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'login',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            'fail' !== this.props.codeErr.status
                              ? Object(Y.jsx)('h1', {
                                  className: 'display-4 text-center',
                                  children: 'Teacher Log In'
                                })
                              : Object(Y.jsx)('p', {
                                  className: 'lead text-center text-danger',
                                  children: 'Incorrect Credentials'
                                }),
                            Object(Y.jsx)('p', {
                              className: 'lead text-center',
                              children: 'Sign in to your College account'
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'email',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Email Address',
                                    name: 'email',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'password',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Password',
                                    name: 'password',
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        se = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          { loginUser: X }
        )(Object(j.e)(ne)),
        ce = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = {
                    fName: t.fName,
                    mName: t.mName,
                    lName: t.lName,
                    email: t.email,
                    password: t.password
                  };
                n.props.registerUser(a, n.props.history, 'student');
              }),
              (n.state = { fName: '', mName: '', lName: '', email: '', password: '', errors: {} }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.password.length > 7 ? '' : 'is-invalid';
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Student Sign Up'
                            }),
                            'error' !== this.props.codeErr.status
                              ? Object(Y.jsx)('p', {
                                  className: 'lead text-center',
                                  children: 'Create your App account.'
                                })
                              : Object(Y.jsx)('p', {
                                  className: 'lead text-center text-danger',
                                  children: 'cannot let you in.'
                                }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'First Name *',
                                    name: 'fName',
                                    value: this.state.fName,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Middle Name',
                                    name: 'mName',
                                    value: this.state.mName,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Last Name *',
                                    name: 'lName',
                                    value: this.state.lName,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'email',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Email Address *',
                                    name: 'email',
                                    value: this.state.email,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'password',
                                    className: 'form-control form-control-lg '.concat(e),
                                    placeholder: 'Password * min 8 chars',
                                    name: 'password',
                                    value: this.state.password,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        re = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          {
            registerUser: function (e, t, a) {
              return (function () {
                var n = Object(q.a)(
                  P.a.mark(function n(s) {
                    var c;
                    return P.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (c = { email: e.email }),
                                (n.prev = 1),
                                (n.next = 4),
                                V.a.post('api/v1/sendCode', c)
                              );
                            case 4:
                              s({ type: x, payload: e }),
                                'student' === a
                                  ? t.push('/confirmCode')
                                  : t.push('/confirmTeacherCode'),
                                (n.next = 12);
                              break;
                            case 8:
                              (n.prev = 8),
                                (n.t0 = n.catch(1)),
                                console.log(n.t0),
                                s({ type: x, payload: n.t0.response.data });
                            case 12:
                            case 'end':
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })();
            }
          }
        )(Object(j.e)(ce)),
        oe = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = {
                    fName: t.fName,
                    mName: t.mName,
                    lName: t.lName,
                    email: t.email,
                    password: t.password
                  };
                n.props.registerTeacher(a, n.props.history, 'teacher');
              }),
              (n.state = { fName: '', mName: '', lName: '', email: '', password: '', errors: {} }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.password.length > 7 ? '' : 'is-invalid';
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Sign Up Teacher'
                            }),
                            'error' !== this.props.codeErr.status
                              ? Object(Y.jsx)('p', {
                                  className: 'lead text-center',
                                  children: 'Create your App account.'
                                })
                              : Object(Y.jsx)('p', {
                                  className: 'lead text-center text-danger',
                                  children:
                                    'please make your email is not fake and havent registered yet.'
                                }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'First Name *',
                                    name: 'fName',
                                    value: this.state.fName,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Middle Name',
                                    name: 'mName',
                                    value: this.state.mName,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Last Name *',
                                    name: 'lName',
                                    value: this.state.lName,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'email',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Email Address *',
                                    name: 'email',
                                    value: this.state.email,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'password',
                                    className: 'form-control form-control-lg '.concat(e),
                                    placeholder: 'Password * min 8 chars',
                                    name: 'password',
                                    value: this.state.password,
                                    onChange: this.handleChange
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        le = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          {
            registerTeacher: function (e, t, a) {
              return (function () {
                var n = Object(q.a)(
                  P.a.mark(function n(s) {
                    var c;
                    return P.a.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (c = { email: e.email }),
                                (n.prev = 1),
                                (n.next = 4),
                                V.a.post('api/v1/sendCode/teacher', c)
                              );
                            case 4:
                              s({ type: x, payload: e }),
                                'student' === a
                                  ? t.push('/confirmCode')
                                  : t.push('/confirmTeacherCode'),
                                (n.next = 12);
                              break;
                            case 8:
                              (n.prev = 8),
                                (n.t0 = n.catch(1)),
                                console.log(n.t0),
                                s({ type: x, payload: n.t0.response.data });
                            case 12:
                            case 'end':
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })();
            }
          }
        )(Object(j.e)(oe)),
        ie = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.props.codeErr,
                  a = {
                    firstName: t.fName,
                    middleName: t.mName,
                    lastName: t.lName,
                    email: t.email,
                    password: t.password,
                    verificationCode: n.state.vCode
                  };
                n.props.verifyUser(a, n.props.history, 'students');
              }),
              (n.state = { vCode: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Verification'
                            }),
                            Object(Y.jsx)('p', {
                              className: 'lead text-center',
                              children: 'Enter 6 digit code that we sent to your entered gmail.'
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Name',
                                    name: 'vCode',
                                    value: this.state.vCode,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        de = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          { verifyUser: G }
        )(Object(j.e)(ie)),
        he = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.props.codeErr,
                  a = {
                    firstName: t.fName,
                    middleName: t.mName,
                    lastName: t.lName,
                    email: t.email,
                    password: t.password,
                    verificationCode: n.state.vCode
                  };
                n.props.verifyUser(a, n.props.history, 'teachers');
              }),
              (n.state = { vCode: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.auth.isAuthenticated && this.props.history.push('/notice');
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Verification'
                            }),
                            Object(Y.jsx)('p', {
                              className: 'lead text-center',
                              children: 'Enter 6 digit code that we sent to your entered gmail.'
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('input', {
                                    type: 'text',
                                    className: 'form-control form-control-lg',
                                    placeholder: 'Name',
                                    name: 'vCode',
                                    value: this.state.vCode,
                                    onChange: this.handleChange,
                                    required: !0
                                  })
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        me = Object(o.b)(
          function (e) {
            return { auth: e.auth, codeErr: e.codeErr };
          },
          { verifyUser: G }
        )(Object(j.e)(he)),
        je = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Add Routine'
                            }),
                            Object(Y.jsxs)('form', {
                              className: 'row g-3',
                              children: [
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      for: 'faculty',
                                      class: 'form-label font-weight-bold',
                                      children: 'Faculty:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      class: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          selected: !0,
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BESE',
                                          children: 'BESE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECE',
                                          children: 'BECE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BEIT',
                                          children: 'BEIT'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECIVIL',
                                          children: 'BECIVIL'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      for: 'semester',
                                      class: 'form-label font-weight-bold',
                                      children: 'Semester'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      class: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          selected: !0,
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: '1', children: 'one' }),
                                        Object(Y.jsx)('option', { value: '2', children: 'two' }),
                                        Object(Y.jsx)('option', { value: '3', children: 'three' }),
                                        Object(Y.jsx)('option', { value: '4', children: 'four' }),
                                        Object(Y.jsx)('option', { value: '5', children: 'five' }),
                                        Object(Y.jsx)('option', { value: '6', children: 'six' }),
                                        Object(Y.jsx)('option', { value: '7', children: 'seven' }),
                                        Object(Y.jsx)('option', { value: '8', children: 'eight' })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      for: 'faculty',
                                      class: 'form-label font-weight-bold',
                                      children: 'Shift:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      class: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          selected: !0,
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: 'day', children: 'day' }),
                                        Object(Y.jsx)('option', {
                                          value: 'morning',
                                          children: 'morning'
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        ue = je,
        be = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(), n.props.addUser(n.state);
              }),
              (n.state = {
                faculty: 'choose',
                semester: 'choose',
                shift: 'choose',
                email: '',
                rollNo: ''
              }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.registeredUser.status;
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Add Student'
                            }),
                            Object(Y.jsx)('h3', {
                              className: 'display-6 text-center',
                              children: e
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              className: 'row g-3',
                              children: [
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'faculty',
                                      className: 'form-label font-weight-bold',
                                      children: 'Faculty:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'faculty',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.faculty,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BESE',
                                          children: 'BESE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECE',
                                          children: 'BECE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BEIT',
                                          children: 'BEIT'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECIVIL',
                                          children: 'BECIVIL'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'semester',
                                      className: 'form-label font-weight-bold',
                                      children: 'Semester'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'semester',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.semester,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: '1', children: 'one' }),
                                        Object(Y.jsx)('option', { value: '2', children: 'two' }),
                                        Object(Y.jsx)('option', { value: '3', children: 'three' }),
                                        Object(Y.jsx)('option', { value: '4', children: 'four' }),
                                        Object(Y.jsx)('option', { value: '5', children: 'five' }),
                                        Object(Y.jsx)('option', { value: '6', children: 'six' }),
                                        Object(Y.jsx)('option', { value: '7', children: 'seven' }),
                                        Object(Y.jsx)('option', { value: '8', children: 'eight' })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'shift',
                                      className: 'form-label font-weight-bold',
                                      children: 'Shift:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'shift',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.shift,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: 'day', children: 'day' }),
                                        Object(Y.jsx)('option', {
                                          value: 'morning',
                                          children: 'morning'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'email',
                                      className: 'form-label font-weight-bold',
                                      children: 'Email:'
                                    }),
                                    Object(Y.jsx)('input', {
                                      type: 'email',
                                      className: 'form-control form-control-lg',
                                      placeholder: 'Email Address',
                                      name: 'email',
                                      onChange: this.handleChange
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'roll number',
                                      className: 'form-label font-weight-bold',
                                      children: 'Roll No:'
                                    }),
                                    Object(Y.jsx)('input', {
                                      type: 'text',
                                      className: 'form-control form-control-lg',
                                      placeholder: 'Roll No',
                                      name: 'rollNo',
                                      onChange: this.handleChange
                                    })
                                  ]
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'col-md-4',
                                  children: Object(Y.jsx)('input', {
                                    type: 'submit',
                                    className: 'btn btn-info btn-block mt-4'
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        pe = Object(o.b)(
          function (e) {
            return { registeredUser: e.codeErr };
          },
          {
            addUser: function (e, t) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), V.a.post('api/v1/users', e);
                            case 3:
                              (n = t.sent),
                                console.log(n.data),
                                a({ type: x, payload: n.data }),
                                (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(be),
        Oe = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(), n.props.addNotice(n.state);
              }),
              (n.state = { title: '', description: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.notice.status;
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Add Notice'
                            }),
                            Object(Y.jsx)('h3', {
                              className: 'display-6 text-center',
                              children: e
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              className: 'row g-3',
                              children: [
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-12',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'email',
                                      className: 'form-label font-weight-bold',
                                      children: 'Notice Title:'
                                    }),
                                    Object(Y.jsx)('input', {
                                      type: 'text',
                                      className: 'form-control form-control-lg col-md-8',
                                      placeholder: 'notice title',
                                      name: 'title',
                                      onChange: this.handleChange
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-12',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'description',
                                      className: 'form-label font-weight-bold',
                                      children: 'Notice description:'
                                    }),
                                    Object(Y.jsx)('textarea', {
                                      className: 'form-control form-control-lg col-md-8',
                                      placeholder: 'description for notice',
                                      name: 'description',
                                      onChange: this.handleChange,
                                      rows: 5,
                                      cols: 5
                                    })
                                  ]
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'col-md-4',
                                  children: Object(Y.jsx)('input', {
                                    type: 'submit',
                                    className: 'btn btn-info btn-block mt-4'
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        xe = Object(o.b)(
          function (e) {
            return { notice: e.codeErr };
          },
          {
            addNotice: function (e, t) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), V.a.post('api/v1/notice', e);
                            case 3:
                              (n = t.sent),
                                console.log(n.data),
                                a({ type: x, payload: n.data }),
                                (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(Oe),
        fe = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.showNotice();
                }
              },
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsxs)('div', {
                    className: 'jumbotron',
                    children: [
                      Object(Y.jsx)('h1', {
                        className: 'display-4',
                        children: this.props.notice.data.notices[0].title
                      }),
                      Object(Y.jsx)('p', {
                        className: 'lead',
                        children: this.props.notice.data.notices[0].description
                      }),
                      Object(Y.jsx)('hr', { className: 'my-4' }),
                      Object(Y.jsx)('p', {
                        children: 'Nepal College of Information Technology. Balkumari, Lalitpur.'
                      })
                    ]
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        ve = Object(o.b)(
          function (e) {
            return { notice: e.notice };
          },
          {
            showNotice: function (e) {
              return (function () {
                var e = Object(q.a)(
                  P.a.mark(function e(t) {
                    var a;
                    return P.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), V.a.get('api/v1/notice');
                            case 3:
                              (a = e.sent),
                                console.log(a.data),
                                t({ type: N, payload: a.data }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0),
                                t({ type: x, payload: e.t0.response.data });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            }
          }
        )(fe),
        ge = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(), n.props.addPreTeacher(n.state);
              }),
              (n.state = { email: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.registeredTeacher.status;
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h3', {
                              className: 'display-5 text-center',
                              children: 'ADD TEACHERS TO SYSTEM'
                            }),
                            Object(Y.jsx)('h3', {
                              className: 'display-6 text-center',
                              children: e
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              className: 'row g-3',
                              children: [
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-16',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'email',
                                      className: 'form-label font-weight-bold',
                                      children: 'Email:'
                                    }),
                                    Object(Y.jsx)('input', {
                                      type: 'email',
                                      className: 'form-control form-control-lg',
                                      placeholder: 'Email Address',
                                      name: 'email',
                                      onChange: this.handleChange
                                    })
                                  ]
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'col-md-4',
                                  children: Object(Y.jsx)('input', {
                                    type: 'submit',
                                    className: 'btn btn-info btn-block mt-4'
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        Ne = Object(o.b)(
          function (e) {
            return { registeredTeacher: e.codeErr };
          },
          {
            addPreTeacher: function (e, t) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), V.a.post('api/v1/teachers/add', e);
                            case 3:
                              (n = t.sent),
                                console.log(n.data),
                                a({ type: x, payload: n.data }),
                                (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(ge),
        ye = { headers: { 'Content-type': 'multipart/form-data' } },
        Ce = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(), n.setState({ spinner: 'on' });
                var t = n.state,
                  a = t.subject,
                  s = t.myFile,
                  c = new FormData(e.target);
                c.append('file', s),
                  c.append('subjectName', a),
                  c.append(
                    'teacherName',
                    ''.concat(n.props.user.lastName).concat(n.props.user.firstName)
                  ),
                  console.log(c),
                  console.log(n.state),
                  n.props.addAssignment(c);
              }),
              (n.state = {
                subject: 'choose',
                semester: 'choose',
                shift: 'choose',
                faculty: 'choose',
                description: '',
                myFile: '',
                spinner: 'off'
              }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.publishedAssignment.status,
                    t = Object(Y.jsxs)('button', {
                      className: 'btn btn-info btn-block mt-4',
                      type: 'button',
                      disabled: !0,
                      children: [
                        Object(Y.jsx)('span', {
                          className: 'spinner-border spinner-border-sm',
                          role: 'status',
                          'aria-hidden': 'true'
                        }),
                        Object(Y.jsx)('span', { className: 'sr-only', children: 'Loading...' })
                      ]
                    });
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsx)('div', {
                      className: 'container',
                      children: Object(Y.jsx)('div', {
                        className: 'row',
                        children: Object(Y.jsxs)('div', {
                          className: 'col-md-8 m-auto',
                          children: [
                            Object(Y.jsx)('h1', {
                              className: 'display-4 text-center',
                              children: 'Upload Assignment'
                            }),
                            Object(Y.jsx)('h3', {
                              className: 'display-6 text-center',
                              children: e
                            }),
                            Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              className: 'row g-3',
                              children: [
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'subject',
                                      className: 'form-label font-weight-bold',
                                      children: 'Subject:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'subject',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.subject,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: 'DSA', children: 'DSA' }),
                                        Object(Y.jsx)('option', { value: 'ADA', children: 'ADA' }),
                                        Object(Y.jsx)('option', { value: 'NM', children: 'NM' }),
                                        Object(Y.jsx)('option', { value: 'CG', children: 'CG' }),
                                        Object(Y.jsx)('option', { value: 'SEF', children: 'SEF' }),
                                        Object(Y.jsx)('option', {
                                          value: 'MALP',
                                          children: 'MALP'
                                        }),
                                        Object(Y.jsx)('option', { value: 'COA', children: 'COA' })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'faculty',
                                      className: 'form-label font-weight-bold',
                                      children: 'Faculty:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'faculty',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.subject,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BESE',
                                          children: 'BESE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECE',
                                          children: 'BECE'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BEIT',
                                          children: 'BEIT'
                                        }),
                                        Object(Y.jsx)('option', {
                                          value: 'BECIVIL',
                                          children: 'BECIVIL'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'semester',
                                      className: 'form-label font-weight-bold',
                                      children: 'Semester'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'semester',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.semester,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: '1', children: 'one' }),
                                        Object(Y.jsx)('option', { value: '2', children: 'two' }),
                                        Object(Y.jsx)('option', { value: '3', children: 'three' }),
                                        Object(Y.jsx)('option', { value: '4', children: 'four' }),
                                        Object(Y.jsx)('option', { value: '5', children: 'five' }),
                                        Object(Y.jsx)('option', { value: '6', children: 'six' }),
                                        Object(Y.jsx)('option', { value: '7', children: 'seven' }),
                                        Object(Y.jsx)('option', { value: '8', children: 'eight' })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'shift',
                                      className: 'form-label font-weight-bold',
                                      children: 'Shift:'
                                    }),
                                    Object(Y.jsxs)('select', {
                                      name: 'shift',
                                      onChange: this.handleChange,
                                      defaultValue: this.state.shift,
                                      className: 'custom-select mr-sm-2',
                                      id: 'inlineFormCustomSelect',
                                      children: [
                                        Object(Y.jsx)('option', {
                                          value: 'choose',
                                          children: 'Choose...'
                                        }),
                                        Object(Y.jsx)('option', { value: 'day', children: 'day' }),
                                        Object(Y.jsx)('option', {
                                          value: 'morning',
                                          children: 'morning'
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-4',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'myFile',
                                      className: 'form-label font-weight-bold',
                                      children: 'file:'
                                    }),
                                    Object(Y.jsx)('input', {
                                      type: 'file',
                                      className: 'form-control-file',
                                      name: 'myFile',
                                      onChange: this.handleChange
                                    }),
                                    console.log(this.state.myFile)
                                  ]
                                }),
                                Object(Y.jsxs)('div', {
                                  className: 'col-md-12',
                                  children: [
                                    Object(Y.jsx)('label', {
                                      htmlFor: 'description',
                                      className: 'form-label font-weight-bold',
                                      children: 'Assignment description:'
                                    }),
                                    Object(Y.jsx)('textarea', {
                                      className: 'form-control form-control-lg col-md-8',
                                      placeholder: 'description for assignment',
                                      name: 'description',
                                      onChange: this.handleChange,
                                      rows: 5,
                                      cols: 5
                                    })
                                  ]
                                }),
                                Object(Y.jsx)('div', {
                                  className: 'col-md-4',
                                  children:
                                    'on' !== this.state.spinner || e
                                      ? Object(Y.jsx)('input', {
                                          type: 'submit',
                                          className: 'btn btn-info btn-block mt-4'
                                        })
                                      : t
                                })
                              ]
                            })
                          ]
                        })
                      })
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        we = Object(o.b)(
          function (e) {
            return { publishedAssignment: e.codeErr, user: e.auth.user };
          },
          {
            addAssignment: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                V.a.post('api/v1/publishedAssignment', e, ye)
                              );
                            case 3:
                              (n = t.sent),
                                console.log(n.data),
                                a({ type: x, payload: n.data }),
                                (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(Ce),
        ke = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e, t, a) {
                t.preventDefault(),
                  console.log(n.state.myFile),
                  console.log(e),
                  console.log(n.props.user.id);
                var s = new FormData(t.target),
                  c = n.props.assignmentsFetched.data.assignments[a]._doc,
                  r = c.faculty,
                  o = c.semester,
                  l = c.shift,
                  i = c.teacherName;
                s.append('file', n.state.myFile),
                  s.append('assignment', e),
                  s.append('student', n.props.user.id),
                  s.append('faculty', r),
                  s.append('semester', o),
                  s.append('shift', l),
                  s.append('teacherName', i),
                  console.log(s),
                  n.props.submitAssignment(s);
              }),
              (n.state = { myFile: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.getAssignment(this.props.user.id);
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this;
                  console.log(this.props);
                  var t = this.props.assignmentsFetched.data.assignments.map(function (t, a) {
                    var n = t._doc,
                      s = n._id,
                      c = n.subjectName,
                      r = n.teacherName,
                      o = n.file,
                      l = n.description,
                      i = n.status;
                    return Object(Y.jsxs)(
                      'tr',
                      {
                        children: [
                          Object(Y.jsx)('td', { children: c }),
                          Object(Y.jsx)('td', {
                            children: Object(Y.jsx)('a', {
                              href: 'http://localhost:8000/static/assignments/published/'.concat(o),
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              download: ''.concat(o),
                              children: o
                            })
                          }),
                          Object(Y.jsx)('td', { children: l }),
                          Object(Y.jsx)('td', { children: r }),
                          Object(Y.jsx)('td', { children: i }),
                          Object(Y.jsx)('td', {
                            children: Object(Y.jsxs)('form', {
                              onSubmit: function (t) {
                                return e.handleSubmit(s, t, a);
                              },
                              children: [
                                Object(Y.jsx)('input', {
                                  type: 'file',
                                  className: 'form-control-file',
                                  name: 'myFile',
                                  onChange: e.handleChange
                                }),
                                Object(Y.jsx)('input', {
                                  type: 'submit',
                                  className: 'btn btn-info btn-block mt-4'
                                })
                              ]
                            })
                          })
                        ]
                      },
                      s
                    );
                  });
                  return Object(Y.jsxs)('div', {
                    children: [
                      Object(Y.jsx)('h3', {
                        className: 'text-center mb-4',
                        children: 'Here are your assignments.'
                      }),
                      Object(Y.jsxs)('table', {
                        className: 'table table-hover',
                        children: [
                          Object(Y.jsx)('thead', {
                            className: 'thead-dark',
                            children: Object(Y.jsxs)('tr', {
                              children: [
                                Object(Y.jsx)('th', { scope: 'col', children: 'subject_name' }),
                                Object(Y.jsx)('th', { scope: 'col', children: 'assignment_file' }),
                                Object(Y.jsx)('th', { scope: 'col', children: 'description' }),
                                Object(Y.jsx)('th', { scope: 'col', children: 'teacher_name' }),
                                Object(Y.jsx)('th', { scope: 'col', children: 'status' }),
                                Object(Y.jsx)('th', { scope: 'col', children: 'submit_here' })
                              ]
                            })
                          }),
                          Object(Y.jsx)('tbody', { children: t })
                        ]
                      })
                    ]
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        Se = Object(o.b)(
          function (e) {
            return { assignmentsFetched: e.datasFetched, user: e.auth.user };
          },
          {
            getAssignment: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                V.a.get('/api/v1/publishedAssignment/'.concat(e))
                              );
                            case 3:
                              (n = t.sent), a({ type: g, payload: n.data }), (t.next = 11);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 11:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            submitAssignment: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                V.a.post('api/v1/submittedAssignment', e, ye)
                              );
                            case 3:
                              (n = t.sent),
                                console.log('hiii'),
                                console.log(n),
                                a({ type: x, payload: n.data }),
                                (t.next = 14);
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                console.log('hiii errrrrr'),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 14:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(ke),
        Ee = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault();
                var t = n.state,
                  a = t.faculty,
                  s = t.sem,
                  c = t.shift,
                  r = {
                    teacherName: ''.concat(n.props.user.lastName).concat(n.props.user.firstName),
                    facultyName: a,
                    semester: s,
                    shift: c
                  };
                n.props.getSubmittedAssignments(r);
              }),
              (n.handleSubmitGrade = function (e, t, a) {
                var s;
                t.preventDefault(),
                  console.log(e),
                  n.setState(
                    ((s = {}),
                    Object(Z.a)(s, 'formDisplay'.concat(a), !n.state['formDisplay'.concat(a)]),
                    Object(Z.a)(s, 'newRemark'.concat(a), n.state['remark'.concat(a)]),
                    s)
                  ),
                  n.props.addRemark({ remarks: n.state['remark'.concat(a)] }, e);
              }),
              (n.state = {
                faculty: '',
                sem: '',
                shift: '',
                formDisplay0: !1,
                formDisplay1: !1,
                formDisplay2: !1,
                formDisplay3: !1,
                remark0: '',
                remark1: '',
                remark2: '',
                remark3: '',
                newRemark0: '',
                newRemark1: '',
                newRemark2: '',
                newRemark3: ''
              }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this;
                  if ((console.log(this.state), this.props.assignmentsFetched.data.assignment)) {
                    var a = this.props.assignmentsFetched.data.assignment.map(function (e, a) {
                      var n = e._id,
                        s = e.file,
                        c = e.remarks,
                        r = e.student,
                        o = r.firstName,
                        l = r.user.rollNo;
                      return (
                        console.log(t.state['remark'.concat(a)]),
                        Object(Y.jsxs)(
                          'tr',
                          {
                            children: [
                              Object(Y.jsx)('td', { children: o }),
                              Object(Y.jsx)('td', { children: l }),
                              Object(Y.jsx)('td', {
                                children: Object(Y.jsx)('a', {
                                  href: 'http://localhost:8000/static/assignments/submitted/'.concat(
                                    s
                                  ),
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  download: ''.concat(s),
                                  children: s
                                })
                              }),
                              t.state['formDisplay'.concat(a)]
                                ? Object(Y.jsx)('td', {
                                    children: Object(Y.jsxs)('form', {
                                      onSubmit: function (e) {
                                        return t.handleSubmitGrade(n, e, a);
                                      },
                                      children: [
                                        Object(Y.jsx)('input', {
                                          type: 'text',
                                          className: 'form-control form-control-lg',
                                          name: 'remark'.concat(a),
                                          onChange: t.handleChange,
                                          value: t.state['remark'.concat(a)]
                                        }),
                                        Object(Y.jsx)('input', {
                                          type: 'submit',
                                          className: 'btn btn-info btn-block mt-4'
                                        })
                                      ]
                                    })
                                  })
                                : Object(Y.jsx)('td', {
                                    onClick: function () {
                                      var e;
                                      return t.setState(
                                        ((e = {}),
                                        Object(Z.a)(
                                          e,
                                          'formDisplay'.concat(a),
                                          !t.state['formDisplay'.concat(a)]
                                        ),
                                        Object(Z.a)(e, 'remark'.concat(a), c),
                                        e)
                                      );
                                    },
                                    children: t.state['newRemark'.concat(a)] || c
                                  })
                            ]
                          },
                          n
                        )
                      );
                    });
                    e = Object(Y.jsxs)('table', {
                      className: 'table table-hover',
                      children: [
                        Object(Y.jsx)('thead', {
                          className: 'thead-dark',
                          children: Object(Y.jsxs)('tr', {
                            children: [
                              Object(Y.jsx)('th', { scope: 'col', children: 'student_name' }),
                              Object(Y.jsx)('th', { scope: 'col', children: 'roll_number' }),
                              Object(Y.jsx)('th', {
                                scope: 'col',
                                children: 'submitted_assignment'
                              }),
                              Object(Y.jsx)('th', { scope: 'col', children: 'grade' })
                            ]
                          })
                        }),
                        Object(Y.jsx)('tbody', { children: a })
                      ]
                    });
                  }
                  return Object(Y.jsx)('div', {
                    className: 'register',
                    children: Object(Y.jsxs)('div', {
                      className: 'container',
                      children: [
                        Object(Y.jsx)('div', {
                          className: 'row',
                          children: Object(Y.jsxs)('div', {
                            className: 'col-md-8 m-auto',
                            children: [
                              Object(Y.jsx)('h1', {
                                className: 'display-4 text-center',
                                children: 'Get Assignments'
                              }),
                              Object(Y.jsxs)('form', {
                                onSubmit: this.handleSubmit,
                                className: 'row g-3',
                                children: [
                                  Object(Y.jsxs)('div', {
                                    className: 'col-md-4',
                                    children: [
                                      Object(Y.jsx)('label', {
                                        htmlFor: 'faculty',
                                        className: 'form-label font-weight-bold',
                                        children: 'Faculty:'
                                      }),
                                      Object(Y.jsxs)('select', {
                                        name: 'faculty',
                                        onChange: this.handleChange,
                                        defaultValue: this.state.faculty,
                                        className: 'custom-select mr-sm-2',
                                        id: 'inlineFormCustomSelect',
                                        children: [
                                          Object(Y.jsx)('option', {
                                            value: 'choose',
                                            children: 'Choose...'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'BESE',
                                            children: 'BESE'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'BECE',
                                            children: 'BECE'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'BEIT',
                                            children: 'BEIT'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'BECIVIL',
                                            children: 'BECIVIL'
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  Object(Y.jsxs)('div', {
                                    className: 'col-md-4',
                                    children: [
                                      Object(Y.jsx)('label', {
                                        htmlFor: 'semester',
                                        className: 'form-label font-weight-bold',
                                        children: 'Semester'
                                      }),
                                      Object(Y.jsxs)('select', {
                                        name: 'sem',
                                        onChange: this.handleChange,
                                        defaultValue: this.state.semester,
                                        className: 'custom-select mr-sm-2',
                                        id: 'inlineFormCustomSelect',
                                        children: [
                                          Object(Y.jsx)('option', {
                                            value: 'choose',
                                            children: 'Choose...'
                                          }),
                                          Object(Y.jsx)('option', { value: '1', children: 'one' }),
                                          Object(Y.jsx)('option', { value: '2', children: 'two' }),
                                          Object(Y.jsx)('option', {
                                            value: '3',
                                            children: 'three'
                                          }),
                                          Object(Y.jsx)('option', { value: '4', children: 'four' }),
                                          Object(Y.jsx)('option', { value: '5', children: 'five' }),
                                          Object(Y.jsx)('option', { value: '6', children: 'six' }),
                                          Object(Y.jsx)('option', {
                                            value: '7',
                                            children: 'seven'
                                          }),
                                          Object(Y.jsx)('option', { value: '8', children: 'eight' })
                                        ]
                                      })
                                    ]
                                  }),
                                  Object(Y.jsxs)('div', {
                                    className: 'col-md-4',
                                    children: [
                                      Object(Y.jsx)('label', {
                                        htmlFor: 'shift',
                                        className: 'form-label font-weight-bold',
                                        children: 'Shift:'
                                      }),
                                      Object(Y.jsxs)('select', {
                                        name: 'shift',
                                        onChange: this.handleChange,
                                        defaultValue: this.state.shift,
                                        className: 'custom-select mr-sm-2',
                                        id: 'inlineFormCustomSelect',
                                        children: [
                                          Object(Y.jsx)('option', {
                                            value: 'choose',
                                            children: 'Choose...'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'day',
                                            children: 'day'
                                          }),
                                          Object(Y.jsx)('option', {
                                            value: 'morning',
                                            children: 'morning'
                                          })
                                        ]
                                      })
                                    ]
                                  }),
                                  Object(Y.jsx)('div', {
                                    className: 'col-md-4',
                                    children: Object(Y.jsx)('input', {
                                      type: 'submit',
                                      className: 'btn btn-info btn-block mt-4'
                                    })
                                  })
                                ]
                              })
                            ]
                          })
                        }),
                        Object(Y.jsx)('br', {}),
                        Object(Y.jsx)('br', {}),
                        e
                      ]
                    })
                  });
                }
              }
            ]),
            a
          );
        })(s.a.Component),
        Ae = Object(o.b)(
          function (e) {
            return { assignmentsFetched: e.datasFetched, user: e.auth.user };
          },
          {
            getSubmittedAssignments: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n, s, c, r, o;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = e.teacherName),
                                (s = e.facultyName),
                                (c = e.semester),
                                (r = e.shift),
                                (t.prev = 1),
                                (t.next = 4),
                                V.a.get(
                                  'api/v1/teachers/showSubmittedAssignments/'
                                    .concat(s, '/')
                                    .concat(c, '/')
                                    .concat(r, '/')
                                    .concat(n)
                                )
                              );
                            case 4:
                              (o = t.sent), a({ type: g, payload: o.data }), (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(1)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            addRemark: function (e, t) {
              return (function () {
                var a = Object(q.a)(
                  P.a.mark(function a(n) {
                    var s;
                    return P.a.wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                console.log(t),
                                (a.prev = 1),
                                (a.next = 4),
                                V.a.patch('api/v1/submittedAssignment/'.concat(t), e)
                              );
                            case 4:
                              (s = a.sent),
                                console.log(s),
                                n({ type: x, payload: s.data }),
                                (a.next = 13);
                              break;
                            case 9:
                              (a.prev = 9),
                                (a.t0 = a.catch(1)),
                                console.log(a.t0),
                                n({ type: x, payload: a.t0.response.data });
                            case 13:
                            case 'end':
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[1, 9]]
                    );
                  })
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })();
            }
          }
        )(Ee),
        Fe = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleSubmit = function (e) {
                e.preventDefault();
                var t = ''.concat(n.props.user.firstName, ' ').concat(n.props.user.lastName);
                n.props.addPost({ name: t, text: n.state.description });
              }),
              (n.handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.state = { description: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  return (
                    console.log(this.props.user),
                    Object(Y.jsx)('div', {
                      className: 'post-form mb-3',
                      children: Object(Y.jsxs)('div', {
                        className: 'card card-info',
                        children: [
                          Object(Y.jsx)('div', {
                            className: 'card-header bg-info text-white',
                            children: 'Say Somthing...'
                          }),
                          Object(Y.jsx)('div', {
                            className: 'card-body',
                            children: Object(Y.jsxs)('form', {
                              onSubmit: this.handleSubmit,
                              children: [
                                Object(Y.jsx)('div', {
                                  className: 'form-group',
                                  children: Object(Y.jsx)('textarea', {
                                    className: 'form-control form-control-lg col-md-8',
                                    placeholder: "write anything that's on your mind",
                                    name: 'description',
                                    onChange: this.handleChange,
                                    rows: 4
                                  })
                                }),
                                Object(Y.jsx)('button', {
                                  type: 'submit',
                                  className: 'btn btn-dark',
                                  children: 'Submit'
                                })
                              ]
                            })
                          })
                        ]
                      })
                    })
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        De = Object(o.b)(
          function (e) {
            return { user: e.auth.user };
          },
          {
            addPost: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), V.a.post('api/v1/posts', e);
                            case 3:
                              (n = t.sent),
                                console.log(n.data),
                                a({ type: x, payload: n.data }),
                                (t.next = 12);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                a({ type: x, payload: t.t0.response.data });
                            case 12:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(Fe),
        Te = function (e) {
          var t = e.comment.map(function (e, t) {
            return (
              console.log('commentsssssss'),
              console.log(e),
              Object(Y.jsxs)(
                'div',
                {
                  className: 'comment mb-5',
                  children: [
                    Object(Y.jsx)('p', {
                      className: 'text-left',
                      children: Object(Y.jsx)('h6', { children: e.user })
                    }),
                    Object(Y.jsx)('p', {
                      className: 'lead',
                      children: Object(Y.jsx)('em', { children: e.des })
                    })
                  ]
                },
                t
              )
            );
          });
          return Object(Y.jsx)('div', { children: t });
        },
        Ie = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState(Object(Z.a)({}, e.target.name, e.target.value));
              }),
              (n.handleSubmit = function (e, t) {
                e.preventDefault(),
                  n.props.addComment({
                    id: t,
                    comment: {
                      user: ''.concat(n.props.user.firstName, ' ').concat(n.props.user.lastName),
                      des: n.state.comment
                    }
                  }),
                  n.setState({ comment: '' });
              }),
              (n.state = { comment: '' }),
              n
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  console.log(this.props);
                  var t = this.props.posts.map(function (t, a) {
                    return Object(Y.jsxs)(
                      'div',
                      {
                        className: 'col-md-10',
                        children: [
                          Object(Y.jsx)('p', {
                            className: 'text-left',
                            children: Object(Y.jsxs)('h4', { children: [t.name, ' '] })
                          }),
                          Object(Y.jsx)('p', { className: 'lead', children: t.text }),
                          Object(Y.jsx)('hr', {}),
                          Object(Y.jsxs)('form', {
                            onSubmit: function (a) {
                              return e.handleSubmit(a, t._id);
                            },
                            children: [
                              Object(Y.jsx)('input', {
                                type: 'text',
                                className: 'form-control',
                                placeholder: 'add a comment',
                                name: 'comment',
                                onChange: e.handleChange,
                                value: e.state.comment
                              }),
                              Object(Y.jsx)('input', {
                                type: 'submit',
                                className: 'btn btn-info mr-1 mt-2',
                                value: 'comment'
                              })
                            ]
                          }),
                          Object(Y.jsx)('hr', {}),
                          Object(Y.jsx)(Te, { comment: t.comments })
                        ]
                      },
                      a
                    );
                  });
                  return Object(Y.jsx)('div', {
                    className: 'card card-body mb-3',
                    children: Object(Y.jsx)('div', { className: 'row', children: t })
                  });
                }
              }
            ]),
            a
          );
        })(n.Component),
        _e = Object(o.b)(
          function (e) {
            return { user: e.auth.user };
          },
          {
            addComment: function (e) {
              return (function () {
                var t = Object(q.a)(
                  P.a.mark(function t(a) {
                    var n;
                    return P.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), V.a.patch('api/v1/posts', e);
                            case 3:
                              (n = t.sent), a({ type: x, payload: n.data }), (t.next = 10);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                a({ type: x, payload: t.t0.response.data });
                            case 10:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            }
          }
        )(Ie),
        Be = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.getAllPosts();
                }
              },
              {
                key: 'render',
                value: function () {
                  var e;
                  return (
                    (e = this.props.post.data.posts
                      ? Object(Y.jsx)(_e, { posts: this.props.post.data.posts })
                      : null),
                    Object(Y.jsx)('div', {
                      className: 'feed',
                      children: Object(Y.jsxs)('div', {
                        className: 'container',
                        children: [
                          Object(Y.jsx)('h3', {
                            className: 'text-center mb-4',
                            children: 'Discussion Section.'
                          }),
                          Object(Y.jsx)('div', {
                            className: 'row',
                            children: Object(Y.jsxs)('div', {
                              className: 'col-md-12',
                              children: [Object(Y.jsx)(De, {}), e]
                            })
                          })
                        ]
                      })
                    })
                  );
                }
              }
            ]),
            a
          );
        })(n.Component),
        Le = Object(o.b)(
          function (e) {
            return { post: e.datasFetched };
          },
          {
            getAllPosts: function (e) {
              return (function () {
                var e = Object(q.a)(
                  P.a.mark(function e(t) {
                    var a;
                    return P.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), V.a.get('api/v1/posts');
                            case 3:
                              (a = e.sent),
                                console.log(a.data),
                                t({ type: g, payload: a.data }),
                                (e.next = 12);
                              break;
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0),
                                t({ type: x, payload: e.t0.response.data });
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            }
          }
        )(Be);
      a(74);
      if (localStorage.jwtToken) {
        R(localStorage.jwtToken);
        var Ue = Object(u.a)(localStorage.jwtToken);
        L.dispatch(H(Ue));
      }
      var Ve = (function (e) {
          Object(h.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function () {
                  return Object(Y.jsxs)('div', {
                    className: 'App',
                    children: [
                      Object(Y.jsx)(J, {}),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/', component: Q }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/login', component: ee }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/adminlogin', component: ae }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/teacherLogin', component: se }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/register', component: re }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/teacherRegister', component: le }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/confirmCode', component: de }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/confirmTeacherCode', component: me }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/routineUpload', component: ue }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/userUpload', component: pe }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/addNotice', component: xe }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/notice', component: ve }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/addPreTeacher', component: Ne }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/publishassignment', component: we }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/viewAssignment', component: Se }),
                      Object(Y.jsx)(j.a, {
                        exact: !0,
                        path: '/ViewSubmittedAssignments',
                        component: Ae
                      }),
                      Object(Y.jsx)(j.a, { exact: !0, path: '/postitems', component: Le }),
                      Object(Y.jsx)(W, {})
                    ]
                  });
                }
              }
            ]),
            a
          );
        })(n.Component),
        Re = Ve;
      r.a.render(
        Object(Y.jsx)(s.a.StrictMode, {
          children: Object(Y.jsx)(o.a, {
            store: L,
            children: Object(Y.jsx)(l.a, { children: Object(Y.jsx)(Re, {}) })
          })
        }),
        document.getElementById('root')
      );
    }
  },
  [[75, 1, 2]]
]);
//# sourceMappingURL=main.64d16cb7.chunk.js.map
