function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white relative overflow-hidden">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>

          <h2 className="text-3xl font-bold mb-6">
            Textile<span className="text-gray-400">.</span>
          </h2>

          <p className="text-gray-400 leading-7">
            Premium textile manufacturer providing luxury fabrics
            for fashion brands, boutiques and wholesalers.
          </p>

        </div>

        {/* LINKS */}
        <div>

          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white duration-300 cursor-pointer">About</li>
            <li className="hover:text-white duration-300 cursor-pointer">Collection</li>
            <li className="hover:text-white duration-300 cursor-pointer">Contact</li>
          </ul>

        </div>

        {/* CATEGORY */}
        <div>

          <h3 className="text-lg font-semibold mb-6">Fabric Types</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white duration-300 cursor-pointer">Cotton Fabric</li>
            <li className="hover:text-white duration-300 cursor-pointer">Silk Fabric</li>
            <li className="hover:text-white duration-300 cursor-pointer">Printed Fabric</li>
            <li className="hover:text-white duration-300 cursor-pointer">Designer Fabric</li>
          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-semibold mb-6">Contact</h3>

          <ul className="space-y-3 text-gray-400">
            <li>📍 Surat, Gujarat</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 textile@example.com</li>
          </ul>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800"></div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-gray-500 text-sm">
          © 2026 Textile. All Rights Reserved.
        </p>

        <div className="flex gap-6 text-gray-400 text-sm">

          <span className="hover:text-white duration-300 cursor-pointer">
            Privacy Policy
          </span>

          <span className="hover:text-white duration-300 cursor-pointer">
            Terms
          </span>

          <span className="hover:text-white duration-300 cursor-pointer">
            Support
          </span>

        </div>

      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full"></div>

    </footer>
  );
}

export default Footer;