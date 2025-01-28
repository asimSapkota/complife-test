interface Language {
    nativeName: string;
  }
  
  interface Languages {
    [key: string]: Language;
  }
  
  export const Localization = {
    defaultNS: "common",
    fallbackLng: "en-US",
    languages: {
      "en-US": { nativeName: "English" },
      it: { nativeName: "Italiano" },
    } as Languages,
  } as const;
  