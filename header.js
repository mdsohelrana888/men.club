$(document).ready(function() {
    // Initialize the custom scrollbar for the sidebar
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // Close the sidebar and overlay when the dismiss button or overlay is clicked
    $('#dismiss, .overlay').on('click', function() {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    // Open the sidebar and overlay when the sidebarCollapse button is clicked
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // Initialize Fancybox for image zooming
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    // Add a transition effect on image hover
    $(".zoom").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});
