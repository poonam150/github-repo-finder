/* =========================================
   SECTION 1: SELECTING ELEMENTS (THE SETUP)
   We grab the HTML boxes so JavaScript can control them.
   ========================================= */
const languageSelect = document.getElementById('language-select'); // The dropdown menu
const searchBtn = document.getElementById('search-btn');           // The button
const repoContainer = document.getElementById('repo-container');   // The box where results go
const loader = document.getElementById('loader');                  // The "Loading..." text
const errorMsg = document.getElementById('error-msg');             // The error message box

/* =========================================
   SECTION 2: EVENT LISTENER (THE TRIGGER)
   This code waits for the user to click the "Find Repository" button.
   ========================================= */
searchBtn.addEventListener('click', function() {
    // 1. Check which language the user picked from the dropdown
    const selectedLanguage = languageSelect.value;
    
    // 2. Run the main function to get data
    getRepo(selectedLanguage); 
});

/* =========================================
   SECTION 3: THE MAIN LOGIC (THE BRAIN)
   This function talks to GitHub, gets data, and handles errors.
   "async" means it handles slow network requests.
   ========================================= */
async function getRepo(language) {
    // --- Step A: Reset the UI ---
    // Before we fetch new data, we clean up the screen.
    repoContainer.innerHTML = '';        // Clear any old results
    errorMsg.classList.add('hidden');    // Hide any old error messages
    loader.classList.remove('hidden');   // Show the "Loading..." text

    try {
        // --- Step B: Build the URL ---
        // We ask GitHub for repos in the chosen language, sorted by most stars.
        const apiUrl = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`;

        // --- Step C: Fetch the Data ---
        // "await" tells JS to pause here until GitHub replies.
        const response = await fetch(apiUrl);
        const data = await response.json(); // Convert the messy response into clean JSON data

        // --- Step D: Pick a Random Repository ---
        // GitHub sends us 30 items. We want just one random one.
        const randomIndex = Math.floor(Math.random() * data.items.length);
        const repo = data.items[randomIndex];

        // --- Step E: Check & Display ---
        if (repo) {
            // If we found a repo, show it on screen
            displayRepo(repo);
            
            // *Pro Feature*: Change button text to indicate they can search again
            searchBtn.textContent = 'Fetch Another Repo'; 
        } else {
            // If GitHub sent an empty list, throw an error manually
            throw new Error('No repositories found.');
        }

    } catch (error) {
        // --- Step F: Error Handling ---
        // If anything goes wrong (no internet, API down), this code runs.
        errorMsg.textContent = 'Error fetching data. Please try again.';
        errorMsg.classList.remove('hidden'); // Show the error box
        console.error(error); // Print technical error to Console for developer
    } finally {
        // --- Step G: Cleanup ---
        // This runs at the end, whether we succeeded or failed.
        loader.classList.add('hidden'); // Hide the "Loading..." text
    }
}

/* =========================================
   SECTION 4: DISPLAY FUNCTION (THE PAINTER)
   This function takes raw data and turns it into beautiful HTML.
   ========================================= */
function displayRepo(repo) {
    // We use "Template Literals" (backticks ` `) to mix HTML with our variables.
    const html = `
        <div class="repo-box">
            <h3>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </h3>
            <p>${repo.description || 'No description available.'}</p>
            <div class="repo-stats">
                <span>⭐ Stars: ${repo.stargazers_count}</span>
                <span>🍴 Forks: ${repo.forks_count}</span>
                <span>🐞 Issues: ${repo.open_issues_count}</span>
            </div>
        </div>
    `;
    
    // Inject this fresh HTML into the container div
    repoContainer.innerHTML = html;
}