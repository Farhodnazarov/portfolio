function About() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-5">About Me !</h2>
      <div className="flex flex-col px-5 md:gap-16 md:flex-row md:justify-center md:items-center lg:gap-48 lg:flex-row justify-center items-center">
        <p className="max-w-[800px] italic text-[12px] mb-5 md:text-[16px] lg:text-lg">
          I'm an enthusiastic frontend developer who turns ideas into reality
          with a focus on user experience and design. With a background in HTML,
          CSS, and JavaScript, I create responsive and dynamic web interfaces
          using modern frameworks like React and Next.js. My approach blends
          creativity with technical skills to build applications that not only
          function seamlessly but also captivate users. I am always eager to
          embrace new technologies and techniques to enhance my craft.
        </p>
        <div className="border shadow-white bg-[#222] border-spacing-2 px-20 h-60 flex justify-center items-center italic rounded-md">
          <p className="w-24"> My certification will be added soon !!!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
