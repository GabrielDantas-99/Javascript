let is_visible = false;

function ver() {
  let input = document.getElementById("password");
  let input2 = document.getElementById("r_password");
  let word = document.getElementById("word");
  let ver = document.getElementById("icon");

  if (is_visible) {
    input.type = 'password';
    input2.type = 'password';
    is_visible = false;
    word.textContent = "Ver senha";
    ver.innerHTML = "visibility";
  } else {
    input.type = 'text';
    input2.type = 'text';
    is_visible = true;
    word.textContent = "Ocultar senha";
    ver.innerHTML = "visibility_off";
  }

}

function check() {

  let input = document.getElementById("password").value;
  let input2 = document.getElementById("r_password").value;

  let check0 = document.getElementById("check0");
  input.length >= 8 ? check0.style.color="#41d442" : check0.style.color="#fb5f0b";
  
  let check1 = document.getElementById("check1");
  /[A-Z]/.test(input) ? check1.style.color="#41d442" : check1.style.color="#fb5f0b"
  
  let check2 = document.getElementById("check2");
  /[a-z]/.test(input) ? check2.style.color="#41d442" : check2.style.color="#fb5f0b"
  
  let check3 = document.getElementById("check3");
  /\W|_/.test(input) ? check3.style.color="#41d442" : check3.style.color="#fb5f0b"
  
  let check4 = document.getElementById("check4");
  !/\s/g.test(input) ? check4.style.color="#41d442" : check4.style.color="#fb5f0b"
  
  let check5 = document.getElementById("check5");
  input == input2 ? check5.style.color="#41d442" : check5.style.color="#fb5f0b"

}