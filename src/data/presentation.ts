type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  link:string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "gxanshu@yahoo.com",
  title: "Hi, I’m Wawa",
  link: "Cute Union",
  description:
    "I'm a Taiwanese programmer with over 4 years of web experience",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/gxanshu",
    },
    {
      label: "Bento",
      link: "https://bento.me/gxanshu",
    },
    {
      label: "Github",
      link: "https://github.com/gxanshu",
    },
  ],
};

export default presentation;
