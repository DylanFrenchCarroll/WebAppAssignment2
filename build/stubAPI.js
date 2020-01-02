"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodash = _interopRequireDefault(require("lodash"));

var StubAPI =
/*#__PURE__*/
function () {
  function StubAPI() {
    (0, _classCallCheck2["default"])(this, StubAPI);
    this.posts = require('./posts.json');
  }

  (0, _createClass2["default"])(StubAPI, [{
    key: "getAll",
    value: function getAll() {
      return this.posts;
    }
  }, {
    key: "add",
    value: function add(title, author, link) {
      var id = 1;

      var last = _lodash["default"].last(this.posts);

      if (last) {
        id = last.id + 1;
      }

      var len = this.posts.length;
      var newLen = this.posts.push({
        id: id,
        title: title,
        author: author,
        link: link,
        comments: [],
        upvotes: 0
      });
      return newLen > len;
    }
  }, {
    key: "upvote",
    value: function upvote(id) {
      var index = _lodash["default"].findIndex(this.posts, function (post) {
        return post.id === id;
      });

      if (index !== -1) {
        this.posts[index].upvotes += 1;
        return true;
      }

      return false;
    }
  }, {
    key: "getPost",
    value: function getPost(id) {
      var index = _lodash["default"].findIndex(this.posts, function (post) {
        return post.id === id;
      });

      var result = index !== -1 ? this.posts[index] : null;
      return result;
    }
  }, {
    key: "addComment",
    value: function addComment(postId, c, n) {
      var post = this.getPost(postId);
      var id = 1;

      var last = _lodash["default"].last(post.comments);

      if (last) {
        id = last.id + 1;
      }

      post.comments.push({
        id: id,
        comment: c,
        author: n,
        upvotes: 0
      });
    }
  }, {
    key: "upvoteComment",
    value: function upvoteComment(postId, commentId) {
      var post = this.getPost(postId);

      var index = _lodash["default"].findIndex(post.comments, function (c) {
        return c.id === commentId;
      });

      if (index !== -1) {
        post.comments[index].upvotes += 1;
      }
    }
  }]);
  return StubAPI;
}();

var _default = new StubAPI();

exports["default"] = _default;