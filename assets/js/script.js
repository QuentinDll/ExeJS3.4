function validationPassword(id){

  if(password.value == confirmPassword.value){

    document.getElementById('password').style.borderColor = 'green';
    document.getElementById('confirmPassword').style.borderColor = 'green';

  }else{

    document.getElementById('password').style.borderColor = 'red';
    document.getElementById('confirmPassword').style.borderColor = 'red';

  }
}
