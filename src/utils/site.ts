const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://the-portfolio-lac.vercel.app";

export const siteConfig = {
  name: "Sandeep | Full Stack Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a full stack developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://instagram.com/_sandeep18_",
    github: "https://github.com/sandeep18p",
  },
  mailSupport: "sandeep.pansari98@gmail.com",
};
