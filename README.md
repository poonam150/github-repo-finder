# 🔍 GitHub Random Repository Finder

A responsive web application that utilizes the **GitHub REST API** to help developers discover random open-source repositories based on their preferred programming language.

**🔴 Live Demo:** [https://poonam150.github.io/github-repo-finder/](https://poonam150.github.io/github-repo-finder/)

---

## 🚀 Features

* **Language-Based Search:** Filter repositories by popular programming languages (JavaScript, Python, Java, C++, etc.).
* **Random Selection Logic:** Intelligently picks a random repository from the top results.
* **Real-Time Data:** Fetches live data including Stars ⭐, Forks 🍴, and Open Issues 🐞.
* **Dynamic UI:** Updates the interface using JavaScript DOM manipulation without page reloads.
* **Error Handling:** Graceful error messages for network failures or empty results.
* **Responsive Design:** Fully optimized for desktop and mobile devices.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox & Responsive Design)
* **Logic:** JavaScript (ES6+, Async/Await, Fetch API)
* **External Service:** GitHub Search API

---

## 📂 How It Works

1.  **User Selection:** The user selects a language from the dropdown menu.
2.  **API Request:** The app sends an asynchronous `GET` request to `https://api.github.com/search/repositories`.
3.  **Data Processing:** The JSON response is parsed, and a random index is calculated to select one repository.
4.  **DOM Update:** The repository details are injected into the HTML container.

---

## 💻 Local Setup

If you want to run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/poonam150/github-repo-finder.git](https://github.com/poonam150/github-repo-finder.git)
    ```
2.  **Navigate to the project directory**
    ```bash
    cd github-repo-finder
    ```
3.  **Open `index.html`** in your browser.

---

## 🔮 Future Improvements

* Add a "Dark Mode" toggle.
* Allow users to sort results by "Most Recent" or "Most Help Wanted".
* Add a history section to show previously viewed repositories.

---

Made with ❤️ by Poonam