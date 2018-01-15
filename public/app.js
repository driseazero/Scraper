// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in 'animals' (JSON) and creates a table body
function displayResults(scrapeData) {
  // First, empty the table
  $("tbody").empty();

  // Then, for each entry of that json...
  scrapeData.forEach(function(data) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + data.title + "</td>" + //scrapeData.title
                         "<td>" + data.link + "</td>" + //scrapeData.link
                        
                         "</tr>");
  });
}

// Bonus function to change "active" header


// 1: On Load
// ==========

// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
