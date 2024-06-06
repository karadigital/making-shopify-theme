
// For modal quick view
function handleQuickViewClick(event) {
  event.stopPropagation(); // Prevent the click event from propagating to the product image
  openModal('modal-quick-view', 'open');
}

function navigateToProductPage() {
  window.location.href = './product-detail.html';
}

  // For search
  // Show the search dropdown when the search icon is clicked
  $('#showSearch').change(function() {
    if (this.checked) {
      $('.search-box').show();
    } else {
      $('.search-box').hide();
    }
  });

  // Hide the search dropdown when clicking outside
  $(document).click(function(event) {
    if (!$(event.target).closest('.nav-search').length) {
      $('#showSearch').prop('checked', false);
      $('.search-box').hide();
    }
  });

  // Prevent the dropdown from closing when clicking inside it
  $('.search-box').click(function(event) {
    event.stopPropagation();
  });