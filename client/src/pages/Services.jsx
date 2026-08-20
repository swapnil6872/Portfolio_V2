import React, { useState } from "react";

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      number: "01",
      title: "Static Website",
      description:
        "Fast, responsive and modern websites for businesses, personal brands, landing pages and small projects.",
      price: "₹3,000",
      features: [
        "Responsive Design",
        "Modern UI",
        "Mobile Friendly",
        "SEO Friendly Structure",
        "Deployment",
      ],
    },
    {
      number: "02",
      title: "MERN Website",
      description:
        "Full-stack web applications built with MongoDB, Express.js, React.js and Node.js.",
      price: "₹10,000",
      features: [
        "React.js Frontend",
        "Node.js & Express",
        "MongoDB Database",
        "REST APIs",
        "Authentication",
        "Deployment",
      ],
      popular: true,
    },
    {
      number: "03",
      title: "Web UI / UX",
      description:
        "Clean and user-friendly interfaces designed to provide a modern and engaging user experience.",
      price: "₹4,000",
      features: [
        "Modern UI Design",
        "Responsive Layout",
        "Figma Design",
        "User Friendly UX",
        "Design System",
      ],
    },
    {
      number: "04",
      title: "Portfolio Website",
      description:
        "Professional portfolio websites for developers, designers, students, freelancers and creators.",
      price: "₹4,000",
      features: [
        "Personal Branding",
        "Responsive Design",
        "Projects Section",
        "Skills & Experience",
        "Contact Section",
        "Deployment",
      ],
    },
  ];

  const faqs = [
    {
      question: "What type of websites can you build?",
      answer:
        "I can build static websites, portfolio websites, responsive landing pages, modern UI/UX designs and full-stack MERN applications.",
    },
    {
      question: "Can you build a complete MERN application?",
      answer:
        "Yes. I can build the frontend using React.js, backend using Node.js and Express.js, and database functionality using MongoDB. Authentication and REST APIs can also be included.",
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Yes. I build responsive websites that adapt to mobile phones, tablets and desktop screens.",
    },
    {
      question: "Can you deploy my website?",
      answer:
        "Yes. I can help deploy your frontend and backend using platforms such as Vercel and other suitable hosting services.",
    },
    {
      question: "Can I request custom features?",
      answer:
        "Absolutely. Pricing can change depending on the features, complexity and requirements of your project. We can discuss your requirements before starting.",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-background text-text max-[764px]:mt-14">
   
   {/* Decorative background */}
  <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      {/* HERO */}
      <section className="border-b border-zinc-700/50">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24">

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services & Pricing
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-text sm:text-base">
            I build modern, responsive and user-friendly digital experiences
            for individuals, startups and businesses. Choose a service below
            or{" "}
            <a
              href="/contact"
              className="text-accent transition-colors hover:underline"
            >
              contact me
            </a>{" "}
            for a custom project.
          </p>

          <a
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-accent
              px-7
              py-3
              text-sm
              font-semibold
              text-text
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Hire Me
          </a>

        </div>
      </section>


      {/* Service and pricing */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="mb-10">
          <div className="flex items-center gap-4">

            <div className="h-12 w-1 shrink-0 bg-accent"></div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What I Can Do
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-text sm:text-base">
                Flexible services designed around your project and budget.
              </p>
            </div>

          </div>
        </div>


        {/* Pricing Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.number}
              className={`
                group
                relative
                flex
                flex-col
                rounded-2xl
                border
                ${
                  service.popular
                    ? "border-accent"
                    : "border-accent"
                }
                bg-background
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              `}
            >

              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[10px] font-semibold uppercase tracking-wider text-text">
                  Popular
                </div>
              )}

              {/* Number */}
              <span className="text-xs font-semibold tracking-[0.2em] text-accent">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 min-h-[90px] text-sm leading-6 text-text">
                {service.description}
              </p>

              {/* Price */}
              <div className="mt-5 border-t border-accent pt-5">

                <p className="text-xs text-zinc-500">
                  Starting from
                </p>

                <div className="mt-1 flex items-end gap-1">
                  <span className="text-3xl font-bold">
                    {service.price}
                  </span>
                </div>

              </div>


              {/* Features */}
              <div className="mt-6 space-y-3">

                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-text"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}

              </div>


              {/* Button */}
              <a
                href="/contact"
                className="
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-accent
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-accent
                  transition-all
                  duration-300
                  hover:bg-accent
                  hover:text-white
                "
              >
                Get Started
              </a>

            </div>
          ))}

        </div>

      </section>


      {/* CUSTOM PROJECT */}
      <section className="border-y border-zinc-700/50">

        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Need Something Custom?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
            Every project is different. Tell me about your idea, requirements
            and budget, and I can create a custom solution for you.
          </p>

          <a
            href="/contact"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-accent
              px-7
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Let's Work Together
          </a>

        </div>

      </section>


      {/*  FAq */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-10">

              <div className="flex items-start gap-4">

                <div className="h-14 w-1 shrink-0 bg-accent"></div>

                <div>

                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Have any questions?
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
                    You can use this section to address any queries you may
                    have before starting your project.
                  </p>

                </div>

              </div>

            </div>


            {/* FAQ LIST */}
            <div className="space-y-4">

              {faqs.map((faq, index) => {

                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border border-zinc-300 bg-surface transition-all duration-300"
                  >

                    {/* Question */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        px-5
                        py-5
                        text-left
                      "
                    >

                      <div className="flex items-center gap-3">

                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-400 text-xs font-bold text-text">
                          →
                        </span>

                        <span className="text-sm font-medium text-text sm:text-base">
                          {faq.question}
                        </span>

                      </div>

                      <span
                        className={`
                          text-xl
                          font-light
                          transition-transform
                          duration-300
                          ${
                            isOpen
                              ? "rotate-45"
                              : "rotate-0"
                          }
                        `}
                      >
                        +
                      </span>

                    </button>


                    {/* Answer */}
                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ${
                          isOpen
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                        }
                      `}
                    >
                      <div className="overflow-hidden">

                        <p className="border-t border-zinc-700/50 px-5 pb-5 pt-4 pl-[52px] text-sm leading-6 text-text">
                          {faq.answer}
                        </p>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="hidden items-center justify-center lg:flex">

            <div className="relative flex h-[420px] w-[420px] items-center justify-center">

              {/* Decorative circles */}
              <div className="absolute h-72 w-72 rounded-full border border-accent/20"></div>

              <div className="absolute h-60 w-60 rounded-full border border-accent/30"></div>

              <div className="flex h-40 w-40 items-center justify-center rounded-full border-[8px] border-accent/20">

                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-accent/10">

                  <span className="text-7xl font-bold text-accent">
                    ?
                  </span>

                </div>

              </div>


              {/* Decorative dots */}
              <span className="absolute left-16 top-16 h-3 w-3 rounded-full bg-accent"></span>

              <span className="absolute right-20 top-20 h-2 w-2 rounded-full bg-accent"></span>

              <span className="absolute bottom-20 left-24 h-2 w-2 rounded-full bg-accent"></span>

              <span className="absolute bottom-16 right-16 h-3 w-3 rounded-full bg-accent"></span>

              <span className="absolute left-8 top-1/2 h-2 w-2 rounded-full bg-accent"></span>

              <span className="absolute right-8 top-1/2 h-2 w-2 rounded-full bg-accent"></span>

              {/* Plus decorations */}
              <span className="absolute left-28 top-8 text-2xl font-bold text-accent">
                +
              </span>

              <span className="absolute bottom-12 right-28 text-2xl font-bold text-accent">
                +
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="border-t border-surface">

        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
            Have a project in mind? I'd love to hear about it.
          </p>

          <a
            href="/contact"
            className="
              mt-7
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-accent
              px-8
              py-3
              text-sm
              font-semibold
              text-text
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            Hire Me
          </a>

        </div>

      </section>

    </div>
  );
};

export default Services;