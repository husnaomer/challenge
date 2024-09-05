function contactUs() {
  let name = prompt("What is your name?");

  if (name.length === 0) {
    alert`you should enter a name`;
  } else {
    let email = prompt("What is your email");

    alert(
      "Welcome, " +
        name +
        "! We are really glad to have you in our super fun comunity"
    );
  }
}

let button = document.querySelector("#button");
button.addEventListener("click", contactUs);
