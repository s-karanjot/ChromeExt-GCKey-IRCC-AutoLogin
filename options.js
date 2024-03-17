$(window).on("load", () => {
    chrome.storage.sync.get(['id', 'pass', 'q1', 'a1', 'q2', 'a2', 'q3', 'a3', 'q4', 'a4', 'otp'], function (items) {
        $('#id').val(items['id']);
        $('#pass').val(items['pass']);
        $('#q1').val(items['q1']);
        $('#a1').val(items['a1']);
        $('#q2').val(items['q2']);
        $('#a2').val(items['a2']);
        $('#q3').val(items['q3']);
        $('#a3').val(items['a3']);
        $('#q4').val(items['q4']);
        $('#a4').val(items['a4']);
        $('#otp').val(items['otp']);
    })
})

$(function () {
    $('#save').click(function () {
        $("#error").attr("hidden", true);
        $("#saved").attr("hidden", true);
        if (
            $('#id').val() == '' ||
            $('#pass').val() == '' ||
            $('#q1').val() == '' ||
            $('#a1').val() == '' ||
            $('#q2').val() == '' ||
            $('#a2').val() == '' ||
            $('#q3').val() == '' ||
            $('#a3').val() == '' ||
            $('#q4').val() == '' ||
            $('#a4').val() == '' ||
            $('#otp').val() == ''
        ) {
            $("#error").attr("hidden", false);
        }
        else {
            chrome.storage.sync.set(
                {
                    'id': $('#id').val(),
                    'pass': $('#pass').val(),
                    'q1': $('#q1').val(),
                    'a1': $('#a1').val(),
                    'q2': $('#q2').val(),
                    'a2': $('#a2').val(),
                    'q3': $('#q3').val(),
                    'a3': $('#a3').val(),
                    'q4': $('#q4').val(),
                    'a4': $('#a4').val(),
                    'otp': $('#otp').val()
                }
            );
            $("#saved").attr("hidden", false);
        }
    })
})