export function createGPRMStore() {
  return {
    data: {
      username: "",
      aboutme: "",
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
    },
    editData(id, value) {
      this.data[id] = value;
    },
  };
}
