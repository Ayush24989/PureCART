// for show/hide login box.... 
function toggleHide() {
    let login = document.getElementById('login-btn');
    let loginbox = document.getElementById('loginbox');
    let close = document.getElementById('close');
    if (loginbox.style.display != 'none') {
        loginbox.style.display = 'none';
    }
    else {
        loginbox.style.display = 'flex';
    }
}

// for show/hide password....
function togglePass(){
    let showpass = document.getElementById('show-pass');
    let hidepass = document.getElementById('hide-pass');
    let passwordbox = document.getElementById('password');

    if(hidepass.style.visibility != 'hidden' ) {
        hidepass.style.visibility = 'hidden';
        showpass.style.visibility = 'visible'
        passwordbox.type = "password";
        
    }
    else{
        hidepass.style.visibility = 'visible';
        showpass.style.visibility = 'hidden';
        passwordbox.type = "text";               
        

    }

}

// for 
