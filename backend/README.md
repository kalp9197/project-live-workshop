<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

# 📊 ScaleMetrics — Backend API

A **production-ready REST API** backend for the **ScaleMetrics** big data analytics dashboard. Built with **Node.js**, **Express.js**, and **MongoDB Atlas**, it features JWT authentication, sales analytics via MongoDB aggregation pipelines, and a full CRUD product management system.

> **Workshop at [SVGU University](https://www.svgu.ac.in/) — Conducted by [Technotery](https://www.technotery.com/) & [Infopercept Consulting Pvt. Ltd.](https://www.infopercept.com/)**

---

## 📑 Table of Contents

- [Architecture Overview](#-architecture-overview)
- [Prerequisites](#-prerequisites)
- [Step 1 — Clone the Repository](#-step-1--clone-the-repository)
- [Step 2 — MongoDB Atlas Setup](#-step-2--mongodb-atlas-setup)
- [Step 3 — Environment Configuration](#-step-3--environment-configuration)
- [Step 4 — Install Dependencies](#-step-4--install-dependencies)
- [Step 5 — Start the Server](#-step-5--start-the-server)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [API Reference](#-api-reference)
- [Testing with Postman](#-testing-with-postman)
- [Tech Stack](#-tech-stack)
- [Workshop Participants](#-workshop-participants)
- [Connect With Us](#-connect-with-us)
- [License](#-license)

---

## 🏗 Architecture Overview

```
┌──────────────┐       ┌──────────────────────────────────────────────────────┐
│   Postman /  │       │                  Express Server                      │
│   Frontend   │◄─────►│                                                      │
│   Client     │ HTTP  │  ┌──────────┐  ┌─────────────┐  ┌──────────────┐     │
└──────────────┘       │  │  Routes  │─►│ Middleware  │─►│ Controllers  │     │
                       │  │          │  │ (JWT Auth)  │  │              │     │
                       │  └──────────┘  └─────────────┘  └───────┬──────┘     │
                       │                                         │            |
                       │                                  ┌──────▼───────┐    │
                       │                                  │   Mongoose   │    │
                       │                                  │   Models     │    │
                       │                                  └──────┬───────┘    │
                       └─────────────────────────────────────────┼────────────┘
                                                                 │
                                                          ┌──────▼───────┐
                                                          │  MongoDB     │
                                                          │  Atlas       │
                                                          └──────────────┘
```

---

## ✅ Prerequisites

Before you begin, make sure these are installed on your machine:

| Requirement | Version | Download |
| :---------- | :------ | :------- |
| **Node.js** | v18+    | [nodejs.org](https://nodejs.org/) |
| **npm**     | v9+     | Comes with Node.js |
| **Git**     | Latest  | [git-scm.com](https://git-scm.com/) |
| **Postman** | Latest  | [postman.com](https://www.postman.com/downloads/) |
| **MongoDB Atlas Account** | Free Tier | [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) |

---

## 📥 Step 1 — Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/kalp9197/workshop-project.git
```

Navigate to the backend directory:

```bash
cd workshop-project/backend
```

---

## 🍃 Step 2 — MongoDB Atlas Setup

MongoDB Atlas is a cloud-hosted database service. Follow these steps to set up your free cluster:

### 2.1 — Create an Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and click **"Try Free"**
2. Sign up with your email or Google account
3. Complete the onboarding process

### 2.2 — Create a Free Cluster

1. Click **"Build a Database"**
2. Select **"M0 FREE"** (Shared) tier
3. Choose your preferred cloud provider (AWS / Google Cloud / Azure) and region
4. Name your cluster (e.g., `ScaleMetrics-Cluster`) and click **"Create Deployment"**

### 2.3 — Create a Database User

1. In the **Security Quickstart**, create a database user:
   - **Username**: Choose a username (e.g., `scalemetrics_admin`)
   - **Password**: Create a strong password (save this — you'll need it later)
2. Click **"Create User"**

### 2.4 — Whitelist Your IP Address

1. Under **"Where would you like to connect from?"**, choose **"My Local Environment"**
2. Click **"Add My Current IP Address"** (or add `0.0.0.0/0` to allow access from anywhere during development)
3. Click **"Finish and Close"**

### 2.5 — Get Your Connection String

1. On the Clusters page, click **"Connect"** on your cluster
2. Select **"Drivers"** (Node.js)
3. Copy the connection string — it will look like this:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<username>` and `<password>` with the database credentials you created
5. Add your database name (`scalemetrics`) before the `?` query string:
   ```
   mongodb+srv://scalemetrics_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/scalemetrics?retryWrites=true&w=majority
   ```

> 💡 **Tip:** MongoDB Atlas will automatically create the `scalemetrics` database and all collections when the first data is inserted — no manual database creation needed!

---

## ⚙️ Step 3 — Environment Configuration

1. Create a `.env` file in the `backend/` directory by copying the example:

   ```bash
   cp .env.example .env
   ```

   On Windows (Command Prompt):
   ```cmd
   copy .env.example .env
   ```

2. Open `.env` and fill in your values:

   ```env
   PORT=5001
   MONGO_URI=mongodb+srv://scalemetrics_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/scalemetrics?retryWrites=true&w=majority
   JWT_SECRET=change_this_to_a_long_random_secret
   JWT_EXPIRES_IN=1d
   ```

   | Variable | Description |
   |:---------|:------------|
   | `PORT` | Server port (default: `5001`) |
   | `MONGO_URI` | Your MongoDB Atlas connection string from Step 2.5 |
   | `JWT_SECRET` | A long, random secret key for signing JWT tokens |
   | `JWT_EXPIRES_IN` | Token expiration time (e.g., `1d` = 1 day, `7d` = 7 days) |

---

## 📦 Step 4 — Install Dependencies

```bash
npm install
```

This installs all required packages:

| Package | Purpose |
|:--------|:--------|
| `express` | Web framework for building REST APIs |
| `mongoose` | MongoDB object modeling (ODM) for Node.js |
| `bcryptjs` | Password hashing for secure authentication |
| `jsonwebtoken` | JWT token generation and verification |
| `cors` | Enable Cross-Origin Resource Sharing |
| `dotenv` | Load environment variables from `.env` file |
| `multer` | Handle multipart/form-data for file uploads |
| `nodemon` | *(dev)* Auto-restart server on file changes |

---

## 🚀 Step 5 — Start the Server

**Development mode** (auto-reloads on code changes):

```bash
npm run dev
```

**Production mode**:

```bash
npm start
```

You should see:

```
Server running on port 5001
MongoDB connected successfully
```

Verify with a quick health check:

```bash
curl http://localhost:5001/api/health
```

Expected response:

```json
{ "message": "ScaleMetrics backend is running" }
```

---

## 📂 Project Structure

```
backend/
├── config/
│   └── db.js                    # MongoDB Atlas connection using Mongoose
├── controllers/
│   ├── authController.js        # Register & Login logic with JWT
│   ├── dataController.js        # Data processing logic
│   ├── productController.js     # Full CRUD for products
│   └── statsController.js       # Sales analytics & aggregation pipelines
├── middleware/
│   └── authMiddleware.js        # JWT token verification middleware
├── models/
│   ├── User.js                  # User schema with password hashing
│   ├── Sale.js                  # Sales data schema
│   └── Product.js               # Product schema with specifications
├── routes/
│   ├── authRoutes.js            # POST /register, POST /login
│   ├── dataRoutes.js            # Data upload routes
│   ├── productRoutes.js         # GET, POST, PUT, DELETE /products
│   └── statsRoutes.js           # GET /summary, /revenue-by-region, etc.
├── .env.example                 # Environment variable template
├── package.json                 # Dependencies and scripts
└── server.js                    # Express app entry point
```

---

## 🔍 How It Works

### 1. Server Entry Point (`server.js`)

The server initializes Express, connects to MongoDB Atlas, sets up CORS, JSON parsing (with 10MB limit for large payloads), and registers the four route modules:

- `/api/auth` — Authentication (register & login)
- `/api/data` — Data import
- `/api/stats` — Sales analytics
- `/api/products` — Product management

A health check endpoint at `/api/health` is always available (no auth required).

### 2. Authentication Flow

1. **Register** — User sends email + password → password is automatically hashed using `bcryptjs` (via Mongoose `pre-save` hook) → user is saved to MongoDB → JWT token is returned
2. **Login** — User sends credentials → password is compared using `bcrypt.compare()` → if valid, JWT token is returned
3. **Protected Routes** — Every request to `/api/data`, `/api/stats`, and `/api/products` must include the JWT token in the `Authorization` header as `Bearer <token>`. The `authMiddleware` verifies it before allowing access.

### 3. Sales Analytics (`/api/stats`)

Uses **MongoDB Aggregation Pipelines** to compute:
- **Dataset Summary** — Total records, total revenue, total profit
- **Revenue by Region** — Grouped and sorted by total revenue
- **Sales by Item Type** — Grouped by item type with order count

### 4. Product Management (`/api/products`)

A complete **CRUD** API:
- **Create** — Validates required fields, checks for duplicate SKU
- **Read** — List all products or get one by ID
- **Update** — Partial updates supported (only send fields you want to change)
- **Delete** — Remove product by ID

Products support **specifications** as key-value pairs (e.g., `{ "key": "Color", "value": "Red" }`).

---

## 📡 API Reference

### Health Check

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `GET` | `/api/health` | ❌ No | Check if the server is running |

### Authentication

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `POST` | `/api/auth/register` | ❌ No | Register a new user |
| `POST` | `/api/auth/login` | ❌ No | Login and get JWT token |

### Sales Statistics

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `GET` | `/api/stats/summary` | ✅ Yes | Get dataset summary (records, revenue, profit) |
| `GET` | `/api/stats/revenue-by-region` | ✅ Yes | Get revenue grouped by region |
| `GET` | `/api/stats/sales-by-item-type` | ✅ Yes | Get sales grouped by item type |
| `GET` | `/api/stats/records?limit=100` | ✅ Yes | Get sales records (max 200) |

### Product Management

| Method | Endpoint | Auth | Description |
|:-------|:---------|:-----|:------------|
| `GET` | `/api/products` | ✅ Yes | Get all products |
| `POST` | `/api/products` | ✅ Yes | Create a new product |
| `GET` | `/api/products/:id` | ✅ Yes | Get product by ID |
| `PUT` | `/api/products/:id` | ✅ Yes | Update product by ID |
| `DELETE` | `/api/products/:id` | ✅ Yes | Delete product by ID |

---

## 🧪 Testing with Postman

### Step 1 — Set Up Postman

1. Download and install [Postman](https://www.postman.com/downloads/)
2. Create a new **Collection** called `ScaleMetrics API`
3. Set a **Collection Variable** called `base_url` with value `http://localhost:5001`

### Step 2 — Register a New User

| Setting | Value |
|:--------|:------|
| **Method** | `POST` |
| **URL** | `{{base_url}}/api/auth/register` |
| **Headers** | `Content-Type: application/json` |

**Body** (raw → JSON):
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Expected Response** (`201 Created`):
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "user": {
    "id": "64f...",
    "email": "testuser@example.com"
  }
}
```

> 📌 **Copy the `token` value** — you'll need it for all subsequent requests!

### Step 3 — Login

| Setting | Value |
|:--------|:------|
| **Method** | `POST` |
| **URL** | `{{base_url}}/api/auth/login` |
| **Headers** | `Content-Type: application/json` |

**Body** (raw → JSON):
```json
{
  "email": "testuser@example.com",
  "password": "password123"
}
```

**Expected Response** (`200 OK`):
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "user": {
    "id": "64f...",
    "email": "testuser@example.com"
  }
}
```

### Step 4 — Set Up Authorization for Protected Routes

For all requests below, add the JWT token in the **Authorization** tab:

1. Go to the **Authorization** tab in Postman
2. Select **Type** → `Bearer Token`
3. Paste the `token` you copied from the register/login response

Alternatively, set the header manually:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

### Step 5 — Get Sales Statistics

**Dataset Summary:**
```
GET {{base_url}}/api/stats/summary
Authorization: Bearer <your_token>
```

**Revenue by Region:**
```
GET {{base_url}}/api/stats/revenue-by-region
Authorization: Bearer <your_token>
```

**Sales by Item Type:**
```
GET {{base_url}}/api/stats/sales-by-item-type
Authorization: Bearer <your_token>
```

**Sales Records (with limit):**
```
GET {{base_url}}/api/stats/records?limit=50
Authorization: Bearer <your_token>
```

### Step 6 — Product CRUD Operations

**Create a Product:**
```
POST {{base_url}}/api/products
Authorization: Bearer <your_token>
Content-Type: application/json
```

```json
{
  "name": "Wireless Mouse",
  "sku": "WM-001",
  "price": 29.99,
  "quantity": 150,
  "description": "Ergonomic wireless mouse with USB receiver",
  "specifications": [
    { "key": "Color", "value": "Black" },
    { "key": "Battery", "value": "AA x 2" },
    { "key": "Connectivity", "value": "2.4 GHz Wireless" }
  ]
}
```

**Get All Products:**
```
GET {{base_url}}/api/products
Authorization: Bearer <your_token>
```

**Get Product by ID:**
```
GET {{base_url}}/api/products/<product_id>
Authorization: Bearer <your_token>
```

**Update Product:**
```
PUT {{base_url}}/api/products/<product_id>
Authorization: Bearer <your_token>
Content-Type: application/json
```

```json
{
  "price": 24.99,
  "quantity": 200
}
```

**Delete Product:**
```
DELETE {{base_url}}/api/products/<product_id>
Authorization: Bearer <your_token>
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| **Node.js** | JavaScript runtime for backend development |
| **Express.js v4** | Web framework for building RESTful APIs |
| **MongoDB Atlas** | Cloud-hosted NoSQL database |
| **Mongoose v8** | MongoDB ODM with schema validation |
| **JSON Web Tokens** | Stateless authentication |
| **bcryptjs** | Secure password hashing |
| **Multer** | Multipart file upload handling |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |
| **ES Modules** | Modern `import/export` syntax |
| **Nodemon** | Development auto-restart utility |

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

## 🏢 Companies

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
  Made with ❤️ by the <a href="https://www.technotery.com/">Technotery</a> & <a href="https://www.infopercept.com/">Infopercept</a> Team at <strong>SVGU University</strong>
</p>
