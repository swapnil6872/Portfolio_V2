import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import jobuniverseImage from "../assets/projects/jobuniverse2.png";


function Portfolio() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = [
    "All",
    "Web",
    "Frontend",
    "Backend",
    "Figma",
    "Apps",
  ];

  const projects = [
    {
      id: 1,
      slug: "jobuniverse",
      title: "JobUniverse",
      description:
        "A full-stack job portal platform for finding jobs, internships and managing recruitment workflows.",
      category: ["Web", "Frontend", "Backend"],
      type: "Full Stack",
    
      image: jobuniverseImage, 
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      github: "https://github.com/swapnil6872/JobUniverse",
      live: "https://job-universe.vercel.app/",
      featured: true,
    },
    {
      id: 2,
      slug: "wondurlust",
      title: "Wondurlust",
      description:
        "A travel listing web application where users can explore, create and manage travel listings.",
      category: ["Web", "Frontend", "Backend"],
      type: "Full Stack",
      image: "../src/assets/projects/Wanderlust.png", 
      tech: [
        "EJS",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
      ],
      github: "https://github.com/swapnil6872/Wondurlust",
      live: "https://wondurlust.onrender.com/listings",
      featured: true,
    },
    {
      id: 3,
      slug: "mern-auth",
      title: "MERN Authentication",
      description:
        "A MERN authentication project with user registration, login and protected application functionality.",
      category: ["Web", "Frontend", "Backend"],
      type: "Full Stack",
      image: "../src/assets/projects/MernAuth.png", 
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/swapnil6872/MERN-AUTH",
      live: "https://mern-auth-rho-five.vercel.app/",
      featured: false,
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.category.includes(activeFilter);

      const searchText = search.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchText) ||
        project.description.toLowerCase().includes(searchText) ||
        project.tech.some((tech) =>
          tech.toLowerCase().includes(searchText)
        );

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="min-h-screen flex-1 overflow-hidden bg-background text-text">
      
      {/* HERO */}
      <section className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm">
              My Portfolio
            </p>
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Selected
            <span className="text-accent"> Projects</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            A collection of projects I've built across web development,
            frontend, backend, UI/UX design and application development.
          </p>
        </div>
      </section>

      {/* FILTER + SEARCH*/}
      <section className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 border-b border-zinc-700/50 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm
                  ${
                    activeFilter === filter
                      ? "border-accent bg-accent text-text"
                      : "border-border bg-surface text-zinc-400 hover:border-accent hover:text-text"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64">
            <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-lg text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-border bg-surface py-2.5 pl-11 pr-4 text-sm text-text outline-none transition placeholder:text-zinc-500 focus:border-accent"
            />
          </div>
        </div>
      </section>

      {/*PROJECT COUNT */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-8 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            Showing{" "}
            <span className="font-semibold text-text">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
          {activeFilter !== "All" && (
            <button
              onClick={() => setActiveFilter("All")}
              className="text-xs text-accent hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>
      </section>

      {/* PROJECT GRID*/}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-6 sm:px-8 lg:px-12">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
              >
                {/* PROJECT IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden bg-background">
                  {/* Image fallback is placed *behind* the image so it shows if the image fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background">
                    <div className="text-center">
                      <i className="ph ph-code text-5xl text-accent" />
                      <p className="mt-2 text-sm font-medium text-zinc-500">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Hides the broken image icon so the fallback behind it becomes visible
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {project.featured && (
                    <div className="absolute z-20 left-4 top-4 rounded-full bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-text">
                      Featured
                    </div>
                  )}

                  <div className="absolute z-20 right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {project.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => navigate(`/portfolio/${project.slug}`)}
                      aria-label={`View ${project.title}`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-accent group-hover:bg-accent"
                    >
                      <i className="ph ph-arrow-up-right text-lg" />
                    </button>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-zinc-400 sm:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => navigate(`/portfolio/${project.slug}`)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-text transition-all duration-300 hover:bg-text hover:text-background sm:text-sm"
                    >
                      View Project
                      <i className="ph ph-arrow-right" />
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:border-accent hover:bg-accent"
                        aria-label="View GitHub repository"
                      >
                        <i className="ph ph-github-logo text-lg" />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 hover:border-accent hover:bg-accent"
                        aria-label="View live project"
                      >
                        <i className="ph ph-arrow-square-out text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
            //  EmptySpace
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-surface px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background text-accent">
              <i className="ph ph-folder-open text-3xl" />
            </div>
            <h2 className="mt-5 text-xl font-bold">No projects found</h2>
            <p className="mt-2 max-w-md text-sm text-zinc-500">
              Try another category or search for a different project.
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearch("");
              }}
              className="mt-5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-text"
            >
              Show All Projects
            </button>
          </div>
        )}
      </section>

      <div className="w-full border-b border-zinc-700/50" />
    </div>
  );
}

export default Portfolio;

