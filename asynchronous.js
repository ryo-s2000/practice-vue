/* --- 変数・関数定義 --- */
var $div = $('#js-div');

var a = function(callback) {
  setTimeout(function() {
    $div.addClass('is-right');
    callback();
  }, 500);
};

var b = function(callback) {
  setTimeout(function() {
    $div.addClass('is-top');
    callback();
  }, 500);
};

var c = function(callback) {
  setTimeout(function() {
    $div.addClass('is-red');
    callback();
  }, 500);
};

var end = function() {
  setTimeout(function() {
    $div.addClass('is-hide');
  }, 500);
};

/* 呼び出し */
a(b.bind(null, c.bind(null, end.bind(null))));




/* --- 変数・関数定義 --- */
var $div = $('#js-div');

var a = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      $div.addClass('is-right');
      resolve();
    }, 1000);
  });
};

var b = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      $div.addClass('is-top');
      resolve();
    }, 1000);
  });
};

var c = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      $div.addClass('is-red');
      resolve();
    }, 1000);
  });
};

var end = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      $div.addClass('is-hide');
      resolve();
    }, 1000);
  });
};

/* メソッドチェーンで呼び出し */
a()
  .then(b)
  .then(c)
  .then(end);
