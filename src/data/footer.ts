export interface FooterData {
  deskripsi: string;
  footerLink: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
}

export interface FooterProps {
  footerData: FooterData;
}

export const footerData: FooterData = {
  deskripsi:
    "Passionate Full Stack Developer crafting innovative digital solutions and meaningful experiences through technology.",

  footerLink: [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Experience", href: "#experience" }
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", href: "https://github.com/LRMNTRIX03" },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/lutfi-rizaldi-mahida-65a566300/",
        },
        {
          label: "Email",
          href: "mailto:rizaldilutfi1@gmail.com",
        },
      ],
    },
  ],
};