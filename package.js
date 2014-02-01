Package.describe({
  summary: "Javascript forms validation. Powerful, UX aware, and dead simple."
});

Package.on_use(function (api) {
  api.add_files('parsley.min.js', 'client');
  api.add_files('parsley.es.min.js', 'client');
  api.add_files('parsley.extend.min.js', 'client');
});

