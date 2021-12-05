var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

/* <div class="SignUp-Form" id="SignUpForm">
<div class="SignUp-Form-Content">
    <div class="signup-title">
        <span class="closebtn" id="closebtn">&times;</span>
        <h2>Sign Up</h2>
    </div>
    <div class="signup-form-body">
        <h4>Register with us to get offers, support and more</h4>
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Name">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Email">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter Password">
            <label for="cPassword">Confirm Password</label>
            <input type="Password" name="cPassword" placeholder="Confirm Password">
            <input type="submit" value="Submit">
        </form>
    </div> 
</div> */





// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
