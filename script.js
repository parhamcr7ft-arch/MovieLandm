const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");
const noResults = document.getElementById("noResults");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .trim()
            .toLowerCase();

        let found = 0;

        movieCards.forEach(function (movie) {

            const text = movie.textContent.toLowerCase();

            if (text.includes(searchText)) {

                movie.style.display = "block";
                found++;

            } else {

                movie.style.display = "none";

            }

        });

        if (noResults) {

            if (found === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        }

    });

}