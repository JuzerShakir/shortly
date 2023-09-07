// * State Variables
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

// * Menu
menuBtn.addEventListener("click", navToggle);

function navToggle() {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// * Form - Link Validation
linkForm.addEventListener("submit", formSubmit);

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "" || !validURL(input.value)) {
    errMsg.innerHTML = "Please enter valid URL";
    input.classList.remove("border-green-900");
    input.classList.add("border-orange-700");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-orange-700");
    input.classList.add("border-green-900");
    alert("Success");
  }
}
