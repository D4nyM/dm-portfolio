export const info = {
  baseUrl: "https://localhost:3000",
  name: "Daniel Mendoza",
  jobDescription: "Web Developer",
  about: `I'm a software engineer based in Dallas who is always seeking new challenges that help me grow as a developer and a person. 
  `,

  experience: [
    {
      name: "null",
      location: "null",
      startDate: "null",
      endDate: "Present",
      description: ["- ", "- "],
    },
  ],

  skill: [
    {
      name: "React",
      logo: '<iconify-icon icon="logos:react" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "Astro",
      logo: '<iconify-icon icon="logos:astro" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "Angular",
      logo: '<iconify-icon icon="logos:angular-icon" style="font-size: 2rem;"></iconify-icon>',
    },

    {
      name: "NextJS",
      logo: '<iconify-icon icon="logos:nextjs" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "SQL",
      logo: '<iconify-icon icon="ph:file-sql-light" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "C#",
      logo: '<iconify-icon icon="logos:c-sharp" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "HTML",
      logo: '<iconify-icon icon="logos:html-5" style="font-size: 2rem;"></iconify-icon>',
    },
    {
      name: "CSS",
      logo: '<iconify-icon icon="logos:css-3" style="font-size: 2rem;"></iconify-icon>',
    },
  ],

  education: [
    {
      name: "University of Houston",
      location: "Houston, Texas",
      startDate: "2019",
      endDate: "2022",
      description: ["B.S. Computer Science", "Minor in Mathematics"],
    },
  ],

  socialMedia: {
    github: "https://github.com/D4nyM",
    email: "mailto: dolphanoe@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-berreles-mendoza-449165194/",
  },

  projects: [
    {
      title: "Astro Portfolio",
      isFeatured: true,
      thumbnail: `<img sizes="(min-width: 1180px) 532px, (min-width: 780px) calc(43.68vw + 25px), calc(94.57vw - 16px)" 
      srcset="../../assets/images/astro-portfolio_tlprff_c_scale,w_200.png 200w, 
      ../../assets/images/astro-portfolio_tlprff_c_scale,w_580.png 580w, 
      ../../assets/images/astro-portfolio_tlprff_c_scale,w_856.png 856w, 
      ../../assets/images/astro-portfolio_tlprff_c_scale,w_1051.png 1051w, 
      ../../assets/images/astro-portfolio_tlprff_c_scale,w_1280.png 1280w" 
      src="../../assets/images/astro-portfolio_tlprff_c_scale,w_1280.png" alt="" class="float-left md:m-4">`,
      githubUrl: "https://github.com/D4nyM/dm-portfolio",
      liveUrl: "https://dm-portfolio-tau.vercel.app/home",
      page: {
        slug: "astro-portfolio",
        title: "My Astro Portfolio",
        tags: ["Astro", "Static Page", "TailwindCSS"],
        text: "This is my personal portfolio I built ground up using Astro and some very handy libraries.",
        description:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvina",
      },
    },
    {
      title: "Starpath",
      isFeatured: true,
      thumbnail: `<img src="../../assets/images/starpath-story.webp" alt="" class="float-left md:m-4 md:mb-0 mb-4">`,
      page: {
        slug: "starpath",
        title: "Starpath",
        tags: ["C#", "Unity", "Teamwork"],
        text: "This project was my first experience in working with 7 other people in a team.",
        description:
          "Starpath is an open-world, Sci-Fi inspired, RPG game. The main character, Jett McCloud, is a spunky space explorer who finds himself crash landed on a mysterious planet. His trust robot, Zeke, is able to make the necessary repairs to make their ship operable, but they are without one necessary component, fuel. Unfortunately for our hero, fuel, along with most of the valuable resources on this planet are in the heavily secured headquarters of SkyCorp, a powerful, overbearing, local corporation. Jett is then tasked with exploring Star City to meet allies who can assist him in procuring fuel from the SkyCorp base. Infiltrating the SkyCorp base will serve as a multi-level “end game” and require the player to defeat an array of enemies to complete it, culminating with a final showdown against the owner of SkyCorp, Simeon Sky. The difficulty of this end game will depend on whether or not the player has completed tasks in the open world, to acquire the help of various NPCs. Each potential ally NPC has a special skill which will assist the player in the game, such as providing them with powerful weapons, or hacking the base security systems to allow the MC to circumvent dangerous areas. The player will also have the ability to to progress their own stats such as speed and strength in the open world, making them more formidable during the base infiltration",
      },
    },
    {
      title: "Medical Imaging ML Project",
      isFeatured: true,
      thumbnail: `<img src="../../assets/images/mri-image.webp" alt="" class="float-left md:m-4 h-auto md:w-[450px] w-full">`,
      githubUrl: "https://github.com/D4nyM/MedImgProject",
      liveUrl:
        "https://docs.google.com/document/d/e/2PACX-1vQJFgvnUKbL3EcdvwZtaECPWsU9lEv0aAq8_GSCUH388r4OzVpr-hI-YNcbTkKhsbKgiHDmH-K0aLEz/pub",
      page: {
        slug: "medical",
        title: "Medical Imaging ML",
        tags: ["Python", "ML", "Teamwork"],
        text: "A study by me and my team on image synthesis and augmentation using machine learning.",
        description:
          "In this work we implemented image synthesis and augmentation techniques with randomly generated phantoms and combined them to compare deformations side by side. Our program generated new data with invariance that can be used to learn from.",
      },
    },
  ],
};
