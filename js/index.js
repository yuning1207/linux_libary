function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function header_search() {
    var search = document.getElementById("index_input");
    var input = search.getElementsByTagName("input")[0];

    input.onclick = function() {
        input.style.width = "100%";
        //alert(input.placeholder);
    }
}
addLoadEvent(header_search);