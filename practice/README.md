<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/ES6+-FF9800?style=for-the-badge&logo=javascript&logoColor=white" alt="ES6+" />
</p>

# 🚀 Backend Live Workshop — Node.js & Express.js

A **hands-on, progressive workshop** covering core backend development concepts with **Node.js** and **Express.js**. Each task is a self-contained script that builds upon the previous one, taking you from a simple "Hello World" all the way to building Express servers and mastering asynchronous JavaScript patterns.

> **Workshop at [SVGU University](https://www.svgu.ac.in/) — Conducted by [Technotery](https://www.technotery.com/) & [Infopercept Consulting Pvt. Ltd.](https://www.infopercept.com/)**

---

## 📑 Table of Contents

- [Getting Started](#-getting-started)
- [Prerequisites](#-prerequisites)
- [Project Structure & Tasks](#-project-structure--tasks)
- [Running the Scripts](#-running-the-scripts)
- [Tech Stack](#-tech-stack)
- [Workshop Participants](#-workshop-participants)
- [Connect With Us](#-connect-with-us)
- [License](#-license)

---

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kalp9197/project-live-workshop.git
```

### 2. Navigate to the Project

```bash
cd project-live-workshop
```

### 3. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) (v18 or later recommended) installed on your machine, then run:

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Or start in production mode:

```bash
npm start
```

---

## ✅ Prerequisites

| Requirement | Version |
| :---------- | :------ |
| **Node.js** | v18+    |
| **npm**     | v9+     |
| **Git**     | Latest  |

---

## 📂 Project Structure & Tasks

The workshop is organized into **11 progressive tasks**, each focusing on a key backend concept:

```
project-live-workshop/
├── 1_hello_world.js          # Task 01 — Hello World
├── 2_fs.js                   # Task 02 — File System Operations
├── 3_path.js                 # Task 03 — Path Module
├── 4_http.js                 # Task 04 — HTTP Server
├── 5_let_const.js            # Task 05 — ES6 Variables
├── 6_sync_async.js           # Task 06 — Sync vs Async
├── 7_callback.js             # Task 07 — Callbacks
├── 8_promises.js             # Task 08 — Promises
├── 9_async.js                # Task 09 — Async / Await
├── 10_parallel_promises.js   # Task 10 — Parallel Promises
├── 11_express_server.js      # Task 11 — Express.js Server
├── server.js                 # Main server entry point
├── data.txt                  # Sample data file for FS tasks
├── package.json
└── package-lock.json
```

### 📝 Task Breakdown

| #  | File | Topic | What You'll Learn |
|:--:|:-----|:------|:------------------|
| 01 | `1_hello_world.js` | **Hello World** | Your first Node.js script — running JavaScript outside the browser using `console.log`. |
| 02 | `2_fs.js` | **File System (fs)** | Reading & writing files asynchronously with the built-in `fs/promises` module. |
| 03 | `3_path.js` | **Path Module** | Building cross-platform file paths using `path.join()` — avoiding hardcoded slashes. |
| 04 | `4_http.js` | **HTTP Server** | Creating a raw HTTP server with Node's built-in `http` module — handling requests & responses manually. |
| 05 | `5_let_const.js` | **ES6 — let & const** | Understanding block-scoped variables (`let`, `const`) vs. function-scoped `var`. |
| 06 | `6_sync_async.js` | **Sync vs Async** | Comparing blocking (synchronous) and non-blocking (asynchronous) file reads side by side. |
| 07 | `7_callback.js` | **Callbacks** | Understanding callback functions & the "Callback Hell" problem with nested async operations. |
| 08 | `8_promises.js` | **Promises** | Solving Callback Hell with `.then()` chaining and `.catch()` error handling. |
| 09 | `9_async.js` | **Async / Await** | Writing clean, readable async code using `async` functions and `await` — with `try/catch` error handling. |
| 10 | `10_parallel_promises.js` | **Parallel Promises** | Running multiple async operations concurrently using `Promise.all()` for maximum performance. |
| 11 | `11_express_server.js` | **Express.js Server** | Setting up a modern web server with Express.js — defining routes and handling HTTP requests. |

---

## ▶️ Running the Scripts

Run any individual task script with Node:

```bash
node <filename>
```

**Examples:**

```bash
# Run the Hello World task
node 1_hello_world.js

# Start the raw HTTP server (runs on port 8001)
node 4_http.js

# Start the Express server (runs on port 5000)
node 11_express_server.js
```

For the main server (configured via `package.json`):

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start with **nodemon** (auto-reloads on file changes) |
| `npm start` | Start in **production** mode |

---

## 🛠 Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| **Node.js** | JavaScript runtime for backend development |
| **Express.js v5** | Minimalist web framework for building APIs & servers |
| **ES Modules** | Modern `import/export` syntax (`"type": "module"`) |
| **Nodemon** | Development utility for auto-restarting the server |

---

## 👨‍💻 Workshop Participants

This workshop was attended by developers from **Technotery** and **Infopercept Consulting** at **SVGU University**:

<table>
  <tr>
    <th>Name</th>
    <th>Company</th>
    <th>LinkedIn</th>
  </tr>
  <tr>
    <td><strong>Vishv Unjiya</strong></td>
    <td><a href="https://www.technotery.com/">Technotery</a></td>
    <td><a href="https://www.linkedin.com/in/vishv-unjiya-a49717220/">Connect on LinkedIn →</a></td>
  </tr>
  <tr>
    <td><strong>Hitesh Nathani</strong></td>
    <td><a href="https://www.infopercept.com/">Infopercept Consulting</a></td>
    <td><a href="https://www.linkedin.com/in/hitesh-nathani-06a803237/">Connect on LinkedIn →</a></td>
  </tr>
  <tr>
    <td><strong>Kalp Patel</strong></td>
    <td><a href="https://www.technotery.com/">Technotery</a></td>
    <td><a href="https://www.linkedin.com/in/kalp-patel-93526425b/">Connect on LinkedIn →</a></td>
  </tr>
  <tr>
    <td><strong>Jainil Patel</strong></td>
    <td><a href="https://www.infopercept.com/">Infopercept Consulting</a></td>
    <td><a href="https://www.linkedin.com/in/jainilpatel14/">Connect on LinkedIn →</a></td>
  </tr>
  <tr>
    <td><strong>Hitarth Sharma</strong></td>
    <td><a href="https://www.infopercept.com/">Infopercept Consulting</a></td>
    <td><a href="https://www.linkedin.com/in/hitarthh/">Connect on LinkedIn →</a></td>
  </tr>
</table>

---

## 🏢 Organized By

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.technotery.com/">
        <strong>Technotery</strong>
      </a>
      <br />
      <a href="https://www.linkedin.com/company/technotery/">LinkedIn</a> · <a href="https://www.technotery.com/">Website</a>
    </td>
    <td align="center" width="50%">
      <a href="https://www.infopercept.com/">
        <strong>Infopercept Consulting Pvt. Ltd.</strong>
      </a>
      <br />
      <a href="https://www.linkedin.com/company/infopercept-consulting-pvt-ltd">LinkedIn</a> · <a href="https://www.infopercept.com/">Website</a>
    </td>
  </tr>
</table>

---

## 🤝 Connect With Us

We'd love to connect with you! Follow us and the workshop participants on LinkedIn for more content, workshops, and updates:

<p align="center">
  <a href="https://www.linkedin.com/in/vishv-unjiya-a49717220/"><img src="https://img.shields.io/badge/Vishv_Unjiya-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Vishv Unjiya LinkedIn" /></a>
  <a href="https://www.linkedin.com/in/hitesh-nathani-06a803237/"><img src="https://img.shields.io/badge/Hitesh_Nathani-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Hitesh Nathani LinkedIn" /></a>
  <a href="https://www.linkedin.com/in/kalp-patel-93526425b/"><img src="https://img.shields.io/badge/Kalp_Patel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Kalp Patel LinkedIn" /></a>
  <a href="https://www.linkedin.com/in/jainilpatel14/"><img src="https://img.shields.io/badge/Jainil_Patel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Jainil Patel LinkedIn" /></a>
  <a href="https://www.linkedin.com/in/hitarthh/"><img src="https://img.shields.io/badge/Hitarth_Sharma-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Hitarth Sharma LinkedIn" /></a>
</p>

<p align="center">
  <a href="https://www.linkedin.com/company/technotery/"><img src="https://img.shields.io/badge/Technotery-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Technotery LinkedIn" /></a>
  <a href="https://www.linkedin.com/company/infopercept-consulting-pvt-ltd"><img src="https://img.shields.io/badge/Infopercept_Consulting-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Infopercept LinkedIn" /></a>
</p>

> 💡 **Follow us on LinkedIn** to stay updated with upcoming workshops, tech talks, and career opportunities. Let's learn and grow together!

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Made with ❤️ by the <a href="https://www.technotery.com/">Technotery</a> & <a href="https://www.infopercept.com/">Infopercept</a> Team
</p>
