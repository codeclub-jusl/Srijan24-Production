import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="bg-[#1d1148]">
  <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-4 lg:gap-12 lg:pt-12">
      <div className="col-span-full lg:col-span-1">
        {/* logos */}
        <div className="mb-4 lg:-mt-2">
          <a href="/" className="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
           <img src='./assets/Vector.png' alt='' height={60} width={60}/>
           <img src='./assets/julogo.png' alt='' height={75} width={75}/>
          {/* <img src='./assets/Srijan logo.png' alt='' height={110} width={110}/> */}
          </a>
        </div>
        {/* logos */}
        {/* <!-- social - start --> */}
        <div className="flex gap-4">
          <a href="https://www.instagram.com/srijan_ju/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="https://www.facebook.com/jusrijan" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <svg  className="h-5 w-5" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clipRule="evenodd"/>
          </svg>
          </a>

          <a href="https://www.linkedin.com/company/srijan-ju/" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        {/* <!-- social - end --> */}
      </div>

      {/* <!-- nav - start --> */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Explore</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 transition duration-100  hover:text-cyan-500 active:text-sky-600">About</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100  hover:text-cyan-500 active:text-sky-600">Contact</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100  hover:text-cyan-500 active:text-sky-600">Ambassadors</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Links</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">The Team</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Brochure</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Sponsorship</a>
          </div>
        </nav>
      </div>
      {/* <!-- nav - end --> */}

      {/* <!-- nav - start --> */}
      <div>
        <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>

        <nav className="flex flex-col gap-4">
          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-cyan-500 active:text-sky-600">Locations</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-cyan-500 active:text-sky-600">Merchandise</a>
          </div>

          <div>
            <a href="#" className="text-gray-400 transition duration-100 hover:text-cyan-500 active:text-sky-600">JU</a>
          </div>
        </nav>
      </div>
    </div>

    <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2024 - F.E.T.S.U. Presents Srijan, Jadavpur University, Kolkata. All rights reserved.</div>
  </footer>
</div>
        </>
    )
}

export default Footer
