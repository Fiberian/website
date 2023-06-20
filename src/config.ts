export const SITE = {
  title: "Indonesia Merdeka",
  description: "The Indonesia Merdeka Roleplay Documentation",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://cdn.discordapp.com/attachments/1117745373939781672/1119487047460212746/Proyek_Baru_1340A8E.png",
    alt: "Sirius Rayfield logo in front of a beautiful picture of a lake in snowy mountains.",
  },
  twitter: "@sirius.software",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const COMMUNITY_INVITE_URL = `https://discord.io/imrp`;

export const GITHUB_EDIT_URL = `discord,io/imrp`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "indomerdeka",
  appId: "Y1DPKMTCPW",
  apiKey: "23dce9cc88cb86b13abd821958b35469",
};

export type Sidebar = Record<string, { text: string; link: string }[]>;
export const SIDEBAR: Sidebar = {
  Informasi: [
    { text: "Introduction", link: "introduction" },
    { text: "Tentang IMRP", link: "about-imrp" },
    { text: "Informasi", link: "information" },
  ],
  Interaction: [
    { text: "Elements", link: "interactive-elements" },
    { text: "Binds", link: "keybinds" },
  ],

  "UI Components": [{ text: "Textual Elements", link: "text" }],
};
