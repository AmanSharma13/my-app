import React from 'react'

const Navbar = () => {
  return (
    <div>
        <header className="body-font">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-indigo-300">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">

        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl font-bold">Chhaya Studio</span>
    </a>
    <nav className=" ml-3 flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Item 1</a>
      <a className="mr-5 hover:text-gray-900">Item 2</a>
      <a className="mr-5 hover:text-gray-900">Item 3</a>
      <a className="mr-5 hover:text-gray-900">Item 4</a>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Navbar