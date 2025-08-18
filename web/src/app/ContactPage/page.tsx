'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />

      <main
        className="pt-20 pb-16 min-h-[100vh] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="w-full max-w-lg p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Холбоо барих</h1>

          <p className="mb-4 text-center text-white/80">
            Бидэнд хүсэлт, санал, асуулт илгээх боломжтой.
          </p>

          {/* Холбоо барих мэдээлэл */}
          <div className="mb-6 space-y-2 text-center text-white/80">
            <p>
              📧 Имэйл: <span className="font-semibold">support@xsender.mn</span>
            </p>
            <p>
              📞 Утас: <span className="font-semibold">+976 8810 8766</span>
            </p>
            <p>
              🏢 Хаяг: <span className="font-semibold">Улаанбаатар, Монгол</span>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Таны нэр"
              className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20"
            />
            <input
              type="email"
              placeholder="Имэйл хаяг"
              className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20"
            />
            <textarea
              placeholder="Зурвас"
              rows={5}
              className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600/80 hover:bg-blue-700/90 py-3 px-6 rounded-xl font-semibold transition"
            >
              Илгээх
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
