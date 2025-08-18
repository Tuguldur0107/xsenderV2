# X-SENDER

📌 **X тайланг автоматаар илгээх Facebook Messenger бот**

X-SENDER бол Монголын ААН-уудын “Х тайлан” илгээх процессыг бүрэн автоматжуулсан систем юм. Хэрэглэгч Facebook Messenger-ээр мэдээллээ илгээснээр, тайлан нь etax.mta.mn-д Puppeteer ашиглан автоматаар илгээгддэг.

---

🎯 **Үндсэн үйлдлийн логик**
X-SENDER нь дараах үндсэн үйлдлүүдийг дэмжинэ:

🧑‍💼 Хэрэглэгч бүртгүүлэх, мэдээллээ өгөх (etax login, тайлан илгээх)
🏢 Компаниудаа жагсаалтаар харах
📄 Компани тус бүрийн илгээх боломжтой тайлангийн жагсаалтыг харах
✅ Аль тайланг X болгохоо хэрэглэгч сонгох
🗓 Тайлан бүрийн хуулийн хугацааг (due date) дуудаж мэдэх
🤖 Сонгосон тайланг bot автоматаар илгээх
🧩 Олон компанийн тайланг зэрэг илгээх боломжтой

---

## 🚀 Үндсэн боломжууд

- 💬 Facebook Messenger бот
- 🤖 Puppeteer automation (etax.mta.mn)
- 💳 QPay төлбөрийн систем
- 🔒 AES-256 шифрлэл, security токен
- 📊 Тайлангийн амжилт/алдааны лог
- 🛠 Admin panel (internal use)
- 🧾 Egeree.mn гэрээ (сонголттой)

---

## ⚙️ Ашиглаж буй технологи

| Layer         | Stack                             |
|---------------|------------------------------------|
| Frontend      | Tailwind CSS (Landing, Admin)     |
| Bot           | Node.js (Express) + Messenger API |
| Automation    | Puppeteer (Headless Chromium)     |
| Backend API   | Node.js + Express                 |
| Database      | PostgreSQL (Railway)              |
| Payment       | QPay API                          |
| Hosting       | Railway                           |

---

## 🧪 Суулгах заавар (Local Dev)

```bash
git clone https://github.com/Tuguldur0107/xsender.git
cd xsender
cp .env.example .env

# Dependencies суулгах
npm install

# DB миграци
npx prisma migrate dev

# Бот болон backend-г эхлүүлэх
npm run dev
