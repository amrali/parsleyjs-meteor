Parsley.js
==========

Meteor packaging for Parsley.js.

If I forgot to upgrade to the latest Parsley version, please start a new issue
or find a way to notify me and I'll happily upgrade it for you. Or if you want
to be nice and save me a few seconds; fork it, make a PR and I'll merge it.

Quick Setup 
===========
mrt add parsley.js

Edit your .js file

```
Template.name.rendered = function () {

  // Setup parsley form validation
  // replace form with the id of your form
  $('#form').parsley();
}
```

Edit your .html file

Add this into the <form> tag 
data-parsley-validate
