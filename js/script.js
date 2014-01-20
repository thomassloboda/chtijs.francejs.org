(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
document.addEventListener('DOMContentLoaded', function() {
    
    header = document.querySelector('body > header');
    [].forEach.call(document.querySelectorAll('.menu-button'), function(button) {
        button.addEventListener('click', function() {
            header.classList.toggle('display');
        })
    })
    document.addEventListener('click', function(evt) {
        var elt = evt.target;
        while(elt != document) {
          if(elt == header || elt.classList.contains('menu-button')) {
            return;
          }
          elt = elt.parentNode;
        }
        header.classList.remove('display');
    })
});

},{}]},{},[1])