// Cache the tab and content selectors
const $tabs = $(".tabs__wrapper a");
const $content = $(".tabs__content > div");

// Add active class to the first tab and show its content, hide the others
$tabs.first().addClass("active");
$content.hide().first().show();

// Tab switching functionality
$tabs.click(function(event) {
    // Prevent default scrolling behavior
    event.preventDefault();

    // If the clicked tab is already active, return false
    if ($(this).hasClass("active")) return false;

    // Remove the active class from all tabs
    $tabs.removeClass("active");
    // Add the active class to the clicked tab
    $(this).addClass("active");

    // Hide all tab content
    $content.hide();
    // Show the corresponding tab content
    const tab_id = $(this).attr("href");
    $(tab_id).show();
});
