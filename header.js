$(function () {
  $('#myiframe').load(function () {
    $(this).contents().find('#suiteBarTop').hide();
  });
})...
