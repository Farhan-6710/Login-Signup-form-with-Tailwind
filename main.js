document.addEventListener("DOMContentLoaded", function () {
    // Get references to the dark mode toggle button and the main content container
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const mainContent = document.querySelector(".main-content");

    // Initially set dark mode to false (light mode)
    let isDarkMode = false;

    // Apply initial dark mode styles
    setDarkMode(isDarkMode);

    // Event listener for toggling dark mode on button click
    darkModeToggle.addEventListener("click", function () {
        // Toggle dark mode state
        isDarkMode = !isDarkMode;
        // Apply dark mode styles based on the new state
        setDarkMode(isDarkMode);
    });

    // Function to set dark mode based on the isDark value
    function setDarkMode(isDark) {
        if (isDark) {
            mainContent.classList.add("dark");
        } else {
            mainContent.classList.remove("dark");
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Show the login form with animation after a short delay
    setTimeout(function () {
        const loginContainer = document.querySelector("#login-form");
        if (loginContainer) {
            // Ensure the initial state for the login container
            loginContainer.style.opacity = '0';
            loginContainer.style.transform = 'translateX(-100%)';
            loginContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            // Display the login form and apply the transition
            loginContainer.style.display = 'block';
            setTimeout(() => {
                loginContainer.style.opacity = '1';
                loginContainer.style.transform = 'translateX(0)';
                console.log('Login form shown.');
            }, 100);
        } else {
            console.log('Login container not found.');
        }
    }, 100);

    // Event listener for switching to the sign-up form
    document.getElementById("sign-up-link").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        const loginContainer = document.querySelector("#login-form");
        const signUpContainer = document.querySelector("#sign-up-form");

        if (loginContainer && signUpContainer) {
            // Hide the login form with animation
            loginContainer.style.opacity = '0';
            loginContainer.style.transform = 'translateX(-100%)';

            setTimeout(function () {
                loginContainer.style.display = 'none';

                // Show the sign-up form with initial styles
                signUpContainer.style.display = 'block';
                signUpContainer.style.opacity = '0';
                signUpContainer.style.transform = 'translateX(100%)';
                signUpContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                setTimeout(function () {
                    signUpContainer.style.opacity = '1';
                    signUpContainer.style.transform = 'translateX(0)';
                    console.log('Sign-up form shown.');
                }, 100);
            }, 500);
        } else {
            console.log('Containers for switching forms not found.');
        }
    });

    // Event listener for switching back to the login form
    document.getElementById("login-link").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        const loginContainer = document.querySelector("#login-form");
        const signUpContainer = document.querySelector("#sign-up-form");

        if (loginContainer && signUpContainer) {
            // Hide the sign-up form with animation
            signUpContainer.style.opacity = '0';
            signUpContainer.style.transform = 'translateX(100%)';

            setTimeout(function () {
                signUpContainer.style.display = 'none';

                // Show the login form with initial styles
                loginContainer.style.display = 'block';
                loginContainer.style.opacity = '0';
                loginContainer.style.transform = 'translateX(-100%)';
                loginContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

                setTimeout(function () {
                    loginContainer.style.opacity = '1';
                    loginContainer.style.transform = 'translateX(0)';
                    console.log('Login form shown.');
                }, 100);
            }, 500);
        } else {
            console.log('Containers for switching forms not found.');
        }
    });
});

// Script for mouse follower animation
document.addEventListener('DOMContentLoaded', () => {
    // Get reference to the follower element
    const follower = document.querySelector('.follower');
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;

    // Function to update the follower position based on mouse movement
    function updateFollower() {
        posX += (mouseX - posX) * 0.1;
        posY += (mouseY - posY) * 0.1;

        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

        requestAnimationFrame(updateFollower);
    }

    // Mouse move event listener to track the mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - 10; // Offset to center the follower
        mouseY = e.clientY - 10; // Offset to center the follower
    });

    // Start the follower animation
    updateFollower();
});
