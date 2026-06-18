import React from 'react'

export default function ContactPage() {
  return (
    <section className="mx-auto min-h-[100vh] max-w-7xl px-6 py-10 md:px-10 lg:px-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Let's Talk About Your Project
        </h1>
        <p className="mt-4 text-base leading-8 text-gray-700 md:text-lg">
          Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            <p className="mt-3 text-gray-600">
              Feel free to reach out to us with any questions or inquiries.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">info@company.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Address</h3>
              <p className="text-gray-600">123 Main Street, City, State 12345</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500"
              placeholder="Your message"
            />
          </div>

          <button className="w-full rounded-md bg-blue-600 py-2 px-4 text-white font-medium hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us on the Map</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 shadow-md">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.04,51.47,-0.03,51.48&layer=mapnik&marker=51.5,-0.04"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
