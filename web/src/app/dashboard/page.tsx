'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function UserDashboardPage() {
  const companies = ['Company A', 'Company B', 'Company C']
  const balance = 12500 // Жишээ үлдэгдэл

  // Жишээ тайлан мэдээлэл
  const taxReports = [
    { company: 'Company A', period: '2025-07', name: 'Татварын тайлан', status: 'Илгээгдсэн' },
    { company: 'Company A', period: '2025-06', name: 'Татварын тайлан', status: 'Идэвхтэй' },
    { company: 'Company B', period: '2025-07', name: 'Татварын тайлан', status: 'Илгээгдсэн' },
    { company: 'Company C', period: '2025-05', name: 'Татварын тайлан', status: 'Илгээгдсэн' },
  ]

  return (
    <>
      <Header />

      <main
        className="pt-20 pb-16 min-h-[100vh] bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        <div className="max-w-6xl mx-auto p-8 space-y-8">
          <h1 className="text-3xl font-bold text-center mb-8">Хэрэглэгчийн хяналтын самбар</h1>

          {/* 2 багана: Дансны үлдэгдэл + Бүртгэлтэй компаниуд */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Дансны үлдэгдэл */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <p className="text-lg font-medium mb-2">Дансны үлдэгдэл</p>
              <p className="text-4xl font-bold mb-4">{balance} ₮</p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl font-semibold transition">
                Дахин цэнэглэх
              </button>
            </div>

            {/* Бүртгэлтэй компаниуд */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Бүртгэлтэй компаниуд</h2>
              <ul className="list-disc list-inside space-y-2">
                {companies.map((company, idx) => (
                  <li key={idx}>{company}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Бүртгэлтэй татварын тайлангууд */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Бүртгэлтэй татварын тайлангууд</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-white/30">Компани</th>
                    <th className="px-4 py-2 border-b border-white/30">Тайлант үе</th>
                    <th className="px-4 py-2 border-b border-white/30">Тайлан</th>
                    <th className="px-4 py-2 border-b border-white/30">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {taxReports.map((report, idx) => (
                    <tr key={idx} className="hover:bg-white/10 transition">
                      <td className="px-4 py-2">{report.company}</td>
                      <td className="px-4 py-2">{report.period}</td>
                      <td className="px-4 py-2">{report.name}</td>
                      <td
                        className={`px-4 py-2 font-semibold ${
                          report.status === 'Илгээгдсэн'
                            ? 'text-blue-400'
                            : report.status === 'Идэвхтэй'
                            ? 'text-green-400'
                            : 'text-gray-400'
                        }`}
                      >
                        {report.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
