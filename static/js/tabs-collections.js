 // Add active class to the first tab
    $(".tabs__wrapper a:first").addClass("active");

    // Tab switching functionality
    $(".tabs__wrapper a").click(function(event){
        // Prevent default scrolling behavior
        event.preventDefault();

        // If the clicked tab is already active, return false
        if($(this).hasClass("active")) return false;

        // Remove the active class from all tabs
        $(".tabs__wrapper a").removeClass("active");
        // Add the active class to the clicked tab
        $(this).addClass("active");

        // Hide all tab content
        $(".tabs__content > div").hide();
        // Show the corresponding tab content
        var tab_id = $(this).attr("href");
        $(tab_id).show();
    });

    // Show all products when clicking "All Products" tab
    $(".tabs__wrapper a[href='#all']").click(function(event){
        // Prevent default scrolling behavior
        event.preventDefault();

        // Remove active class from all tabs
        $(".tabs__wrapper a").removeClass("active");
        // Add active class to "All Products" tab
        $(this).addClass("active");

        // Show all tab content
        $(".tabs__content > div").show();
    });