// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function runCalc() {
    let hours = parseFloat(document.getElementbyId(hours).value);
    let rate = parseFloat(document.getElementbyId(rate).value);
    let result = hours * rate;

    document.getElementById(result).value = result;
}