type Buttons = {
  label: string;
  link: string;
  img: string;
};

type Presentation = {
  mail: string;
  title: string;
  link: string;
  description: string;
  buttons: Buttons[];
};

const presentation: Presentation = {
  mail: "cuteunion.wawa@gmail.com",
  title: "Welcome to Cute Union",
  link: "Cute Union",
  description: "You can call me wawa.This is the place I share my interests",
  // "You can call me wawa.I'm a programmer with over 4 years of web experience",
  buttons: [
    {
      label: "Home",
      link: "/",
      img: "/images/buttons/home.gif",
    },
    {
      label: "About",
      link: "/about",
      img: "/images/buttons/about.gif",
    },
    {
      label: "Blog",
      link: "/posts",
      img: "/images/buttons/blog.gif",
    },
    {
      label: "Links",
      link: "/links",
      img: "/images/buttons/links.gif",
    },
  ],
};

export default presentation;
