$(document).ready(function () {
  var flavors = ['vanilla', 'chocolate', 'strawberry', 'roccky road', 'mint chocolate chip'];
  flavors.forEach(function (flavor) {
    $('#list').append('<li>' + flavor + '</li>');
  });
});
