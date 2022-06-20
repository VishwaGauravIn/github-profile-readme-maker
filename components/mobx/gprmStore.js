export function createGPRMStore() {
  return {
    data: {
      username: "",
      aboutme: "",
      stats: {
        theme: "dark",
        border: false,
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
        twitter: "",
        youtube: "",
      },
      tech: [],
      badge_theme: "for-the-badge",
      donate: {
        buymeacoffee: "",
        paypal: "",
        patreon: "",
        kofi: "",
      },
      trophy: {
        theme: "radical",
        border: false,
        background: false,
      },
      visitcount: {
        color: "",
        icon: "",
      },
      quote: {
        theme: "",
        layout: "",
      },
      checkbox:{
        trophychk: false,
        visitorschk: true,
        quotechk: false,
        memechk: false,
      },
      finalData: "",
    },
    editData(id, value) {
      this.data[id] = value;
    },
  };
}
