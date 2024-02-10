﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$("#btnClick").on('click', function () {
    var hours = parseFloat($("#hours").val());
    if (hours <= 0) {
        alert("Number of hours must be more than 0. ");
        $("#hours").val() = 1;
    }
    var rate = parseFloat($("#rate").val());
    var result = hours * rate;

    $("#result").val(result);
    $("#result").style.width = ($("#result").value.length * 8) + 'px';
});
