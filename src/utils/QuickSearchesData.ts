interface IQuickSearches {
  img: string;
  imgAlt: string;
  title: string;
  desc: string;
}

import breakfast from "../assets/images/shutterstock_1154073754.png";
import lunch from "../assets/images/shutterstock_1130181932.png";
import snacks from "../assets/images/shutterstock_351721442.png";
import dinner from "../assets/images/shutterstock_476864884.png";
import drinks from "../assets/images/shutterstock_305270834.png";
import nightlife from "../assets/images/shutterstock_1304064250.png";

export const quickSearches: IQuickSearches[] = [
  {
    img: breakfast,
    imgAlt: "breakfast-image",
    desc: "Start your day with exclusive breakfast options",
    title: "Breakfast",
  },
  {
    img: lunch,
    imgAlt: "lunch-image",
    desc: "Satisfy your midday cravings with a variety of delicious and hearty lunch options.",
    title: "Lunch",
  },
  {
    img: snacks,
    imgAlt: "snacks-image",
    desc: "Enjoy a quick bite with our tasty snack options, perfect for any time of the day.",
    title: "Snacks",
  },
  {
    img: dinner,
    imgAlt: "dinner-image",
    desc: "End your day on a high note with exquisite dinner choices for a perfect evening.",
    title: "Dinner",
  },
  {
    img: drinks,
    imgAlt: "drinks-image",
    desc: "Refresh yourself with a wide selection of drinks, from refreshing juices to signature cocktails.",
    title: "Drinks",
  },
  {
    img: nightlife,
    imgAlt: "nightlife-image",
    desc: "Experience the vibrant nightlife scene with exciting places to unwind and enjoy after hours.",
    title: "NightLife",
  },
];
