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
  $('#form').parsley({trigger: 'change'});
}
```

Don't forget to include a `data-parsley-validate` element in every form to be validated

```
<form id="form" data-parsley-validate>
  ... 
</form>
```


Customizing CSS using Less
==========================

Override the default parsley.js css settings by customizing the less variables below in your own code.

```
@success_fg: #468847;
@success_bg: #DFF0D8;
@success_border: #D6E9C6;

@error_fg: #B94A48;
@error_bg: #F2DEDE;
@error_border: #EED3D7;

@error_list_font_color: red;
```
