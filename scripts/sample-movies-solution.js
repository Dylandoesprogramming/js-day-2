document.addEventListener("DOMContentLoaded", function() {

   function createMovieList(movies) {
      // Get movie-list element
      var movieList = document.getElementById("movie-list")

      // Remove any existing movie list items
      while(movieList.firstChild) {
         movieList.removeChild(movieList.firstChild)
      }

      // Loop through the array of movies
      for (var i = 0; i < movies.length; i++) {
         // Create list item
         var listItem = document.createElement("li")
         listItem.innerText = movies[i].title

         // Add event listener to display movie info
         listItem.addEventListener("click", function(event) {
            displayMovieInfo(event.target.innerText)
         })

         // Append listItem to movieList
         movieList.appendChild(listItem)

      }
   }
   
   function searchMovies(title) {
      console.log(title)
      var filteredList = movies.filter(function(movie) {
         return movie.title.toLowerCase().includes(title.toLowerCase())
      })
      createMovieList(filteredList)
   }

   function displayMovieInfo(title) {
      // Get movie-list-container
      var movieListContainer = document.querySelector(".movie-app-movie-list")

      // Find movie
      var foundMovie = movies.find(function(movie) {
         return movie.title.toLowerCase().includes(title.toLowerCase())
      })
      // Add foundMovie to movie-list-container
      if (foundMovie) {

         // First remove existing movie info element
         var movieInfo = document.querySelector(".movie-info")
         if (movieInfo) {
            movieListContainer.removeChild(movieInfo)
         }

         // Create new movie info element
         var movieInfo = document.createElement("ul")
         movieInfo.className = "movie-info"

         // Add movie properties to movie info element
         for (var prop in foundMovie) {
            var movieInfoItem = document.createElement("li")
            movieInfoItem.innerText = prop[0].toUpperCase() + prop.slice(1) + ": " + foundMovie[prop]
            movieInfo.appendChild(movieInfoItem)
         }         

         // Append movie info item to movie-list-container
         movieListContainer.appendChild(movieInfo)
      }
   }
   var movies = [
      {
         title: "Rad",
         director: "Steven Spielberg",
         rating: 12,
         image: ""   
      },
      {
         title: "Legally Blonde",
         director: "Francis Ford Coppola",
         rating: -1,
         image: ""
      },
      {
         title: "Pokemon #1",
         director: "Sophia Coppola",
         rating: 4,
         image: ""
      },
   ];

   createMovieList(movies)


   // SEARCH STUFF
   // Get search elements
   var searchInput = document.getElementById("movie-search-input")
   var searchButton = document.getElementById("movie-search-button")
   // console.log(searchInput, searchButton)

   // Add event listeners
   searchInput.addEventListener("keyup", function(event){
      if (event.key === "Enter") {
         console.log("Searching")
         searchMovies(event.target.value)
      }
   })

   searchButton.addEventListener("click", function(){
      console.log("Searching")
      searchMovies(searchInput.value)
   })

})

