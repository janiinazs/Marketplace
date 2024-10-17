document.addEventListener('DOMContentLoaded', function () {
    const showLogin = document.getElementById('showLogin');
    const showSignup = document.getElementById('showSignup');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const userOptions = document.getElementById('userOptions');
    const welcomeUser = document.getElementById('welcomeUser');
    const addProductLink = document.getElementById('addProductLink');
    const cartLink = document.getElementById('cartLink');
    const buyProductsButton = document.getElementById('buyProducts');
    const sellProductsButton = document.getElementById('sellProducts');

    // Alternar formularios
    showLogin.addEventListener('click', function () {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    showSignup.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Registro de usuario
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('userType').value;

        // Guardar información en localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('userType', userType);

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        signupForm.reset();
    });

    // Inicio de sesión
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        // Verificar credenciales
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            welcomeUser.textContent = localStorage.getItem('username');
            userOptions.classList.remove('hidden');

            // Mostrar enlaces a las páginas adicionales
            addProductLink.classList.remove('hidden');
            cartLink.classList.remove('hidden');

            // Ocultar formularios
            signupForm.classList.add('hidden');
            loginForm.classList.add('hidden');

            // Mostrar botones de comprar y vender productos
            buyProductsButton.classList.remove('hidden');
            sellProductsButton.classList.remove('hidden');

            // Redirigir según el tipo de usuario
            const userType = localStorage.getItem('userType');
            if (userType === 'consumer') {
                buyProductsButton.addEventListener('click', () => {
                    window.location.href = 'cart.html'; // Redirige a la página del carrito
                });
                sellProductsButton.classList.add('hidden'); // Oculta el botón de vender
            } else if (userType === 'producer') {
                sellProductsButton.addEventListener('click', () => {
                    window.location.href = 'addProduct.html'; // Redirige a la página de agregar productos
                });
                buyProductsButton.classList.add('hidden'); // Oculta el botón de comprar
            }
        } else {
            alert('Credenciales incorrectas. Intenta nuevamente.');
        }
                // Validación de formulario de registro
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden. Intenta nuevamente.');
        return;
    }

    // Guardar información en localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('userType', userType);

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    signupForm.reset();
        });
        // Validación de formulario para agregar producto
addProductForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;

    // Validar que todos los campos estén llenos
    if (!productName || !productPrice || !productDescription) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Aquí puedes agregar la lógica para almacenar el producto (localStorage o una API)
    alert('Producto agregado exitosamente.');
    addProductForm.reset();
    });        
    });
});
