function hantei() {
    var X = Number(document.getElementById('uru').value);
    if ((X % 4 == 0 && X % 100 != 0) || (X % 400 == 0)) {
        alert('西暦' + X + '年は閏年です。');
    } else {
        alert('西暦' + X + '年は平年です。');
    }
}
