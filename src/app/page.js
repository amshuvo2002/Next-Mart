
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
   

      <main className="">

    
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-indigo-700 via-indigo-600 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,white_0%,transparent_60%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Manage Products
              <span className="block mt-3 text-indigo-200 text-5xl md:text-6xl">
                The Modern Way
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-indigo-100/90 font-light">
              Simple, fast and secure product management application built with Next.js 15/16 & Express
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/items"
                className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold text-lg hover:bg-indigo-50 transform hover:scale-105 transition-all shadow-xl"
              >
                View All Products →
              </Link>
              <Link
                href="/login"
                className="px-8 py-4 border-2 border-white/60 text-white rounded-xl font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Login to Manage
              </Link>
            </div>
          </div>
        </section>

   
        <section className="py-24  md:py-32 bg-gray-100">
          <div className="max-w-7xl  mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Core Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Lightning Fast",
                  desc: "Next.js App Router + Server Components for best performance",
                },
                {
                  title: "Secure Authentication",
                  desc: "Protected routes & cookie-based session management",
                },
                {
                  title: "Real Backend",
                  desc: "Full Express.js REST API integration",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-indigo-700">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

    
        <section className="py-24 bg-blue-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              How It Works
            </h2>

            <div className="grid md:grid-cols-4 gap-6 md:gap-8">
              {[
                "Login / Register",
                "Browse Products",
                "View Details",
                "Add & Manage (Logged in)",
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-indigo-400 transition-all group text-center"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {i + 1}
                  </div>
                  <p className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

     
        <section className="py-24 bg-gray-100 ">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
              Modern Tech Stack
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "Next.js 15/16",
                "App Router",
                "Tailwind CSS",
                "Express.js",
                "TypeScript",
                "REST API",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-7 py-3.5 bg-indigo-50 text-indigo-700 rounded-full font-medium border border-indigo-200 hover:scale-105 transition-transform text-base md:text-lg"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

      
        <section className="py-24 bg-blue-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
              Why NextMart?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Perfect for learning modern full-stack development, university assignments, 
              personal portfolios and understanding real-world Next.js + Express workflows.
            </p>
          </div>
        </section>

      
        <section className="py-24 bg-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
              Built For Developers
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <p className="text-gray-600 italic mb-6 text-lg">
                  "Clean code structure and great learning material!"
                </p>
                <p className="font-semibold text-indigo-700">— Student Developer</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <p className="text-gray-600 italic mb-6 text-lg">
                  "Perfect starter template for full-stack projects"
                </p>
                <p className="font-semibold text-indigo-700">— Junior Full-Stack</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <p className="text-gray-600 italic mb-6 text-lg">
                  "Modern stack + good practices = 10/10"
                </p>
                <p className="font-semibold text-indigo-700">— Portfolio Builder</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-32 bg-gradient-to-br from-indigo-500 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[conic-gradient(at_top_right,_white,_transparent)]"></div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Start Managing Products?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-indigo-100 max-w-3xl mx-auto">
              Login now and experience modern product management flow
            </p>

            <Link
              href="/login"
              className="inline-block px-10 py-5 text-xl md:text-2xl font-bold bg-white text-indigo-700 rounded-full shadow-2xl hover:bg-indigo-50 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Login & Get Started →
            </Link>
          </div>
        </section>

      </main>


    </div>
  );
}