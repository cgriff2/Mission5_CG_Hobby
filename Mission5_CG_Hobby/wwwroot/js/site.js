// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$('#btnClick').click(function () {
    let hours = parseFloat($('#hours').val());
    let rate = parseFloat($('#rate').val());
    let result = hours * rate;

    $('#result').val(result.toFixed(2));
})
