
// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.querySelector('#username').value.trim();
            const password = document.querySelector('#password').value.trim();

            if (!username || !password) {
                alert('Please enter both username and password.');
                return;
            }

            try {
                const response = await fetch('authenticate.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                
                const data = await response.json();

                if (data.success) {
                    window.location.href = 'admin_dashboard.html';
                } else {
                    alert(data.message || 'Invalid login credentials.');
                }
            } catch (error) {
                console.error('Error logging in:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
});
