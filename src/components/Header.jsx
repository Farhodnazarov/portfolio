function Header() {
  return (
    <div className="px-8 pt-16 pb-5 text-center flex items-center flex-col gap-5 sm:gap-[80px] sm:flex-row md:gap-[120px] md:flex-row lg:gap-[350px] lg:flex-row lg:pl-20">
      <img
        src="/myPhoto.png"
        alt="my photo"
        className="w-60 h-60 rounded-md shadow-white"
      />
      <div>
        <h2 className="text-4xl tracking-[3px] font-bold mb-4 sm:text-5xl sm:mb-10 md:text-5xl md:mb-10 lg:text-5xl lg:mb-10">
          MY PORTFOLIO
        </h2>
        <p className="text-xl shadow-white-nav font-semibold lg:text-4xl">
          Nazarov Farxod Shavkatovich
        </p>
      </div>
    </div>
  );
}

export default Header;
