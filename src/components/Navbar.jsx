function Navbar() {
  return (
    <div className="navbar flex justify-between pt-5 mb-10 bg-[#1b1a1a] rounded-b-3xl shadow-white-nav text-white items-center px-4 lg:px-12">
      <div className="navbar-start flex justify-between items-center w-full lg:w-auto">
        <img
          src="/dark-mode-fn.png"
          className="btn btn-ghost w-32 h-14"
        />

        <div className="dropdown lg:hidden relative">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white text-lg font-medium bg-[#222] rounded-box z-[1] mt-3 w-40 p-2 shadow space-y-2 absolute left-0 transform translate-x-0"
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium space-x-6 pr-12">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
