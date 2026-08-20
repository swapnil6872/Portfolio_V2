import React from 'react';
import { NavLink } from 'react-router-dom';
import swapnilbg from '../assets/images/Swapnilbg.png'

function Navbar() {
  
  const navItems = [
    { name: 'About Me', path: '/',icon: "ph-user" },
    { name: 'Skills', path: '/skills',icon: "ph-code", },
    { name: 'Portfolio', path: '/portfolio' , icon: "ph-briefcase",},
    { name: 'Resume', path: '/resume',icon: "ph-file-text", },
    { name: 'Services & Pricing', path: '/services' , icon: "ph-currency-dollar",},
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact',  icon: "ph-envelope", },
  ];

const socialLinks = [
  {
    name: "GitHub",
    icon: "ph-github-logo",
    url: "https://github.com/swapnil6872",
  },
  {
    name: "LinkedIn",
    icon: "ph-linkedin-logo",
    url: "https://www.linkedin.com/in/svapnilgamit",
  },
  {
    name: "Instagram",
    icon: "ph-instagram-logo",
    url: "https://www.instagram.com/yourusername",
  },
  {
    name: "Twitter",
    icon: "ph-x-logo",
    url: "https://x.com/yourusername",
  },
];

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full flex-row items-center justify-around bg-surface p-2 text-text shadow-lg 
                    md:sticky md:top-0 md:flex md:h-screen md:w-[260px] md:flex-col md:justify-start md:p-6 md:shadow-none">
      
      {/* --- TOP SECTION: Profile & Socials (Hidden on Mobile) --- */}
      <div className="hidden flex-col items-center text-center md:flex">
        
        {/* Profile Image */}
        <div className="relative mb-3 h-24 w-24">
          <img 
            src={swapnilbg} 
            alt="Profile" 
            className="h-full w-full rounded-full bg-accent object-contain"
          />
          {/* Wave/Badge icon */}
          <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-background text-sm">
            👋
          </div>
        </div>
        
        <h2 className="text-xl font-bold tracking-wide">Chris Evans</h2>
        <p className="mt-1 text-xs font-medium text-text">Fullstack Web Developer</p>

        {/* Social Icons */}

<div className="mt-5 flex gap-3">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.name}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-text"
    >
      <i className={`ph ${social.icon} text-lg`}></i>
    </a>
  ))}
</div>

      </div>

      {/* Divider (Hidden on Mobile) */}
      <hr className="my-8 hidden w-full border-zinc-700/50 md:block" />

      {/* --- MIDDLE SECTION: Links (Row on Mobile, Col on Desktop) --- */}
      <ul className="flex w-full flex-row justify-around gap-1 overflow-x-auto md:flex-col md:justify-start md:gap-2 md:overflow-visible">
        {navItems.map((item) => (
          <li key={item.name} className="flex-shrink-0 md:w-full">
            {/* Swapped <a> for <NavLink> */}
            
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-colors md:w-full 
                ${isActive 
                  ? 'bg-accent text-text' 
                  : 'text-text hover:bg-accent cursor-pointer hover:text-text'
                }`
              }
            >
              {/* Drop your Nav Icons here later */}
              <div className="flex h-5 w-5 items-center justify-center">
                {/* <span className="text-xs opacity-70">❖</span>  */}
                 <i className={`ph ${item.icon} text-lg`}></i>
              </div>
              
              {/* Text (Hidden on small mobile to fit as bottom nav, visible on desktop) */}
              <span className="hidden sm:block md:block">{item.name}</span>

              {/* Notification Badge */}
              {item.badge && (
                <span className="ml-auto hidden rounded bg-accent px-2 py-0.5 text-xs text-text md:block">
                  {item.badge}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* --- BOTTOM SECTION: Hire Me Button (Hidden on Mobile) --- */}

      <div className="mt-auto hidden w-full md:block">
  <button
    className="
      group relative flex w-full items-center justify-center gap-2
      overflow-hidden rounded-full
      border border-transparent
      bg-accent py-3.5
      text-sm font-semibold text-text

      transition-all duration-500 ease-out

      hover:border-border
      hover:bg-background
      hover:shadow-lg
      hover:-translate-y-0.5
    "
  >
    {/* Hover background */}
    <span
      className="
        absolute inset-0
        origin-left scale-x-0
        bg-accent/20
        transition-transform duration-500 ease-out
        group-hover:scale-x-100
      "
    />

    {/* Content */}
    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
      ✈️
    </span>

    <span className="relative z-10">
      Hire Me
    </span>
  </button>
</div>

    </nav>
  );
}

export default Navbar;


 