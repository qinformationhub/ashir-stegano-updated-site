// app/page.tsx (Next.js 13+ App Router)
import Image from "next/image";
import findsurrogate from "../../../public/images/find_surrogate_1.webp"
 function InvestarrSection() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side with Two Images */}
        <div className="space-y-6">
          <Image
            src={findsurrogate}
            alt="Investarr desktop"
            className="w-full rounded-lg object-cover"
          />
          <Image
            src={findsurrogate}
            alt="Investarr laptop"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Right Side Content */}
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
      </div>
    </section>
  );
}


export default InvestarrSection;