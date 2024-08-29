document.addEventListener('DOMContentLoaded', () => {
    fetchInvitations();

    document.getElementById('weddorderForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const details = document.getElementById('details').value;
        await createInvitation(details);
        document.getElementById('details').value = '';
        fetchInvitations();
    });
});

async function fetchInvitations() {
    try {
        const token = localStorage.getItem('token');
        const res = await fetch('/api/user/invitations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
        });

        if (res.status === 401) {
            window.location.href = 'login.html';
            return;
        }

        const data = await res.json();
        const invitationsDiv = document.getElementById('invitations');
        invitationsDiv.innerHTML = data.map(invite => `<p>${invite.details}</p>`).join('');
    } catch (err) {
        console.error(err);
    }
}

async function createInvitation(details) {
    try {
        const token = localStorage.getItem('token');
        await fetch('/api/user/invitations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
            body: JSON.stringify({ details }),
        });
    } catch (err) {
        console.error(err);
    }
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}
