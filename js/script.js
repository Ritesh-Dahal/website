// JavaScript for toggling profile section visibility
function toggleProfile() {
  var profile = document.getElementById('profile');
  // Toggle visibility using 'display' style
  if (profile.style.display === 'none') {
    profile.style.display = 'block';
  } else {
    profile.style.display = 'none';
  }
}
