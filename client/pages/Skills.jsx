import { icons } from "lucide-react";
import React from "react";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Languages",
      description: "Programming languages & fundamentals",
      skills: [
        { name: "HTML", icon: "ph-file-html", level: "Advanced", percent: 90 },
        { name: "CSS", icon: "ph-file-css", level: "Advanced", percent: 85 },
        { name: "JavaScript", icon: "ph-file-js", level: "Advanced", percent: 85 },
        { name: "Java", icon: "ph-coffee", level: "Intermediate", percent: 65 },
        { name: "C", icon: "ph-code", level: "Intermediate", percent: 60 },
        {
          name: "DSA Basics",
          icon: "ph-tree-structure",
          level: "Basic",
          percent: 50,
        },
      ],
    },

    {
      number: "02",
      title: "Web Development",
      description: "Modern frontend & backend technologies",
      skills: [
        { name: "React.js", icon: "ph-atom", level: "Advanced", percent: 85 },
        { name: "Node.js", icon: "ph ph-hexagon", level: "Advanced", percent: 80 },
        { name: "EJS", icon: "ph-file-code", level: "Intermediate", percent: 70 },
        {
          name: "REST APIs",
          icon: "ph-plugs-connected",
          level: "Advanced",
          percent: 80,
        },
        {
          name: "Tailwind CSS",
          icon: "ph-wind",
          level: "Advanced",
          percent: 85,
        },
        {
          name: "Bootstrap 5",
          icon: "ph ph-figma-logo",
          level: "Advanced",
          percent: 80,
        },
      ],
    },

    {
  number: "03",
  title: "Databases",
  description: "Database systems & data management",
  skills: [
    {
      name: "MongoDB",
      icon: "ph-database",
      level: "Intermediate",
      percent: 70,
    },
    {
      name: "MySQL",
      icon: "ph-database",
      level: "Intermediate",
      percent: 65,
    },
  ],
},

    {
      number: "04",
      title: "Design",
      description: "Interface design & user experience",
      skills: [
        { name: "UI/UX", icon: "ph-layout", level: "Intermediate", percent: 70 },
        { name: "Figma", icon: "ph-figma-logo", level: "Intermediate", percent: 70 },
      ],
    },

    {
      number: "05",
      title: "Tools & Platforms",
      description: "Development tools & deployment platforms",
      skills: [
        { name: "VS Code", icon: "ph-code", level: "Advanced", percent: 95 },
        { name: "GitHub", icon: "ph-github-logo", level: "Advanced", percent: 85 },
        { name: "Vercel", icon: "ph-triangle", level: "Advanced", percent: 80 },
        { name: "Render", icon: "ph-cloud", level: "Intermediate", percent: 70 },
        {
          name: "Android Studio",
          icon: "ph-android-logo",
          level: "Basic",
          percent: 45,
        },
        {
          name: "AI Tools",
          icon: "ph-sparkle",
          level: "Advanced",
          percent: 85,
        },
      ],
    },

    {
      number: "06",
      title: "Core Concepts",
      description: "Computer science fundamentals",
      skills: [
        {
          name: "Operating Systems",
          icon: "ph-cpu",
          level: "Intermediate",
          percent: 65,
        },
        {
          name: "Computer Networks",
          icon: "ph-network",
          level: "Intermediate",
          percent: 65,
        },
        {
          name:"Object-oriented Programming",
          icon:"ph ph-brackets-curly",
          percent:"60"
        }
      ],
    },
  ];

  const languages = [
    {
      name: "Gujarati",
      level: "Native",
      percent: 100,
      icon: "ph-translate",
    },
    {
      name: "Hindi",
      level: "Fluent",
      percent: 80,
      icon: "ph-translate",
    },
    {
      name: "English",
      level: "Professional",
      percent: 50,
      icon: "ph-translate",
    },
  ];

  return (
    <div className="min-h-screen flex-1 overflow-hidden bg-background text-text">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-28">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative max-w-3xl">

          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
              My Skills
            </p>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Skills &
            <span className="text-accent"> Technologies</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            A collection of technologies, tools and concepts I use to build
            modern web applications, interfaces and digital experiences.
          </p>

        </div>
      </section>


      {/* =====================================================
          SKILL CATEGORIES
      ===================================================== */}

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">

        <div className="space-y-16">

          {skillCategories.map((category) => (

            <div key={category.title}>

              {/* Category Header */}
              <div className="mb-7 flex items-end gap-4">

                <span className="text-sm font-bold text-accent">
                  {category.number}
                </span>

                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {category.title}
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                    {category.description}
                  </p>
                </div>

                <div className="mb-2 h-px flex-1 bg-zinc-700/50" />

              </div>


              {/* Skill Grid */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {category.skills.map((skill, index) => (

                  <div
                    key={skill.name}
                    className="
                      group relative overflow-hidden
                      rounded-2xl
                      border border-border
                      bg-surface
                      p-5
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-accent/60
                      hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)]
                    "
                  >

                    {/* Hover Glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-10
                        -top-10
                        h-24
                        w-24
                        rounded-full
                        bg-accent/10
                        blur-2xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">

                      {/* Top */}
                      <div className="flex items-center justify-between">

                        {/* Icon */}
                        <div
                          className="
                            flex h-12 w-12
                            items-center justify-center
                            rounded-xl
                            bg-background
                            text-accent
                            transition-all
                            duration-500
                            group-hover:rotate-6
                            group-hover:scale-110
                            group-hover:bg-accent
                            group-hover:text-text
                          "
                        >
                          <i className={`ph ${skill.icon} text-2xl`} />
                        </div>

                        {/* Index */}
                        <span className="text-xs text-zinc-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>


                      {/* Name */}
                      <div className="mt-5 flex items-center justify-between">

                        <h3 className="font-semibold">
                          {skill.name}
                        </h3>

                        <span className="text-[11px] text-accent">
                          {skill.level}
                        </span>

                      </div>


                      {/* Progress */}
                      <div className="mt-4">

                        <div className="h-1 w-full overflow-hidden rounded-full bg-background">

                          <div
                            className="
                              h-full
                              rounded-full
                              bg-accent
                              transition-all
                              duration-700
                              ease-out
                              group-hover:brightness-125
                            "
                            style={{
                              width: `${skill.percent}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}


          {/* =================================================
              LANGUAGES
          ================================================= */}

          <div>

            {/* Header */}
            <div className="mb-7 flex items-end gap-4">

              <span className="text-sm font-bold text-accent">
                06
              </span>

              <div>
                <h2 className="text-xl font-bold sm:text-2xl">
                  Languages
                </h2>

                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  Communication & language proficiency
                </p>
              </div>

              <div className="mb-2 h-px flex-1 bg-zinc-700/50" />

            </div>


            {/* Language Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              {languages.map((language) => (

                <div
                  key={language.name}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border border-border
                    bg-surface
                    p-5
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-accent/60
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex h-12 w-12
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-background
                        text-accent
                        transition-all
                        duration-500
                        group-hover:bg-accent
                        group-hover:text-text
                      "
                    >
                      <i className={`ph ${language.icon} text-2xl`} />
                    </div>

                    <div>

                      <h3 className="font-semibold">
                        {language.name}
                      </h3>

                      <p className="mt-1 text-xs text-accent">
                        {language.level}
                      </p>

                    </div>

                  </div>


                  {/* Progress */}
                  <div className="mt-5">

                    <div className="flex justify-between text-[10px] text-zinc-500">
                      <span>Proficiency</span>
                      <span>{language.percent}%</span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background">

                      <div
                        className="h-full rounded-full bg-accent transition-all duration-700"
                        style={{
                          width: `${language.percent}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* Bottom Border */}
      <div className="w-full border-b border-zinc-700/50" />

    </div>
  );
}

export default Skills;