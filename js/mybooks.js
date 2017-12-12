function mybooks() {
    var head2 = document.getElementById("head2");
    var heads = head2.getElementsByTagName("a");
    var push = document.getElementById("push");
    var borrow = document.getElementById("borrow");
    heads[1].onclick = function() {
        push.style.display = "none";
        borrow.style.display = "block";
        heads[0].style.color = "black";
        heads[0].style.borderBottomColor = "transparent";
        this.style.color = "#5fb878";
        this.style.borderBottomColor = "#5fb878";
    }
    heads[0].onclick = function() {
        push.style.display = "block";
        borrow.style.display = "none";
        this.style.color = "#5fb878";
        this.style.borderBottomColor = "#5fb878";
        heads[1].style.color = "black";
        heads[1].style.borderBottomColor = "transparent";
    }
}
addLoadEvent(mybooks);