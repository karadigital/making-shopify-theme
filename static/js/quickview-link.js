function handleQuickViewClick(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the product image
    openModal('modal-quick-view', 'open');
  }

function navigateToProductPage() {
    window.location.href = './product-detail.html';
}