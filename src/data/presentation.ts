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
  mail: "cuteunion.wawa@gmail.com",
  title: "Welcome to Cute Union",
  link: "Cute Union",
  description:
    "You can call me wawa.This is the place I share my interests",
    // "You can call me wawa.I'm a programmer with over 4 years of web experience",
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
