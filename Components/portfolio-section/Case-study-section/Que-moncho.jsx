import Image from "next/image";
import invastarr from "../../../public/images/invastarr_1.webp"
import invastar from "../../../public/images/invastarr_1.webp"

function Que_moncho() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">INVESTARR</h2>
          <p className="text-[#aaaaaa] mb-6">
            The Investarr platform connects innovative idea creators with potential investors.
            It helps people showcase their ideas to the world and offers investors the opportunity
            to explore and support them. By facilitating these connections, Investarr aims to
            foster innovation and drive investment growth worldwide.
          </p>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#eaeaea] mb-1">INDUSTRY</h3>
            <p className="text-[#aaaaaa]">Finance and Investment</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#eaeaea] mb-1">TECHNOLOGY</h3>
            <p className="text-[#aaaaaa]">Web</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#eaeaea] mb-1">TOOLS & TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {["Figma", "React js", "Django", "Firebase", "MySQL"].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-[#1a1a1a] rounded-full text-[#aaaaaa] border border-[#333]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#eaeaea] mb-1">SERVICES PROVIDED</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Product Design",
                "Web application development",
                "Testing/QA",
                "Cloud architecture",
                "CI/CD",
                "Agile development",
                "MVP",
              ].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-[#1a1a1a] rounded-full text-[#aaaaaa] border border-[#333]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold text-[#eaeaea] mb-1">LOCATION</h3>
            <p className="text-[#aaaaaa]">Worldwide</p>
          </div>
          
          <div>
            <h3 className="font-bold text-[#eaeaea] mb-1">AVAILABLE AT</h3>
            <a href="#" className="text-white hover:underline">
              Investarr
            </a>
          </div>
        </div>

        {/* Right Side with Images */}
        <div className="space-y-6">
          <div className="w-full">
            <Image
              src={invastarr}
              alt="Investarr desktop"
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
          
          <div className="w-full">
            <Image
              src={invastar}
              alt="Investarr laptop"
              className="w-full rounded-lg object-cover"
            />
          </div>
          
          <div className="w-full">
     
          </div>
          
          {/* If you have a fourth image, add it here */}
          <div className="w-full">
            <Image
              src={invastarr}
              alt="Investarr additional view"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="w-full">
            <Image
              src={invastarr}
              alt="Investarr additional view"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Que_moncho;