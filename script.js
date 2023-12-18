document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdowns
    var dropdowns = document.querySelectorAll('.dropdown');

    // Add event listeners to each dropdown
    dropdowns.forEach(function (dropdown) {
        var dropdownContent = dropdown.querySelector('.dropdown-content');

        // Initialize the height to 0
        dropdownContent.style.maxHeight = "0";
        dropdownContent.style.opacity = "0";
        dropdownContent.style.transform = "translateY(-10px)";

        dropdown.addEventListener('mouseenter', function () {
            // Set the maximum height, opacity, and transform to show the dropdown content
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            dropdownContent.style.opacity = "1";
            dropdownContent.style.transform = "translateY(0)";
        });

        dropdown.addEventListener('mouseleave', function () {
            // Reset the maximum height, opacity, and transform to hide the dropdown content
            dropdownContent.style.maxHeight = "0";
            dropdownContent.style.opacity = "0";
            dropdownContent.style.transform = "translateY(-10px)";
        });
    });
});
