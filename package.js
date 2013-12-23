Package.describe({
  summary: "Javascript forms validation. Powerful, UX aware, and dead simple."
});

Package.on_use(function (api) {
  api.add_files('parsleyjs/parsley.js', 'client');
  api.add_files('parsleyjs/parsley.extend.js', 'client');
});

