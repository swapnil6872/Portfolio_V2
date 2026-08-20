import React, { useEffect, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    saveInfo: false,
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const [mapLocation, setMapLocation] = useState("Vadodara, India");

  /* LOCATION → MAP */

  useEffect(() => {
    if (!formData.location.trim()) {
      setMapLocation("Vadodara, India");
      return;
    }

    const timer = setTimeout(() => {
      setMapLocation(`${formData.location.trim()}, India`);
    }, 700);

    return () => clearTimeout(timer);
  }, [formData.location]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Validation */

    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name.",
      });
      return;
    }

    if (!formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your email.",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your phone number.",
      });
      return;
    }

    if (!formData.location.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your location.",
      });
      return;
    }

    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your message.",
      });
      return;
    }

    /* Start sending */

    setSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const data = new FormData();

      /* Web3Forms API Key */
      // data.append(
      //   "access_key",
      //   "Check website its a free api"
      // );

      data.append(
  "access_key",
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
);

      /* Form Data */
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("location", formData.location);
      data.append("message", formData.message);

      /* Email Subject */
      data.append(
        "subject",
        `New Portfolio Message from ${formData.name}`
      );

      /* Sender Name */
      data.append(
        "from_name",
        "Portfolio Contact Form"
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! Thank you for contacting me.",
        });

        /* Clear form */

        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
          saveInfo: false,
        });
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapLocation
  )}&output=embed`;

  return (
    <div className="relative overflow-hidden min-h-screen flex-1 bg-background text-text max-[764px]:mt-14">

     {/* Decorative background */}
<    div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      {/*HEADER*/}

      <section className="border-b border-zinc-700/50 px-5 py-10 sm:px-8 sm:py-14 lg:px-12">

        <div className="mx-auto max-w-6xl text-center">

          <h1 className="text-4xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">

            Interested in hiring me for your project or just want to say hi?
            You can fill in the contact form below or send me an email to

            <a
              href="mailto:your-gamitswapnil7@gmail.com"
              className="mx-1 text-accent hover:underline"
            >
              gamitswapnil7@gmail.com
            </a>

            . Want to get connected? Follow me on the social channels below.

          </p>

          {/* Social Icons */}

          <div className="mt-5 flex justify-center gap-2">

            <a
              href="https://github.com/swapnil6872"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-accent transition hover:border-accent hover:bg-accent hover:text-text"
            >
              <i className="ph ph-github-logo text-base"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/svapnilgamit"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-accent transition hover:border-accent hover:bg-accent hover:text-text"
            >
              <i className="ph ph-linkedin-logo text-base"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-accent transition hover:border-accent hover:bg-accent hover:text-text"
            >
              <i className="ph ph-instagram-logo text-base"></i>
            </a>

            <a
              href="mailto:your-gamitswapnil7@gmail.com"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-accent transition hover:border-accent hover:bg-accent hover:text-text"
            >
              <i className="ph ph-envelope text-base"></i>
            </a>

            <a
              href="tel:+911234567890"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-accent transition hover:border-accent hover:bg-accent hover:text-text"
            >
              <i className="ph ph-phone text-base"></i>
            </a>

          </div>

        </div>

      </section>


      {/* CONTACT DETAILS */}

      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">

        <div className="mb-8">

          <div className="flex items-center gap-3">

            <span className="h-10 w-[3px] bg-accent"></span>

            <h2 className="text-4xl font-bold tracking-tight">
              Contact Details
            </h2>

          </div>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Feel free to contact me for projects, collaborations,
            freelance work, or any other opportunities.
          </p>

        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

          {/* Phone */}

          <a
            href="tel:+911234567890"
            className="flex items-center gap-4 border-l-2 border-accent px-5 py-4 transition hover:bg-zinc-50"
          >

            <div className="flex h-12 w-12 items-center justify-center text-accent">
              <i className="ph ph-device-mobile text-3xl"></i>
            </div>

            <div>

              <h3 className="text-lg font-semibold">
                Phone
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                +91 0000000000
              </p>

            </div>

          </a>


          {/* Location */}

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              mapLocation
            )}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 border-l-2 border-accent px-5 py-4 transition hover:bg-zinc-50"
          >

            <div className="flex h-12 w-12 items-center justify-center text-accent">
              <i className="ph ph-map-pin text-3xl"></i>
            </div>

            <div>

              <h3 className="text-lg font-semibold">
                Location
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {mapLocation}
              </p>

            </div>

          </a>


          {/* Email */}

          <a
            href="mailto:your-gamitswapnil7@gmail.com"
            className="flex items-center gap-4 border-l-2 border-accent px-5 py-4 transition hover:bg-zinc-50"
          >

            <div className="flex h-12 w-12 items-center justify-center text-accent">
              <i className="ph ph-envelope-simple text-3xl"></i>
            </div>

            <div className="min-w-0">

              <h3 className="text-lg font-semibold">
                Email
              </h3>

              <p className="mt-1 truncate text-sm text-zinc-500">
                gamitswapnil7@gmail.com
              </p>

            </div>

          </a>

        </div>


        {/* MAP */}

        <div className="relative mt-10 h-[250px] w-full overflow-hidden border border-surface sm:h-[320px] lg:h-[400px]">

          <iframe
            title={`Map showing ${mapLocation}`}
            src={mapUrl}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="absolute left-3 top-3 rounded-md bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-md">

            <i className="ph ph-map-pin mr-1 text-accent"></i>

            {mapLocation}

          </div>

        </div>

      </section>


      {/* GET IN TOUCH*/}

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 lg:px-12">

        <div className="mb-7">

          <div className="flex items-center gap-3">

            <span className="h-10 w-[3px] bg-accent"></span>

            <h2 className="text-4xl font-bold tracking-tight">
              Get In Touch
            </h2>

          </div>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
            Have a project in mind or want to work together?
            Send me a message and I'll get back to you.
          </p>

        </div>


        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-zinc-700/50 bg-background p-5 sm:p-8 lg:p-10"
        >

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Name */}

            <div className="relative">

              <i className="ph ph-user absolute left-4 top-1/2 -translate-y-1/2 text-accent"></i>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="h-12 w-full rounded-md border border-zinc-700/50 bg-transparent pl-11 pr-4 text-sm text-text outline-none placeholder:text-zinc-400 focus:border-accent"
              />

            </div>


            {/* Email */}

            <div className="relative">

              <i className="ph ph-envelope absolute left-4 top-1/2 -translate-y-1/2 text-accent"></i>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address*"
                required
                className="h-12 w-full rounded-md border border-zinc-700/50 bg-transparent pl-11 pr-4 text-sm text-text outline-none placeholder:text-zinc-400 focus:border-accent"
              />

            </div>


            {/* Phone */}

            <div className="relative">

              <i className="ph ph-phone absolute left-4 top-1/2 -translate-y-1/2 text-accent"></i>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                required
                className="h-12 w-full rounded-md border border-zinc-700/50 bg-transparent pl-11 pr-4 text-sm text-text outline-none placeholder:text-zinc-400 focus:border-accent"
              />

            </div>


            {/* Location */}

            <div className="relative">

              <i className="ph ph-map-pin absolute left-4 top-1/2 -translate-y-1/2 text-accent"></i>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location* e.g. Vadodara"
                required
                className="h-12 w-full rounded-md border border-zinc-700/50 bg-transparent pl-11 pr-4 text-sm text-text outline-none placeholder:text-zinc-400 focus:border-accent"
              />

            </div>

          </div>


          {/* Message */}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message:"
            required
            className="mt-4 w-full resize-y rounded-md border border-zinc-700/50 bg-transparent px-4 py-4 text-sm text-text outline-none placeholder:text-zinc-400 focus:border-accent"
          ></textarea>


          {/* Save Info */}

          <label className="mt-4 flex cursor-pointer items-center gap-2 text-xs text-zinc-500">

            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="h-4 w-4 accent-accent"
            />

            Save my name, email, and website in this browser for the next time.

          </label>


          {/* Status */}

          {status.message && (
            <div
              className={`mt-5 rounded-lg px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {status.message}
            </div>
          )}


          {/* Submit */}

          <button
            type="submit"
            disabled={sending}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >

            <i className="ph ph-paper-plane-tilt"></i>

            {sending ? "Sending..." : "Send Message"}

          </button>

        </form>

      </section>


      {/* Bottom Border */}

      <div className="w-full border-b border-zinc-700/50"></div>

    </div>
  );
}

export default Contact;