import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold mb-5 lg:mb-20 tracking-[4px] lg:text-5xl">
        Contact
      </h2>
      <div className="flex flex-col mb-10 gap-4 md:mb-16 justify-center lg:mb-24">
        <a
          href="tel:+99893 646-67-66"
          className="md:text-xl lg:text-2xl cursor-pointer hover:underline hover:text-[#0079FF]"
        >
          Phone number: +99893 646-67-66
        </a>
        <a
          href="mailto:nazarovfarhod002@gmail.com"
          className="md:text-xl lg:text-2xl cursor-pointer hover:underline hover:text-[#0079FF]"
        >
          Email: nazarovfarhod002@gmail.com
        </a>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <a target="_blank" href="https://github.com/Nazarovfarhod">
          <FaGithub className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </a>
        <a target="_blank" href="https://t.me/nazarov_002">
          <FaTelegram className="w-10 h-10 text-blue-400 md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/farhod-nazarov-334510326/"
        >
          <FaLinkedin className="w-10 h-10 text-[#007AB9] md:w-12 md:h-12 lg:w-16 lg:h-16" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
