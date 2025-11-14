import React from 'react';

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h2 className="font-serif text-3xl text-[#1A1A1A]">Get in touch</h2>
      <p className="mt-3 text-[#1A1A1A]/85">Interested in collaborating or want a deeper walkthrough of any case study? Send an email and I’ll respond within 24–48 hours.</p>

      <div className="mt-6 rounded-xl bg-white border border-[#BDBDBD]/60 p-6">
        <form action="mailto:hello@example.com" method="post" encType="text/plain" className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm text-[#1A1A1A]/80">Your name</span>
            <input required name="name" className="border border-[#BDBDBD] rounded px-3 py-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-[#1A1A1A]/80">Email</span>
            <input required type="email" name="email" className="border border-[#BDBDBD] rounded px-3 py-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-[#1A1A1A]/80">Message</span>
            <textarea required name="message" rows="4" className="border border-[#BDBDBD] rounded px-3 py-2 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]"></textarea>
          </label>
          <button className="mt-2 bg-[#004D40] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#003831] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] w-fit">Send</button>
        </form>
      </div>
    </section>
  );
}
