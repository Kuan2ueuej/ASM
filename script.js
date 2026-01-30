const form = document.getElementById('login-form');
form.addEventListener('submit',(event)=> {
event.preventDefault(); 

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
localStorage.setItem('username',username);
localStorage.setItem('password',password);

if( username === 'Bay' && password === '123'){
    alert('Login successful!');
} else {
    alert('Invalid username or password. Please try again.');
}
})