const form = document.getElementById('login-form');
form.addEventListener('submit',(event)=> {
event.preventDefault(); 

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
localStorage.setItem('username',username);
localStorage.setItem('password',password);

if( username === 'Quocan' && password === 'quynhnhu'){
    alert('Login successful!');
} else {
    alert('NGU VAY');
}
})