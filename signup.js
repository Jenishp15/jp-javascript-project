let signupForm = document.getElementById("signup");


signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstname = document.getElementById("signup-Firstname").value;
  let lastname = document.getElementById("signup-Lastname").value;
  let email = document.getElementById("signup-Email").value;
  let password = document.getElementById("signup-Password").value;

  if(firstname=="") 
  {
    isvalid=false;
    document.getElementById( "error_firstname" ).innerHTML="Please enter your First name";
    document.getElementById("signup-Firstname").style.border="1px solid red";
    document.getElementById("error_firstname").style.color=" red";

  }
  if(lastname=="") 
  {
    isvalid=false;
    document.getElementById( "error_lastname" ).innerHTML="Please enter your Lastt name";
    document.getElementById("signup-Lastname").style.border="1px solid red";
    document.getElementById("error_lastname").style.color=" red";
  }
  if(email=="")
    {
    isvalid=false;
    document.getElementById( "error_email" ).innerHTML="Please enter your Email";
    document.getElementById("signup-Email").style.border="1px solid red";
    document.getElementById("error_email").style.color=" red";
    }
    if(password=="")
    {
    isvalid=false;
    document.getElementById( "error_password" ).innerHTML="Please enter your Password";
    document.getElementById("signup-Password").style.border="1px solid red";
    document.getElementById("error_password").style.color=" red";

      return;  
    }
   

  const userData = JSON.parse(localStorage.getItem("userInfo")) || [];
  userData.push({ firstname,lastname, email, password });
  localStorage.setItem("userInfo", JSON.stringify(userData));

  window.location.href = 'http://127.0.0.1:5500/HTML/index.html'
  signupForm.reset();
});



