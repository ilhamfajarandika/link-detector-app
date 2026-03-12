# Link Detector 🔐

**Link Guardian** is a web-based phishing detection tool that analyzes suspicious URLs and identifies potential security threats such as **typosquatting, homograph attacks, Unicode domains, and punycode manipulation**.

The system evaluates a given URL and produces a **risk score** along with explanations of detected anomalies.

---

# 🚀 Features

### 1. Typosquatting Detection

Detects domains that mimic popular brands using small character changes.

Example:

```
g00gle.com → google.com
paypaI.com → paypal.com
faceb00k.com → facebook.com
```

---

### 2. Unicode Homograph Detection

Detects visually similar characters from other alphabets used to impersonate legitimate domains.

Example:

```
аррӏе.com → apple.com
gοοgle.com → google.com
```

These attacks replace Latin characters with **Cyrillic or Greek letters**.

---

### 3. Punycode Detection

Detects domains encoded using **Punycode** (`xn--`) that may hide malicious Unicode characters.

Example:

```
xn--pple-43d.com → аpple.com
```

---

### 4. Brand Similarity Analysis

Uses a **Levenshtein similarity algorithm** to compare suspicious domains against known brand domains.

Example:

```
outloooook.com → outlook.com
```

---

### 5. Risk Scoring System

Each analyzed URL receives a **risk score (0–100)** based on detected anomalies.

Risk factors include:

* Punycode domains
* Unicode characters
* Homograph characters
* Brand similarity
* Suspicious domain patterns

---

# 🧠 How It Works

1. User submits a URL.

2. Backend parses the domain.

3. The system checks for:

   * Punycode encoding
   * Unicode characters
   * Homograph characters
   * Brand similarity

4. A **risk score** is calculated.

5. Results are displayed with highlighted suspicious characters.

---

# 🛠 Tech Stack

### Frontend

* React
* TailwindCSS
* Axios
* Lucide Icons

### Backend

* Node.js
* Express

### Algorithms

* Levenshtein Distance (Similarity Detection)

---

# ⚙️ Installation

### 1. Clone Repository

```
git clone https://github.com/ilhamfajarandika/link-guardian.git
cd link-guardian
```

---

### 2. Install Dependencies

Backend

```
cd server
npm install
```

Frontend

```
cd client
npm install
```

---

### 3. Run the Application

Start backend:

```
cd server
node server.js
```

Start frontend:

```
cd client
npm run dev
```

---

# 🧪 Example Test URLs

### Safe Domains

```
https://google.com
https://github.com
https://wikipedia.org
```

---

### Typosquatting

```
https://g00gle.com
https://faceb00k.com
https://paypaI.com
```

---

### Phishing Style Domains

```
https://paypal-account-verification.com
https://google-login-security.com
https://facebook-security-alert.com
```

---

### Unicode Homograph

```
https://аррӏе.com
https://gοοgle.com
```

---

### Punycode

```
https://xn--pple-43d.com
```

---

# 📊 Example Output

```
Detected Domain: g00gle.com

⚠ Domain looks similar to google.com
Similarity: 83%

Risk Score: 40%
Status: Suspicious Domain
```

---

# 🎯 Purpose

This project was created as a **learning project in web security and phishing detection**, demonstrating how attackers manipulate domain names to deceive users.

This tool is designed **for educational and research purposes only**.
It should not be used as a full replacement for professional phishing detection systems.

