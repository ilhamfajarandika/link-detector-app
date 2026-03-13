# Link Guardian 🔐

**Link Guardian** adalah alat pendeteksi phishing berbasis web yang menganalisis URL untuk mengidentifikasi potensi ancaman keamanan seperti **typosquatting, homograph attack, domain Unicode, dan manipulasi punycode**.

Sistem ini mengevaluasi URL yang diberikan dan menghasilkan **risk score** beserta penjelasan mengenai anomali yang terdeteksi.

Proyek ini menunjukkan bagaimana penyerang dapat memanipulasi nama domain untuk **meniru situs web yang sah** dan menipu pengguna agar memberikan informasi sensitif.

---

# 🚀 Fitur

## 1. Deteksi Typosquatting

Mendeteksi domain yang meniru merek populer dengan mengganti karakter menggunakan huruf atau angka yang mirip secara visual.

Contoh:

```
g00gle.com → google.com
paypaI.com → paypal.com
faceb00k.com → facebook.com
```

Penyerang sering mengganti huruf dengan angka atau huruf besar untuk mengecoh pengguna.

---

## 2. Deteksi Unicode Homograph

Mendeteksi domain yang menggunakan **karakter Unicode dari alfabet lain** yang terlihat mirip dengan karakter Latin.

Contoh:

```
аррӏе.com → apple.com
gοοgle.com → google.com
```

Serangan ini biasanya menggunakan huruf dari **alfabet Cyrillic atau Yunani** untuk menyamarkan domain berbahaya.

---

## 3. Deteksi Punycode

Mendeteksi domain yang dienkode menggunakan **Punycode (`xn--`)**, yang digunakan untuk merepresentasikan domain Unicode dalam format ASCII.

Contoh:

```
xn--pple-43d.com → аpple.com
```

Walaupun Punycode digunakan secara sah untuk domain internasional, teknik ini sering disalahgunakan dalam serangan phishing untuk menyembunyikan karakter Unicode yang menipu.

---

## 4. Analisis Kemiripan Brand

Sistem menggunakan **algoritma kemiripan Levenshtein** untuk membandingkan domain yang mencurigakan dengan domain dari brand terkenal.

Contoh:

```
outloooook.com → outlook.com
```

Hal ini membantu mendeteksi domain yang mencoba meniru layanan populer.

---

## 5. Sistem Penilaian Risiko (Risk Score)

Setiap URL yang dianalisis akan mendapatkan **risk score (0–100)** berdasarkan anomali yang ditemukan.

Faktor risiko meliputi:

* Domain Punycode
* Karakter Unicode
* Karakter Homograph
* Kemiripan dengan brand
* Pola domain mencurigakan

Semakin tinggi skornya, semakin besar kemungkinan domain tersebut berbahaya.

---

# 🧠 Cara Kerja

1. Pengguna memasukkan URL.
2. Backend mem-parsing nama domain.
3. Sistem melakukan pemeriksaan terhadap:
    * Encoding Punycode
    * Karakter Unicode
    * Karakter Homograph
    * Kemiripan dengan brand
4. Sistem menghitung **risk score**.
5. Hasil analisis ditampilkan di frontend dengan indikator yang terdeteksi.

---

# 🔎 Interpretasi Hasil

## ✅ Link Aman

Sebuah link dianggap **aman** apabila:

* Tidak terdapat manipulasi Unicode
* Tidak ada karakter homograph
* Tidak ada indikasi peniruan brand
* Risk score rendah

Contoh:

```
https://google.com

Risk Score: 0%
Status: Safe
```

---

## ⚠ Link Mencurigakan

Link dianggap **mencurigakan** jika sistem menemukan anomali seperti:

* Domain Punycode
* Karakter Unicode
* Karakter Homograph
* Kemiripan dengan brand

Contoh:

```
https://g00gle.com

Similarity: 83% → google.com
Risk Score: 40%

Status: Suspicious Domain
```

---

## 🚨 Link Berisiko Tinggi

Domain yang memiliki beberapa indikator serangan dapat memperoleh risk score tinggi.

Contoh:

```
https://xn--pple-43d.com

Decoded Domain: аpple.com
Unicode Characters: Detected
Homograph Characters: Detected

Risk Score: 85%

Status: High Risk / Potential Phishing
```

---

# 🛠 Tech Stack

### Frontend

* React
* TailwindCSS
* Axios
* Lucide Icons
* Vite

### Backend

* Node.js
* Vercel Serverless Functions

### Algoritma

* Levenshtein Distance (Deteksi Kemiripan Domain)

---

# ⚙️ Instalasi

## 1. Clone Repository

```
git clone https://github.com/ilhamfajarandika/link-guardian.git
cd link-guardian
```

---

## 2. Install Dependencies

```
npm install
```

Frontend:

```
cd client
npm install
```

---

## 3. Menjalankan Aplikasi

Jalankan frontend:

```
cd client
npm run dev
```

API dijalankan menggunakan **serverless function pada folder `/api`**.

---

# 🧪 Contoh URL Pengujian

## Domain Aman

```
https://google.com
https://github.com
https://wikipedia.org
```

---

## Typosquatting

```
https://g00gle.com
https://faceb00k.com
https://paypaI.com
```

---

## Domain Bergaya Phishing

```
https://paypal-account-verification.com
https://google-login-security.com
https://facebook-security-alert.com
```

---

## Unicode Homograph

```
https://аррӏе.com
https://gοοgle.com
```

---

## Punycode

```
https://xn--pple-43d.com
```

---

# 📊 Contoh Output

```
Detected Domain: g00gle.com

⚠ Domain terlihat mirip dengan google.com
Similarity: 83%

Risk Score: 40%
Status: Suspicious Domain
```

---

# 🎯 Tujuan

Proyek ini dibuat sebagai **proyek pembelajaran dalam keamanan web dan deteksi phishing**, yang menunjukkan bagaimana penyerang memanipulasi nama domain untuk menipu pengguna.

Alat ini ditujukan **untuk tujuan edukasi dan penelitian**, dan tidak dimaksudkan sebagai pengganti sistem deteksi phishing profesional.
