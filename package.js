Package.describe({
  summary: "Javascript forms validation. Powerful, UX aware, and dead simple.",
  version: "2.1.2",
  name: "amr:parsley.js",
  git: "https://github.com/amrali/parsleyjs-meteor.git"
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0', 'client');
  api.use('less@1.0.0', 'client');
  api.add_files('parsley.min.js', 'client');
  api.add_files('parsley_variables.less', 'client');
  api.add_files('parsley.less', 'client');
  api.add_files('parsley.remote.min.js', 'client');
});