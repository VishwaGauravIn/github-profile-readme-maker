import { makeAutoObservable } from 'mobx';

class ProfileMakerStore {
  data = {
    name: "",
    username: "",
    nearuser: "",
    aboutme: "",
    profileImage: "",
    backgroundImage: "",
    stats: {
      theme: "dark",
      border: true,
      lifetime: false,
      prv: false,
    },
    socials: {
      behance: "",
      discord: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      medium: "",
      pinterest: "",
      quora: "",
      reddit: "",
      sof: "",
      tiktok: "",
      twitch: "",
      x: "",
      youtube: "",
    },
    tech: [] as string[],
    badge_theme: "for-the-badge",
    donate: {
      buymeacoffee: "",
      paypal: "",
      patreon: "",
      kofi: "",
    },
    trophy: {
      theme: "radical",
      border: true,
      background: false,
    },
    visitcount: {
      color: 0,
      icon: 0,
    },
    quote: {
      quoteTheme: "radical",
      layout: "horizontal",
    },
    toprepo: {
      toprepotheme: "dark",
    },
    checkbox: {
      trophychk: false,
      visitorschk: true,
      quotechk: false,
      memechk: false,
      gtcechk: true,
    },
    finalData: "",
  };

  constructor() {
    makeAutoObservable(this); // Automatically makes fields observable and actions
  }

  editData(id: keyof typeof this.data, value: any) {
    this.data[id] = value;
  }
}

export const profileMakerStore = new ProfileMakerStore();
