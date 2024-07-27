import agent1 from "../../images/agent-1.jpg";
import agent2 from "../../images/agent-2.jpg";
import agent3 from "../../images/agent-3.jpg";
import agent4 from "../../images/agent-4.jpg";

export const teamData = [
  {
    image: agent1,
    name: "Jack Halow",
    post: "Ceo & Founder",
  },

  {
    image: agent2,
    name: "John Smith",
    post: "Property Manager",
  },

  {
    image: agent3,
    name: "Chrish Patt",
    post: "Administrative Staff",
  },

  {
    image: agent4,
    name: "Jack Halow",
    post: "Real Estate Marketer",
  },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 2400, min: 800 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
