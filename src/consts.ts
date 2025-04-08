import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Ravindu.cc",
  DESCRIPTION: "Personal Portfolio.",
  AUTHOR: "Ravindu Dabarera",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "About Me", 
    HREF: "/about-me", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@ravindu.cc",
    HREF: "mailto:hello@ravindu.cc",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "shadow104",
    HREF: "https://github.com/shadow104"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "ravinduchamara",
    HREF: "https://www.linkedin.com/in/ravinduchamara/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

