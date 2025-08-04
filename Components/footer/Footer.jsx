import Image from "next/image";
import logo from "../../public/images/STEGANOX.png"

 function Footer() {
  const socialIcons = [
    { name: "Google", icon: "G" },
    { name: "LinkedIn", icon: "in" },
    { name: "Facebook", icon: "f" },
    { name: "Twitter", icon: "𝕏" },
    { name: "Instagram", icon: "📷" }
  ];

  return (
    <div className="bg-black">
      {/* Footer */}
      <div className="border-t border-gray-800 px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6 sm:space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
<Image
  src={logo}
  alt="STEGANOX Logo"
  width={100}
  height={60}
  className="mr-2" // margin works fine
/>

  

</div>

            {/* Copyright */}
            <div className="text-[#aaaaaa] text-xs sm:text-sm text-center md:text-left order-3 md:order-2">
              © 2025 STEGANOX. All rights reserved.
            </div>

            {/* Social Icons and Button */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 order-2 md:order-3">
              {/* Social Icons */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                {socialIcons.map((social, index) => (
                  <div
                    key={index}
                    className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800  rounded-sm flex items-center justify-center transition-colors duration-300 cursor-pointer group"
                  >
                    <span className="text-white group-hover:text-black text-xs sm:text-sm font-bold">
                      {social.icon}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Schedule a meeting button */}
              <button className="w-full sm:w-auto bg-white cursor-pointer hover:bg-white text-black font-semibold px-3 sm:px-4 py-2 rounded-md transition-colors duration-300 text-xs sm:text-sm">
                Schedule a meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;