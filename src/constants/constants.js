import config from "../config/local";

export const SOUNDCLOUD_CLIENT_ID = config.SOUNDCLOUD_CLIENT_ID;

export const COLOR = {
   mainTextColor: 'white',
   activeBackgroundColor: 'white',
   clearBackground: 'transparent',
   mainSeparator: 'rgba(255,255,255,0.4)',
   darkOverlay: "rgba(0,0,0,0.3)",
   primary: '#1f364d',
   primaryDark: '#26405A',
   primaryExtraDark: '#0D233A'
}

export const SETTING_IDS = {
    fontSize: '1'
}

export const SUBMENU = [
    {
        title: 'SETTINGS',
        icon :'md-settings',
        description: 'Set your font size'
    }
];

export const PASSAGE_SCHEMA = {
    name: "Passage",
    primaryKey: "id",
    properties: {
      id: "string",
      content: "string",
      book: "string",
      chapter: "int",
      verse: "int",
      type: "string"
    }
  };