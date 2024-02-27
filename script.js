//Search functionality//
const searchInput = document.getElementById('site-search');
const searchButton = document.querySelector('.find');

// Add event listener to the search button
searchButton.addEventListener('click', function() {
  // Get the user input value
  const userInput = searchInput.value;

  // I'm not sure what Codedex's search page is, so I'm leaving this for you to figure it out.
  window.location.href = 'https://example.com/search?q=' + encodeURIComponent(userInput);
});