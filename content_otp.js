$(window).on("load", () => {
    chrome.storage.sync.get(['otp'], function (items) {
        var totp = new jsOTP.totp();
        var otpValue = totp.getOtp(items['otp']);
        setTimeout(() => {
            $('.form-control').val(otpValue);
        }, 100);
        setTimeout(() => {
            if ($('.btn-primary')[0])
                $('.btn-primary')[0].click()
        }, 200);
    });
});