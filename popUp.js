// Show popup after 10 seconds (adjust as you wish)
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(showCustomPopup, 10000); // 10000 ms = 10 seconds
});

// Show the popup
function showCustomPopup() {
  document.getElementById('custom-popup').style.display = 'flex';
}
// Close the popup (used by both buttons)
function closeCustomPopup() {
  document.getElementById('custom-popup').style.display = 'none';
}
// The action button also just closes the popup
function finishRobux() {
  closeCustomPopup();
}

// Also close if click outside the modal, or ESC key
document.getElementById('custom-popup').addEventListener('click', function(e) {
  if(e.target === this) closeCustomPopup();
});
document.addEventListener('keydown', function(e){
  if(e.key === "Escape") closeCustomPopup();
});
