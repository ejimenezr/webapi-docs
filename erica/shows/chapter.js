function(doc, req) {
  send(this.templates.head);
  var markdown = require("vendor/markdown/showdown");

  var resolve_figures = function (text) {
    return text.replace(/Insert ([^\.]+).png/g, function(all, figure) {
      return '<img src="../../figures/' + figure + '-tn.png"><br>';
    });
  };

  send(markdown.toHtml(resolve_figures(doc.body)));
  send(this.templates.foot);
}
