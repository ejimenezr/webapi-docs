function(doc, req) {
  send(this.templates.head);
  var markdown = require("vendor/markdown/showdown");
  var beautify = require("vendor/js-beautify/beautify");

  var beautifyJSON = function (text) {
    return text.replace(/Insert ([^\.]+).json/g, function(all, json) {
      return '<pre>' + beautify.js_beautify(json) + '</pre>';
    });
  };

  send(markdown.toHtml(beautifyJSON(doc.body)));
  send(this.templates.foot);
}
