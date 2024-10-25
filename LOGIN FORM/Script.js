let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let span = document.getElementById("span");
let box = document.querySelector(".box")
let x=document.createElement("span")

function Check() {
  if (inp1.value === "kshiteej@gmail.com") {
    if (inp2.value === "Dubey123") {
      window.location.href = "../HTML/index.html";
    } else {
      span.innerHTML = "Please enter correct password";
      span.style.color = "red";
    }
  } else {
    span.innerHTML = "Please enter correct username";
    span.style.color = "red";
  }
}

document.querySelector("button").addEventListener("click", Check);
