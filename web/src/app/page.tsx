"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // The SVG animation runs continuously via SMIL
      }, []);

      return (
        
        <main className="relative bg-gray-50 text-gray-900">

          {/* Hero Section */}
          <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
            <div className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl max-w-3xl animate-fadeIn animate-fadeDown delay-2">
              <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                X тайлангаа март,
                <br />
                <span className="text-blue-700">X-SENDER-ийг ажиллуул</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Таны өмнөөс X тайланг хуулийн хугацаанд автоматаар илгээнэ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61578621497518"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow"
                >
                  Facebook Page
                </a>
                <a
                  href="/login"
                  className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg"
                >
                  Системд нэвтрэх
                </a>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute top-0 right-0 m-8 opacity-20 animate-float">
              <svg width="80" height="80" fill="#60a5fa" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>
          </section>


      {/* About Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-md border border-gray-200 animate-fadeDown delay-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            X-SENDER гэж юу вэ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            <span className="font-semibold text-blue-700">X-SENDER</span> нь Монголын ААН-уудын Х тайлан – тухайн хугацаанд орлого, үйл ажиллагаа байхгүй гэдгийг мэдүүлдэг тайланг – <span className="font-semibold">албан ёсны eTax API</span> ашиглан автоматаар, алдаагүй, хугацаанд нь илгээх платформ юм.
            Энэхүү систем нь тайлан илгээх процессыг бүрэн автоматжуулж, <span className="text-green-600 font-medium">гар ажиллагаа, марталт, алдааг арилгах</span> зорилготой. Messenger chatbot + Web App хосолсон интерфейсээр хэрэглэгчид энгийн, хурдан, найдвартай үйлчилгээ авах боломжтой.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-14">Хэрхэн ажилладаг вэ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Нэвтрэх",
                desc: "Messenger чатботоор өөрийн eTax аккаунтаар нэг удаа нэвтэрнэ.",
                icon: "🔑",
              },
              {
                title: "Компанийн сонголт",
                desc: "Хэрэв таны аккаунт олон компанитай бол аль компанийг автоматаар удирдуулахыг сонгоно.",
                icon: "🏢",
              },
              {
                title: "Тайлангийн жагсаалт",
                desc: "Систем тухайн компанийн тайлангийн төлөвийг автоматаар шалгаж хянаж байдаг.",
                icon: "📋",
              },
              {
                title: "Автомат илгээх",
                desc: "Хуулийн хугацаанд систем таны өмнөөс тайланг автоматаар илгээнэ.",
                icon: "🚀",
              },
              {
                title: "Мэдэгдэл",
                desc: "Тайлан амжилттай илгээгдсэнийг Facebook Messenger-р шууд мэдэгдэнэ.",
                icon: "📩",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-gray-50 hover:bg-blue-50 transition rounded-xl p-6 shadow-md border border-gray-200 text-left">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Features Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Хэрхэн ажилладаг вэ?</h2>

          <div className="space-y-10">
            {[
              {
                title: "Нэвтрэх",
                desc: "Messenger чатботоор өөрийн eTax аккаунтаар нэг удаа нэвтэрнэ.",
              },
              {
                title: "Компанийн сонголт",
                desc: "Хэрэв таны аккаунт олон компанитай бол аль компанийг автоматаар удирдуулахыг сонгоно.",
              },
              {
                title: "Тайлангийн жагсаалт",
                desc: "Систем тухайн компанийн тайлангийн төлөвийг автоматаар шалгаж хянаж байдаг.",
              },
              {
                title: "Автомат илгээх",
                desc: "Хуулийн хугацаанд систем таны өмнөөс тайланг автоматаар илгээнэ.",
              },
              {
                title: "Мэдэгдэл",
                desc: "Тайлан амжилттай илгээгдсэнийг Facebook Messenger-р шууд мэдэгдэнэ.",
              },
            ].map((step, idx) => (
              <div key={idx} className="relative pl-14 py-6 border-l-4 border-blue-500 bg-white rounded-xl shadow hover:shadow-md transition group">
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg shadow-md group-hover:scale-105 transition">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Үнэ төлбөр</h2>
          <p className="text-gray-600 text-lg mb-12">X тайланг алдаагүй, автоматаар илгээх ухаалаг үйлчилгээг хямд үнээр ашиглаарай.</p>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 px-8 py-10 text-left max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">5,000₮ / тайлан</h3>
            <ul className="space-y-4 text-base text-gray-800">
              <li><span className="text-green-600 font-semibold">✅ Эхний 3 тайлан үнэгүй:</span> Шинээр бүртгүүлсэн хэрэглэгчид автоматаар нээгдэнэ.</li>
              <li><span className="text-blue-600 font-semibold">💳 Цэнэглэх дүн:</span> Хамгийн багадаа <strong>50,000₮</strong> буюу 10 тайлангийн эрхээр QPay-р цэнэглэнэ.</li>
              <li><span className="text-purple-600 font-semibold">📊 Уян хатан зарцуулалт:</span> Тайлан бүрт 5,000₮ хасагдаж, үлдэгдэл таны кредит хэлбэрээр хадгалагдана.</li>
            </ul>

            <div className="mt-8">
              <a
                href="/payment"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              >
                QPay-ээр цэнэглэх
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Аюулгүй байдал</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Нууц үг хадгалахгүй",
                desc: "Хэрэглэгчийн eTax нууц үгийг X-SENDER огт хадгалдаггүй. Токеныг түр хугацаанд шифрлэж ашигладаг.",
                icon: "🔐",
              },
              {
                title: "AES-256 шифрлэлт",
                desc: "etax нэр, ent_id зэрэг эмзэг өгөгдлийг PostgreSQL дээр AES-256 алгоритмаар шифрлэж хадгалдаг.",
                icon: "🛡️",
              },
              {
                title: "Нэвтрэлтийн хамгаалалт",
                desc: "Буруу оролдлогыг хязгаарлах rate limiting, веб нэвтрэлт дээр 2FA болон reCAPTCHA нэмэхийг төлөвлөсөн.",
                icon: "🚫",
              },
              {
                title: "Нууцлалын шалгалт",
                desc: "Системд эмзэг байдлын сканнер, penetration test хийн баталгаажуулдаг. Privacy Policy-г хэрэгжүүлсэн.",
                icon: "✅",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Технологийн шийдэл</h2>
            <p className="text-lg text-gray-700 mb-12">
              X-SENDER нь алдаа гаргахгүй, тасралтгүй ажиллагааг хангахын тулд найдвартай технологиудыг ашигладаг бөгөөд
              <span className="text-blue-700 font-medium"> eTax системтэй албан ёсны API-р шууд холбогдон</span> таны X тайланг хугацаанд нь найдвартай илгээдэг.
            </p>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">⚙️ Автомат ажиллагаа</h3>
              <p className="text-gray-800">Бүх тайлан илгээх процесс автоматаар, таны оролцоогүйгээр гүйцэтгэгддэг.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">☁️ Cloud дэд бүтэц</h3>
              <p className="text-gray-800">Railway клауд дээр байршуулсан, тасралтгүй ажиллагаатай сервер орчин.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🧠 Сүүлийн үеийн фреймворк</h3>
              <p className="text-gray-800">Node.js, NestJS, Next.js зэрэг enterprise түвшний технологиудыг ашигласан.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🔒 Хамгаалалт, найдвартай байдал</h3>
              <p className="text-gray-800">Нууцлал, шифрлэлт, CI/CD, алдааны лог зэрэг DevOps шийдлүүд бүрэн хэрэгжсэн.</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Next.js", "NestJS", "Node.js", "PostgreSQL", "Docker", "Railway", "ManyChat", "QPay API", "eTax API"].map((tech, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>



    </main>
  );
}
