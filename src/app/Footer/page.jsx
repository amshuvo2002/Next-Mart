
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
       
          <div className="md:col-span-5">
            <h3 className="text-3xl font-bold text-white mb-4">NextMart</h3>
            <p className="text-gray-400 mb-6 max-w-md text-base leading-relaxed">
              A modern full-stack product management application built with Next.js 15/16  
              and Express.js — perfect for learning, assignments, and portfolio projects.
            </p>
            <p className="text-sm text-gray-500">
              Educational Project • {currentYear}
            </p>
          </div>

        
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/items" 
                  className="hover:text-white transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/login" 
                  className="hover:text-white transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
             
            </ul>
          </div>

        
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
              Built With
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Next.js 15/16",
                "App Router",
                "Tailwind CSS",
                "Express.js",
                "TypeScript",
                "REST API"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-6">
              <a 
                href="https://github.com/amshuvo2002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/md-altaf-mahmud/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-800 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          <p>
            This is an educational project created for learning purposes • 
            Not intended for commercial use
          </p>
          <p className="mt-2">
            Developed by MD. Altaf • Dhaka, Bangladesh • {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}