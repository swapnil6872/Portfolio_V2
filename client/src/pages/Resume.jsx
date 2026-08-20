import React from "react";
import { Download, GraduationCap, Code2, User, Heart } from "lucide-react";
import SwapnilResume from '../assets/SwapnilResume.pdf'

const Resume = () => {
  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-200">

      {/* ================= TOP SECTION ================= */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Online Resume
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            A quick overview of my education, technical skills, projects,
            interests and experience as a Computer Science fresher.
          </p>

          <a
            href={SwapnilResume}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            <Download size={17} />
            Download PDF Version
          </a>

        </div>
      </section>

      {/* RESUME  */}
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16 border border-accent rounded-4xl">

        {/*PROFILE */}
        <section className="mb-12">

          <div className="border-l-4 border-accent pl-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Profile
            </p>

            <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
              Computer Science Fresher
            </h2>
          </div>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-muted sm:text-base">
            I am a Computer Science Engineering graduate and a passionate
            web developer interested in building modern, responsive and
            user-friendly web applications. I enjoy working with frontend
            technologies, backend development and databases while continuously
            learning new technologies.
          </p>

        </section>

        {/* ================= TWO COLUMN ================= */}
        <div className="grid gap-10 lg:grid-cols-3">

          {/* ================= LEFT ================= */}
          <div className="space-y-10 lg:col-span-2">

            {/* EDUCATION */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-accent">
                  <GraduationCap size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Education
                  </p>
                  <h2 className="text-2xl font-bold">
                    Academic Background
                  </h2>
                </div>
              </div>

              <div className="space-y-4">

                {/* BTECH */}
                <div className="rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-lg font-bold">
                        Bachelor of Technology — Computer Science
                      </h3>

                      <p className="mt-1 text-sm text-accent">
                        Parul University
                      </p>
                    </div>

                    <span className="h-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      CGPA: 7.03
                    </span>
                  </div>
                </div>

                {/* 12TH */}
                <div className="rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-lg font-bold">
                        Higher Secondary — 12th
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        GSEB Board
                      </p>
                    </div>

                    <span className="h-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      74%
                    </span>
                  </div>
                </div>

                {/* 10TH */}
                <div className="rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div>
                      <h3 className="text-lg font-bold">
                        Secondary School — 10th
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        Jay Ambe Vidhyabhavan · GSEB Board
                      </p>
                    </div>

                    <span className="h-fit rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                      82%
                    </span>
                  </div>
                </div>

              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-accent">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Skills
                  </p>
                  <h2 className="text-2xl font-bold">
                    Technical Skills
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <SkillCard
                  title="Frontend"
                  skills={[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React.js",
                    "Tailwind CSS",
                    "Bootstrap",
                  ]}
                />

                <SkillCard
                  title="Backend"
                  skills={[
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "Authentication",
                  ]}
                />

                <SkillCard
                  title="Database"
                  skills={[
                    "MongoDB",
                    "Mongoose",
                    "MySQL",
                  ]}
                />

                <SkillCard
                  title="Tools & Other"
                  skills={[
                    "Git",
                    "GitHub",
                    "Figma",
                    "Java",
                  ]}
                />

              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Projects
                </p>

                <h2 className="text-2xl font-bold">
                  Featured Projects
                </h2>
              </div>

              <div className="space-y-4">

                <Project
                  title="JobUniverse"
                  description="A full-stack job portal platform built for job seekers and recruiters."
                  technologies="React.js · Node.js · Express.js · MongoDB"
                />

                <Project
                  title="Wondurlust"
                  description="A travel listing web application with authentication, listings and image management."
                  technologies="Node.js · Express.js · MongoDB · EJS"
                />

                <Project
                  title="MERN Authentication"
                  description="Authentication system with registration, login, password reset and protected routes."
                  technologies="MongoDB · Express.js · React.js · Node.js"
                />

              </div>
            </section>

          </div>

          {/* ================= RIGHT SIDEBAR ================= */}
          <aside className="space-y-6">

            {/* QUICK INFO */}
            <div className="rounded-xl border border-border bg-surface p-6">

              <div className="mb-5 flex items-center gap-3">
                <User size={20} className="text-accent" />

                <h2 className="text-lg font-bold">
                  Quick Info
                </h2>
              </div>

              <div className="space-y-4">

                <Info label="Status" value="Fresher" />

                <Info
                  label="Degree"
                  value="B.Tech CSE"
                />

                <Info
                  label="University"
                  value="Parul University"
                />

                <Info
                  label="CGPA"
                  value="7.03"
                />

              </div>
            </div>

            {/* INTERESTS */}
            <div className="rounded-xl border border-border bg-surface p-6">

              <div className="mb-5 flex items-center gap-3">
                <Heart size={20} className="text-accent" />

                <h2 className="text-lg font-bold">
                  Interests
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">

                <Tag text="Tech News" />

                <Tag text="Esports" />

                <Tag text="Space Theories" />

              </div>

            </div>

            {/* CURRENT FOCUS */}
            <div className="rounded-xl border border-accent bg-surface p-6">

              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Currently Learning
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Full-Stack Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted">
                Improving my skills in React, Node.js, Express.js,
                MongoDB, MySQL and modern web development.
              </p>

            </div>

          </aside>

        </div>

      </main>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Let's Build Something Together
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            I'm open to opportunities where I can learn, contribute
            and grow as a developer.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-on-accent transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
          >
            Contact Me
          </a>

        </div>
      </section>

    </div>
  );
};


/* ================= COMPONENTS ================= */

const SkillCard = ({ title, skills }) => {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <h3 className="mb-4 text-sm font-bold text-accent">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};


const Project = ({ title, description, technologies }) => {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent">

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h3 className="text-lg font-bold">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted">
            {description}
          </p>

          <p className="mt-3 text-xs font-medium text-accent">
            {technologies}
          </p>
        </div>

      </div>

    </div>
  );
};


const Info = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-muted">
        {label}
      </span>

      <span className="text-right text-sm font-semibold">
        {value}
      </span>
    </div>
  );
};


const Tag = ({ text }) => {
  return (
    <span className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent">
      {text}
    </span>
  );
};

export default Resume;