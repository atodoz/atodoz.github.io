// Function to send a WhatsApp message to the specified number with the project title
function sendWhatsAppMessage(projectTitle) {
    const phoneNumber = "+916381474594";
    const message = `I am interested in buying the project: ${projectTitle}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, '_blank');
  }
  
  // Add event listeners to all "Buy Now" buttons
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
      const projectTitle = this.getAttribute('data-title');
      sendWhatsAppMessage(projectTitle);
    });
  });
  