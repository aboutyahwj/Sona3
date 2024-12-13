// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
window.onload = function() {
    // تحقق مما إذا كان المستخدم قد سجل دخوله مسبقًا
    if (localStorage.getItem('userLoggedIn') === 'true') {
        window.location.href = "dashboard.html";  // إعادة توجيه المستخدم إلى صفحة الحساب إذا كان مسجلاً
    }

    // إضافة حساب admin إذا لم يكن موجودًا في localStorage
    if (!localStorage.getItem('adminCreated')) {
        // إضافة بيانات المشرف
        localStorage.setItem('email', 'admin@example.com');
        localStorage.setItem('password', 'admin3');
        localStorage.setItem('adminCreated', 'true');  // تأكيد أنه تم إنشاء الحساب
    }
};

// إضافة الحدث عند إرسال النموذج (تسجيل الدخول)
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تحقق من البريد الإلكتروني وكلمة المرور
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        // إذا كانت البيانات صحيحة، تسجيل الدخول بنجاح
        localStorage.setItem('userLoggedIn', 'true');
        alert('Login successful!');
        window.location.href = "dashboard.html";  // توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
