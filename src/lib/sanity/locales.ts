export const supportedLanguages = [
    { id: "en", title: "English" },
    { id: "nb", title: "Norsk Bokmål", isDefault: true },
];
export const baseLanguage = supportedLanguages.find((l) => l.isDefault) as { id: string; title: string, isDefault: boolean };
