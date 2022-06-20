export function createGPRMStore() {
  return {
    data: {
      username: "",
      intro: "",
      stats: {
        theme: "",
        border: "",
        lifetime: "",
        private: "",
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
      tech: "",
      badge_theme: "",
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
    },
    editData(id, value) {
      this.data[id] = value;
    },
  };
}
