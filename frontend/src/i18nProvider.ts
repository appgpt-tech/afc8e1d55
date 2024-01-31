// in i18nProvider.js
    import { mergeTranslations } from "ra-core";
    import polyglotI18nProvider from "ra-i18n-polyglot";
    import enOriginal from 'ra-language-english';

    const enResources = { resources: {"Players":{"name":"players","fields":{"Player_Name":"Player_Name","Wins":"Wins","Losses":"Losses","Draws":"Draws","id":"id"}},"Games":{"name":"games","fields":{"Game_ID":"Game_ID","Player_1":"Player_1","Player_2":"Player_2","Final_Score":"Final_Score","id":"id"}},"Animations":{"name":"animations","fields":{"Animation_ID":"Animation_ID","Animation_Name":"Animation_Name","Animation_Type":"Animation_Type","Duration":"Duration","id":"id"}},"Colors":{"name":"colors","fields":{"Color_ID":"Color_ID","Color_Name":"Color_Name","Color_Code":"Color_Code","id":"id"}},"Lights":{"name":"lights","fields":{"Light_ID":"Light_ID","Light_Type":"Light_Type","Color":"Color","id":"id"}}}};


    const en = mergeTranslations(enOriginal,enResources);

    const translations = { en};
    export const i18nProvider = polyglotI18nProvider(
      (locale) => translations[locale],
      "en", //default locale
      [{"locale":"en","name":"English"}]
    );
    