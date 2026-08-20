import React from 'react';
import swapnil from "../assets/images/swapnil.jpg";
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/Footer';
import jobuniverse2 from '../assets/projects/jobuniverse2.png';
import Wanderlust from '../assets/projects/Wanderlust.png';

function About() {
  return (

   
    <div className="flex-1 bg-background text-text min-h-screen max-[764px]:mt-14 ">


      {/* --- HERO SECTION --- */}
   
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 pt-10 pb-16 sm:px-8 sm:pt-16 lg:flex-row lg:gap-12 lg:px-12 lg:pt-40">

        {/* LEFT COLUMN: Text Content */}
        <div className="flex w-full flex-col items-center text-center space-y-5 lg:w-1/2 lg:items-start lg:text-left lg:space-y-6">

          <h3 className="text-lg font-semibold uppercase tracking-widest text-text mb-0 sm:text-xl md:text-2xl">
            Hi, I'm a Freelancer
          </h3>

          {/* Animated cursor effect on the title */}
          <h1 className="text-4xl font-bold text-accent min-h-[56px] sm:text-5xl sm:min-h-[64px] md:text-6xl md:min-h-[80px] lg:text-7xl lg:min-h-[100px] xl:text-8xl xl:min-h-[120px]">
            <TypeAnimation
              sequence={[
                'Developer',
                2000, 
                'Designer',
                2000,
                // 'Gamer',
                // 2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <p className="max-w-md text-base leading-relaxed text-text sm:text-lg">
            I'm a software engineer specializing in scalable web apps.
            Explore my <a href="/skills" className="text-accent hover:underline">skills</a>, <a href="/portfolio" className="text-accent hover:underline">project portfolio</a> and <a href="/resume" className="text-accent hover:underline">online resume</a>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">
            <button className="flex items-center gap-2 rounded-full bg-accent border border-border px-5 py-2.5 text-sm font-medium text-text transition hover:bg-surface sm:px-6 sm:py-3 sm:text-base">
              <span>→</span> <a href="/portfolio"> View Portfolio</a>
            </button>
            <button className="flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-text transition hover:bg-accent sm:px-6 sm:py-3 sm:text-base">
              <span>📄</span> <a href="/resume"> View Resume</a>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Image with offset border */}
        <div className="relative mt-4 flex w-full max-w-[280px] justify-center lg:mt-0 lg:w-1/2 lg:max-w-none lg:justify-end">
          {/* The blue decorative box positioned slightly offset */}
          <div className="absolute z-0 aspect-[4/5] w-[85%] max-w-[256px] bg-accent animate-[float_5s_ease-in-out_infinite] sm:w-[256px]"></div>

          {/* The actual image */}
          <img
            src={swapnil}
            alt="Developer Profile"
            className="relative z-10 aspect-[4/5] w-[85%] max-w-[256px] object-cover sm:w-[256px]"
          />
        </div>

      </div>

      {/* --- STATS SECTION --- */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:justify-start sm:gap-10 md:gap-16">

          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl lg:text-6xl">0</span>
            <p className="border-l border-zinc-600 pl-3 text-xs tracking-wider text-zinc-400">Years of<br/>Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl lg:text-6xl">4</span>
            <p className="border-l border-zinc-600 pl-3 text-xs tracking-wider text-zinc-400">Projects<br/>Completed</p>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-accent sm:text-4xl md:text-5xl lg:text-6xl">∞</span>
            <p className="border-l border-zinc-600 pl-3 text-xs tracking-wider text-zinc-400">Always<br/>Learning</p>
          </div>

        </div>
      </div>
      <div className='w-full border-b border-zinc-700/50 '></div>




            {/*SERVICES SECTION */}
      <section className="w-full border-t border-border/70 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

          {/* Section Header */}
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-16 w-1 rounded-full bg-accent"></span>

                <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
                  What I Do
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                I build modern, responsive and user-friendly digital
                experiences for individuals, startups and businesses.
                From simple websites to full-stack applications, I focus
                on clean design and reliable development.
              </p>
            </div>

            <a
              href="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
            >
              <span>→</span>
              Services & Pricing
            </a>
          </div>


          {/* Services Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Static Websites */}
            <div className="group relative overflow-hidden border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                &lt;/&gt;
              </div>

              <h3 className="mb-3 text-xl font-bold text-text">
                Static Websites
              </h3>

              <p className="text-sm leading-6 text-muted">
                Fast and responsive websites for businesses, landing pages,
                personal brands and small projects.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  HTML
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  CSS
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  JavaScript
                </span>
              </div>

              <div className="mt-7 text-sm font-semibold text-accent">
                Starting from ₹2,000
              </div>
            </div>


            {/* MERN Websites */}
            <div className="group relative overflow-hidden border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-lg font-bold text-accent transition-transform duration-300 group-hover:scale-110">
                JS
              </div>

              <h3 className="mb-3 text-xl font-bold text-text">
                MERN Websites
              </h3>

              <p className="text-sm leading-6 text-muted">
                Full-stack web applications with authentication, APIs,
                databases, dashboards and dynamic functionality.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  React
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Node.js
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  MongoDB
                </span>
              </div>

              <div className="mt-7 text-sm font-semibold text-accent">
                Starting from ₹8,000
              </div>
            </div>


            {/* UI UX */}
            <div className="group relative overflow-hidden border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                ✦
              </div>

              <h3 className="mb-3 text-xl font-bold text-text">
                Web UI / UX
              </h3>

              <p className="text-sm leading-6 text-muted">
                Clean and modern interfaces designed to look professional,
                feel intuitive and work beautifully across devices.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Figma
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  UI Design
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  UX
                </span>
              </div>

              <div className="mt-7 text-sm font-semibold text-accent">
                Starting from ₹3,000
              </div>
            </div>


            {/* Portfolio */}
            <div className="group relative overflow-hidden border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                ◇
              </div>

              <h3 className="mb-3 text-xl font-bold text-text">
                Portfolio Websites
              </h3>

              <p className="text-sm leading-6 text-muted">
                Personal portfolios for developers, designers, students and
                creators with modern animations and responsive layouts.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  React
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Tailwind
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Vite
                </span>
              </div>

              <div className="mt-7 text-sm font-semibold text-accent">
                Starting from ₹3,000
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          WORK TOGETHER / CTA SECTION
      ========================================================= */}
      <section className="relative overflow-hidden border-y border-border bg-subtle">

        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20">

          <div className="max-w-3xl">

            <h2 className="text-4xl font-bold leading-tight text-text sm:text-5xl lg:text-6xl">
              Let's Work Together
              <br />
              on Your Next Project
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Have an idea for a website or web application?
              Let's turn your idea into a modern digital experience.
            </p>

          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-on-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/20 sm:text-base"
          >
            Let's get in touch

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </section>


      {/* 
          FEATURED PROJECTS   */}
      <section className="w-full bg-background">

        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

          {/* Header */}
          <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-16 w-1 rounded-full bg-accent"></span>

                <h2 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
                  Featured Projects
                </h2>
              </div>

              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                A selection of projects that showcase my approach to
                development, responsive design and building practical
                web experiences.
              </p>

            </div>

            <a
              href="/portfolio"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
            >
              View Portfolio
              <span>→</span>
            </a>

          </div>


          {/* Projects */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Project 1 */}
            <article className="group">

              <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">

                <img
  src={jobuniverse2}
  alt="JobUniverse project"
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
/>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </div>

              </div>


              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  React
                </span>

                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Node.js
                </span>

                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  MongoDB
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-text">
                JobUniverse
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                A full-stack job portal built with the MERN stack for
                connecting job seekers and recruiters.
              </p>

            </article>


            {/* Project 2 */}
            <article className="group">

              <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">

                            <img
  src={Wanderlust}
  alt="JobUniverse project"
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
/>

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent shadow-lg transition-transform duration-300 group-hover:rotate-45">
                  ↗
                </div>

              </div>


              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Node.js
                </span>

                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  Express
                </span>

                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                  MongoDB
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-text">
                Wondurlust
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted">
                A travel listing web application with authentication,
                listings, image management and a complete backend system.
              </p>

            </article>

          </div>

        </div>

      </section>

      <div className="w-full border-b border-border/50"></div>

      <Footer/>
      
    </div>
  )
}

export default About;

