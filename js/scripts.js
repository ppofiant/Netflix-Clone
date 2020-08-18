function openPopUpFaq1() {
    var str = document.getElementById("symbol1").innerHTML;
    var replace;

    if (document.getElementById("pop-up1").offsetHeight > 0) {
        document.getElementById("pop-up1").style.height = "0";
        replace = '&plus;';
    }
    else {
        for (var i = 1; i <= 5; i++) {
            if (i == 1) continue;
            var idx = "pop-up" + i;
            var symb = "symbol" + i;
            document.getElementById(idx).style.height = "0";
            document.getElementById(symb).innerHTML = "+";
        }

        document.getElementById("pop-up1").style.height = "auto";
        replace = '&times;';
    }
    document.getElementById("symbol1").innerHTML = replace;
}

function openPopUpFaq2() {
    var str = document.getElementById("symbol2").innerHTML;
    var replace;

    if (document.getElementById("pop-up2").offsetHeight > 0) {
        document.getElementById("pop-up2").style.height = "0";
        replace = '&plus;';
    }
    else {
        for (var i = 1; i <= 5; i++) {
            if (i == 2) continue;
            var idx = "pop-up" + i;
            var symb = "symbol" + i;
            document.getElementById(idx).style.height = "0";
            document.getElementById(symb).innerHTML = "+";
        }

        document.getElementById("pop-up2").style.height = "100%";
        replace = '&times;';
    }
    document.getElementById("symbol2").innerHTML = replace;
}

function openPopUpFaq3() {
    var str = document.getElementById("symbol3").innerHTML;
    var replace;

    if (document.getElementById("pop-up3").offsetHeight > 0) {
        document.getElementById("pop-up3").style.height = "0";
        replace = '&plus;';
    }
    else {
        for (var i = 1; i <= 5; i++) {
            if (i == 3) continue;
            var idx = "pop-up" + i;
            var symb = "symbol" + i;
            document.getElementById(idx).style.height = "0";
            document.getElementById(symb).innerHTML = "+";
        }

        document.getElementById("pop-up3").style.height = "100%";
        replace = '&times;';
    }
    document.getElementById("symbol3").innerHTML = replace;
}

function openPopUpFaq4() {
    var str = document.getElementById("symbol4").innerHTML;
    var replace;

    if (document.getElementById("pop-up4").offsetHeight > 0) {
        document.getElementById("pop-up4").style.height = "0";
        replace = '&plus;';
    }
    else {
        for (var i = 1; i <= 5; i++) {
            if (i == 4) continue;
            var idx = "pop-up" + i;
            var symb = "symbol" + i;
            document.getElementById(idx).style.height = "0";
            document.getElementById(symb).innerHTML = "+";
        }

        document.getElementById("pop-up4").style.height = "100%";
        replace = '&times;';
    }
    document.getElementById("symbol1").innerHTML = replace;
}

function openPopUpFaq5() {
    var str = document.getElementById("symbol5").innerHTML;
    var replace;

    if (document.getElementById("pop-up5").offsetHeight > 0) {
        document.getElementById("pop-up5").style.height = "0";
        replace = '&plus;';
    }
    else {
        for (var i = 1; i <= 5; i++) {
            if (i == 5) continue;
            var idx = "pop-up" + i;
            var symb = "symbol" + i;
            document.getElementById(idx).style.height = "0";
            document.getElementById(symb).innerHTML = "+";
        }

        document.getElementById("pop-up5").style.height = "100%";
        replace = '&times;';
    }
    document.getElementById("symbol5").innerHTML = replace;
}