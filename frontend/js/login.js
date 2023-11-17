```javascript
document.getElementById('loginUser').addEventListener('click', loginUser);

function loginUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        username: username,
        password: password
    }));

    xhr.onload = function () {
        let response = JSON.parse(this.responseText);
        if (response.status === 'success') {
            localStorage.setItem('token', response.token);
            window.location.href = '/voters.html';
        } else {
            alert('Authentication failed. Please check your username and password.');
        }
    };
}

document.getElementById('logoutUser').addEventListener('click', logoutUser);

function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = '/login.html';
}
```