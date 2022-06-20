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
        bmc: "",
        paypal: "",
        patreon: "",
        kofi: "",
      },
      trophy: {
        theme: "",
        border: "",
        background: "",
        visible: "",
      },
      visitcount: {
        color: "",
        icon: "",
        visible: "",
      },
      quote: {
        theme: "",
        layout: "",
        visible: "",
      },
      meme_visible: "",
      finalData: "",
    },
    editData(id, value) {
      this.data[id] = value;
    },
  };
}
