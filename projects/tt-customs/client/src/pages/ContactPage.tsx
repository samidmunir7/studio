import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Get in Touch
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Have a question or want to book a service? Reach out—we’d love to hear
          from you.
        </p>
      </section>

      {/* Contact Form + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">Contact Info</h3>
            <ul className="text-zinc-400 text-sm space-y-2">
              <li>
                <strong>📞 Phone:</strong> +1 (234) 567-890
              </li>
              <li>
                <strong>📧 Email:</strong> info@ttcustoms.com
              </li>
              <li>
                <strong>📍 Location:</strong> Los Angeles, CA
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900 p-3 rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Los Angeles, CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border-0 rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
