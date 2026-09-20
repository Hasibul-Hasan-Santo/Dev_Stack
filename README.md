# 🚀 DevStack - Build Your Ideal Development Stack

> A modern, interactive web application designed for developers to explore, compare, and build their dream technology stack for frontend, backend, databases, and tooling.

---

## 🛠️ Technologies Used

* **React** (with TypeScript)
* **Tailwind CSS** for styling and responsive design
* **React Toastify** for smooth interactive notifications
* **Vite** as the build tool and development server

---

## ✨ Key Features

1. **Interactive Technology Explorer:** Browse through a curated list of technologies across various categories with badges, ratings, and difficulty indicators.
2. **Custom Stack Builder:** Easily add or remove technologies to your personalized stack sidebar with real-time toast feedback.
3. **Fully Responsive Design:** Optimized for seamless viewing across mobile, tablet, and desktop screens.

---

## 💡 React Concept Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX/JavaScript XML is a syntax extension for JavaScript. It allows us to write HTML-like code directly inside our JavaScript files, making UI components much more readable, expressive, and easier to structure.

### 2. What is the difference between props and state?
* Props (properties) are passed down from a parent component to a child component and are read-only (immutable).
* State is managed inside a component,it can be updated or change over time using functions, and causes the component to re-render when its value changes.

### 3. What does the useState hook do, and where did you use it in this project?
useState is a React Hook that lets functional components hold and update state. In this project, it was used to track the user's selected technologies in the stack select or remove etc.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect lets you run side effects  after a component renders. It was needed to fetch the technology list from the external JSON API once when the app loads, ensuring data fetching happens asynchronously without freezing the initial render.

### 5. Why does every item in a .map() list need a unique key prop?
Keys help React efficiently identify which items in a list have changed, been added, or been removed. This optimizes rendering performance and avoids UI bugs when updating lists dynamically.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
It is the process of displaying different UI elements or components based on specific conditions (using operators like ternary or logical &&).

Where it was used:

In Sidebar.tsx, where it checks if selectedTech.length === 0. If true, it displays the "No Stack selected yet." message; otherwise, it maps through and displays the selected technologies list. 


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* Parent to Child: Data is passed down through props.
* Child to Parent: The parent passes a callback function down via props, and the child calls that function to send data or trigger an action.
