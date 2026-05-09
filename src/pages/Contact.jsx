function Contact() {
  return (
    <>
      {/* HERO SECTION */}
    

      {/* CONTACT SECTION */}
      <section className="py-28 bg-[#f8f5f0] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-gray-500 text-sm mb-4">
              Get In Touch
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Premium Textile <br /> Manufacturer
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Contact us for wholesale textile inquiries,
              premium fabric collections and bulk manufacturing orders.
            </p>

            {/* INFO BOXES */}
            <div className="space-y-6 mt-12">

              <div className="bg-white p-8 rounded-[30px] shadow-sm border">

                <p className="text-gray-500 uppercase tracking-[4px] text-sm mb-3">
                  Phone Number
                </p>

                <h3 className="text-2xl font-bold">
                  +91 98765 43210
                </h3>

              </div>

              <div className="bg-white p-8 rounded-[30px] shadow-sm border">

                <p className="text-gray-500 uppercase tracking-[4px] text-sm mb-3">
                  Email Address
                </p>

                <h3 className="text-2xl font-bold break-all">
                  textile@example.com
                </h3>

              </div>

              <div className="bg-white p-8 rounded-[30px] shadow-sm border">

                <p className="text-gray-500 uppercase tracking-[4px] text-sm mb-3">
                  Location
                </p>

                <h3 className="text-2xl font-bold">
                  Surat, Gujarat, India
                </h3>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl">

            <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-4">
              Send Inquiry
            </p>

            <h3 className="text-4xl font-bold mb-10">
              Contact Form
            </h3>

            <form className="space-y-6">

              {/* NAME */}
              <div>

                <label className="text-sm uppercase tracking-[3px] text-gray-500">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-3 border border-gray-200 h-16 px-6 rounded-2xl outline-none focus:border-black duration-300"
                />

              </div>

              {/* PHONE */}
              <div>

                <label className="text-sm uppercase tracking-[3px] text-gray-500">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full mt-3 border border-gray-200 h-16 px-6 rounded-2xl outline-none focus:border-black duration-300"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-sm uppercase tracking-[3px] text-gray-500">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full mt-3 border border-gray-200 h-16 px-6 rounded-2xl outline-none focus:border-black duration-300"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-sm uppercase tracking-[3px] text-gray-500">
                  Message
                </label>

                <textarea
                  placeholder="Write your inquiry..."
                  rows="6"
                  className="w-full mt-3 border border-gray-200 p-6 rounded-2xl outline-none focus:border-black duration-300 resize-none"
                />

              </div>

              {/* BUTTON */}
              <button className="w-full h-16 bg-black text-white rounded-2xl hover:bg-gray-800 duration-300 text-lg font-medium">
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

     
    </>
  );
}

export default Contact;