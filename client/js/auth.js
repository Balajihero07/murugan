document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            await login(email, password);
        });
    }

    const registerForm = document.getElementById('registredForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            await register(name, email, username, password);
        });
    }
});

async function login(email, password) {
    try {
        const res = await fetch('https://murugan-yram.onrender.com/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("successfully login");
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } else {
            alert(data.msg || 'Login failed');
        }
    } catch (err) {
        console.error('Error during login:', err);
        alert('An error occurred during login. Please try again.');
    }
}

async function register(name, email, username, password) {
    try {
        const res = await fetch('https://murugan-yram.onrender.com/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, username, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert("successfully regidtred");
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } else {
            alert(data.msg || 'Registration failed');
        }
    } catch (err) {
        console.error('Error during registration:', err);
        alert('An error occurred during registration. Please try again.');
    }
}
