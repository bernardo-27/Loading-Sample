document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading');

    // Function to hide the loading screen
    function hideLoadingScreen() {
        loadingScreen.classList.add('hidden');
    }

    // Hide loading screen after page load
    window.addEventListener('load', function() {
        // Adding a slight delay to allow any final loading
        setTimeout(hideLoadingScreen, 100);
    });

    // Hide loading screen when scrolling
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) { // Adjust the scroll position as needed
            hideLoadingScreen();
            window.removeEventListener('scroll', arguments.callee); // Remove the event listener after hiding
        }
    });
});