import { IMAGES } from "./images";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
] as const;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "hot",
    label: "Hot Coffees",
    items: [
      {
        id: "caffe-latte",
        name: "Caffè Latte",
        description: "Rich espresso balanced with silky steamed milk and a whisper of foam.",
        price: 4.45,
        image: IMAGES.baristaLatteArt,
        tag: "Classic",
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Vanilla-steamed milk marked with espresso and a caramel drizzle.",
        price: 4.95,
        image: IMAGES.latteHeart,
        tag: "Bestseller",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Bold espresso crowned with a deep layer of velvety milk foam.",
        price: 4.25,
        image: IMAGES.heroCappuccino,
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso shots topped with hot water for a light, layered crema.",
        price: 3.65,
        image: IMAGES.pourEspresso,
      },
    ],
  },
  {
    id: "cold",
    label: "Cold Coffees",
    items: [
      {
        id: "iced-caramel-latte",
        name: "Iced Caramel Latte",
        description: "Espresso over ice with cold milk and a ribbon of caramel.",
        price: 4.95,
        image: IMAGES.icedCoffeeHand,
        tag: "Bestseller",
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Slow-steeped for 20 hours for a naturally sweet, smooth finish.",
        price: 4.15,
        image: IMAGES.coldBrew,
      },
      {
        id: "sweet-cream-cold-brew",
        name: "Sweet Cream Cold Brew",
        description: "Our signature cold brew, finished with a float of vanilla sweet cream.",
        price: 4.65,
        image: IMAGES.coldBrew,
      },
    ],
  },
  {
    id: "frappe",
    label: "Frappé & Blended",
    items: [
      {
        id: "mocha-frappe",
        name: "Mocha Frappé",
        description: "Coffee, milk and mocha sauce, blended with ice to a silky finish.",
        price: 5.25,
        image: IMAGES.heroCappuccino,
      },
      {
        id: "matcha-frappe",
        name: "Matcha Frappé",
        description: "Stone-ground matcha blended with milk and ice, capped with foam.",
        price: 5.45,
        image: IMAGES.matchaIced,
        tag: "New",
      },
    ],
  },
  {
    id: "tea",
    label: "Tea",
    items: [
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha whisked with steamed milk.",
        price: 4.75,
        image: IMAGES.matchaClassic,
      },
      {
        id: "iced-matcha-latte",
        name: "Iced Matcha Latte",
        description: "Stone-ground matcha shaken over ice with cold milk.",
        price: 4.95,
        image: IMAGES.matchaIced,
      },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    items: [
      {
        id: "blueberry-muffin",
        name: "Blueberry Muffin",
        description: "Baked fresh daily, packed with whole blueberries.",
        price: 3.25,
        image: IMAGES.muffins,
      },
      {
        id: "butter-croissant",
        name: "Butter Croissant",
        description: "Laminated and layered for a flaky, golden bite.",
        price: 3.45,
        image: IMAGES.muffins,
      },
    ],
  },
];

export const BESTSELLERS = [
  MENU[0].items[1], // Caramel Macchiato
  MENU[1].items[0], // Iced Caramel Latte
  MENU[2].items[1], // Matcha Frappé
  MENU[1].items[1], // Cold Brew
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia R.",
    role: "Regular since 2021",
    quote:
      "My order is ready before I reach the counter. It's the small things — the warm greeting, the perfect foam — that keep me coming back every morning.",
  },
  {
    name: "Daniyor K.",
    role: "Rewards member",
    quote:
      "The app makes ordering effortless, and the seasonal drinks never disappoint. My local shop feels like a second office at this point.",
  },
  {
    name: "Priya S.",
    role: "Weekend regular",
    quote:
      "There's a rhythm to this place — the grinder, the steam, the quiet hum of conversation. It's my favorite hour of the week.",
  },
];

export type StoryChapter = {
  chapter: string;
  title: string;
  copy: string;
  image: string;
};

export const STORY_TIMELINE: StoryChapter[] = [
  {
    chapter: "01",
    title: "The First Roast",
    copy: "It began with a single roaster, a handful of green beans, and a stubborn belief that coffee could be treated as a craft rather than a commodity.",
    image: IMAGES.beansPile,
  },
  {
    chapter: "02",
    title: "Beyond the Counter",
    copy: "We stopped thinking of ourselves as a place that sells coffee, and started building rooms where people actually wanted to stay.",
    image: IMAGES.shopInterior,
  },
  {
    chapter: "03",
    title: "Bean to Cup, Responsibly",
    copy: "Direct relationships with growers, transparent sourcing, and a long-term bet that the best cup starts with the fairest farm.",
    image: IMAGES.farmHarvest,
  },
  {
    chapter: "04",
    title: "A Table for Everyone",
    copy: "Today the counter is longer, the playlist is better, and the door is still held open for whoever walks in next.",
    image: IMAGES.friendsCafe,
  },
];

export type Value = {
  title: string;
  copy: string;
};

export const VALUES: Value[] = [
  {
    title: "Sourced with intention",
    copy: "We buy direct from growers we know by name, paying above market rate for beans grown with care.",
  },
  {
    title: "Roasted like a craft",
    copy: "Small batches, closely watched, so every bag reflects the character of where it grew.",
  },
  {
    title: "Built as a third place",
    copy: "Not quite home, not quite work — a room designed to slow you down for a few minutes.",
  },
  {
    title: "Planet-forward, always",
    copy: "From compostable cups to reusable programs, every choice is weighed against what it costs the planet.",
  },
];
