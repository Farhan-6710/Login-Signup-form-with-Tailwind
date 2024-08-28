// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the dark mode toggle button and the main content container
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const mainContent = document.querySelector(".main-content");

    // Initially set dark mode to false (light mode)
    let isDarkMode = false;

    // Apply initial light mode styles
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

// Another DOMContentLoaded event listener for form animations
document.addEventListener("DOMContentLoaded", function () {
    // Show the login form with animation after a short delay
    setTimeout(function () {
        const loginContainer = document.querySelector("#login-form");
        loginContainer.classList.remove("-translate-x-44");
        loginContainer.classList.add("opacity-100", "translate-x-0");
    }, 100);

    // Event listener for switching to the sign-up form
    document.getElementById("sign-up-link").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        const loginContainer = document.querySelector("#login-form");
        const signUpContainer = document.querySelector("#sign-up-form");

        // Slide out and hide the login form
        loginContainer.classList.remove("opacity-100", "translate-x-0");
        loginContainer.classList.add("opacity-0", "-translate-x-44");

        setTimeout(function () {
            loginContainer.style.display = "none";

            // Show the sign-up form with initial classes reset
            signUpContainer.style.display = "block";
            setTimeout(function () {
                signUpContainer.classList.remove("opacity-0", "translate-x-44");
                signUpContainer.classList.add("opacity-100", "translate-x-0");
            }, 100);
        }, 500);
    });

    // Event listener for switching back to the login form
    document.getElementById("login-link").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default link behavior
        const loginContainer = document.querySelector("#login-form");
        const signUpContainer = document.querySelector("#sign-up-form");

        // Slide out and hide the sign-up form
        signUpContainer.classList.remove("opacity-100", "translate-x-0");
        signUpContainer.classList.add("opacity-0", "translate-x-44");

        setTimeout(function () {
            signUpContainer.style.display = "none";

            // Show the login form with initial classes reset
            loginContainer.style.display = "block";
            setTimeout(function () {
                loginContainer.classList.remove("opacity-0", "-translate-x-44");
                loginContainer.classList.add("opacity-100", "translate-x-0");
            }, 100);
        }, 500);
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

        // Apply the updated position to the follower element
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

        // Request the next frame to continue the animation
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
