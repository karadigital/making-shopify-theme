// Modals
openModal = (id, str) => {
    if (str === 'open') {
        $('#' + id).addClass('visible');
        $("body").css("overflow", "hidden");

        // Add event listener to close modal when clicking outside of modal__content
        $('#' + id).on('click', function(event) {
        if ($(event.target).hasClass('modal__wrapper')) {
            closeModal(id);
        }
        });
    } else {
        closeModal(id);
    }
}

closeModal = (id) => {
    $('#' + id).removeClass('visible');
    $("body").css("overflow", "auto");
}