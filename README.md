🔍 GitHub Profile Finder

A simple, responsive web app that lets you search any GitHub username and instantly view their profile details and recently active repositories — built with Tailwind CSS and vanilla JavaScript, powered by the GitHub REST API.


![alt text](<imgs/Screenshot (122).png>)
![alt text](<imgs/Screenshot (123).png>)
![alt text](<imgs/Screenshot (124).png>)
![alt text](<imgs/Screenshot (125).png>)

✨ Features

- 🔎 Search any GitHub user by username
- 🖼️ View profile picture, name, and location
- 👥 See follower and following counts
- 📅 View account creation date
- 📂 Browse the user's 6 most recently pushed repositories.
- 📱 Fully responsive — repo grid collapses to a single column on small screens
- ⏱️ Debounced search input to avoid firing excessive API calls while typing
- ⚡ No frameworks or build tools — pure HTML, CSS (Tailwind), and vanilla JS


## 🖼️ Demo

Live Demo: --  https://profilefindertheta.vercel.app

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|----------------------|
| Structure  | HTML5                |
| Styling    | Tailwind CSS         |
| Logic      | Vanilla JavaScript (ES6+, `fetch` API) |
| Data       | GitHub REST API      |

---

## 📡 API Reference

This project consumes two public GitHub REST API endpoints:

1. User Profile Details
```
GET https://api.github.com/users/{username}
```
Returns the user's avatar, name, bio, location, followers, following, and account creation date.

2. Recently Pushed Repositories
```
GET https://api.github.com/users/{username}/repos?sort=pushed&direction=desc&per_page=6
```
Returns the 6 repositories the user most recently pushed code to, sorted by push date.

No authentication is required for these endpoints, but GitHub's unauthenticated API is rate-limited to 60 requests per hour per IP Address.

---

## ⚙️ How It Works

1. User enters a GitHub username in the search input.
2. The input is debounced — the search only fires after the user pauses typing for a short delay, instead of on every keystroke. This reduces unnecessary API calls and helps avoid hitting GitHub's rate limit.
3. On search, a `fetch` call hits the user-details endpoint and renders the profile card (avatar, name, location, followers, following, created date).
4. A second `fetch` call hits the repos endpoint and renders a responsive grid of the user's recently pushed repositories.
5. Basic error handling shows a message if the username doesn't exist or the API call fails.


## 📁 Project Structure

```
github-profile-finder/
├── index.html
├── script.js
├── style.css (if any custom CSS beyond Tailwind)
└── README.md
```

---

## 🎯 What I Learned

- Working with real-world REST APIs and handling asynchronous data with `fetch`/`async-await`
- Implementing debouncing to optimize search performance and reduce redundant API calls
- Structuring and formatting API responses into dynamic DOM elements
- Building fully responsive layouts using Tailwind CSS utility classes
- Handling edge cases like invalid usernames and failed API requests

## 🔮 Future Improvements

- Add more data of the users Github Account.
- Cache recent searches.
- Add a dark mode toggle.
- Paginate or "load more" for repositories.
- Handle GitHub API rate-limit errors gracefully.

## 👤 Author

Nirbhay
BCA Student | Web Developer (MERN Stack)

- GitHub: https://github.com/NirbhaykumarStp
