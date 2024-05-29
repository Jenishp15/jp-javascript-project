const signinForm = document.getElementById("signin");
let isvalid=true;
signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
  
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const user = userData.find((el) => el.email == email && el.password == password);

    function checkuser(){
      if (user) {
        alert("Login Succesfully");
        window.location.href = 'http://127.0.0.1:5500/HTML/index.html'
        return
      } 
      if(email=="")
      { 
        isvalid=false;
        document.getElementById( "emailError" ).innerHTML="Please enter your Email";
        document.getElementById("signin-email").style.border="1px solid red"
        document.getElementById("emailError").style.color=" red";
  
         
      }
      if(password=="")
      {
        isvalid=false;
        document.getElementById( "PasswordError" ).innerHTML="Please enter your Password";
        document.getElementById("signin-password").style.border="1px solid red"
        document.getElementById("PasswordError").style.color=" red";
  
         
      }
      else
      {
        alert("Please Enter  Valid Username and Password!");
        signinForm.reset();
        return
      }
    }
    checkuser()
    
   
  });