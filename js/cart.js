function cartfunction() {
  var modal = document.getElementById("cartpop");
  var myBtn = document.getElementById("btcart");
  var span = document.getElementsByClassName("close1")[0];

  myBtn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
