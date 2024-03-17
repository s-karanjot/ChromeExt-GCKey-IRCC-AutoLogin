$(window).on("load", () => {
    chrome.storage.sync.get(['q1', 'a1', 'q2', 'a2', 'q3', 'a3', 'q4', 'a4'], function (items) {
        setTimeout(() => {
            if ($('strong')[0].innerText == '\"' + items['q1'] + '\"') {
                $('#answer').val(items['a1']);
            } else if ($('strong')[0].innerText == '\"' + items['q2'] + '\"') {
                $('#answer').val(items['a2']);
            } else if ($('strong')[0].innerText == '\"' + items['q3'] + '\"') {
                $('#answer').val(items['a3']);
            } else if ($('strong')[0].innerText == '\"' + items['q4'] + '\"') {
                $('#answer').val(items['a4']);
            }
        }, 100);
        setTimeout(() => {
            $('.btn-primary')[0].click()
        }, 200);
    })
});