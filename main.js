var like = document.getElementsByClassName("fa-heart");

for (let btn of like) {
  btn.addEventListener("click", function () {
    if (btn.style.color === "red") {
      btn.style.color = "black";
    } else {
      btn.style.color = "red";
    }
  });
}

var inc = Array.from(document.getElementsByClassName("plus"));

for (let el of inc) {
  el.addEventListener("click", function () {
    el.nextElementSibling.value++;

    sum();
  });
}

var dec = Array.from(document.getElementsByClassName("moins"));

for (let el of dec) {
  el.addEventListener("click", function () {
    let t = el.previousElementSibling.value;
    let n = parseInt(t, 10);

    if (n > 0) {
      n--;
    }
    el.previousElementSibling.value = n;
    sum();
  });
}

function sum() {
  let qte = Array.from(document.getElementsByClassName("qte"));
  let prices = Array.from(document.getElementsByClassName("price"));
  let total = 0;
  for (let i in prices) {
    total += parseInt(qte[i].value) * parseInt(prices[i].innerHTML);
  }
  return (document.getElementById("prix").innerHTML = "Total SUM:" +"  "+ total +"TND");
}

var del = document.getElementsByClassName("fa-trash-alt");

for (let el of del) {
  el.addEventListener("click", function () {
    var m = confirm("do you want to delete this item?");
    if (m == true) {
      const parent = el.closest(".product-box");
      while (parent.firstChild) {
        parent.firstChild.remove();
      }
      sum();
    }
  });
}
