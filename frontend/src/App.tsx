
// in src/App.tsx
import { Admin, Resource, CustomRoutes } from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import fakeDataProvider from "ra-data-fakerest";
import { Dashboard } from "./dashboard";
import { authProvider, apInitialize } from "./authProvider";
import { i18nProvider } from "./i18nProvider";
import LoginPage, { Login } from "./Login";
import data from "./data";
import { PlayersList, PlayersCreate, PlayersEdit} from "./resources/Players";
import { GamesList, GamesCreate, GamesEdit} from "./resources/Games";
import { AnimationsList, AnimationsCreate, AnimationsEdit} from "./resources/Animations";
import { ColorsList, ColorsCreate, ColorsEdit} from "./resources/Colors";
import { LightsList, LightsCreate, LightsEdit} from "./resources/Lights";
import PlayersIcon from "@mui/icons-material/SportsEsports";
import GamesIcon from "@mui/icons-material/Games";
import AnimationsIcon from "@mui/icons-material/Animation";
import ColorsIcon from "@mui/icons-material/ColorLens";
import LightsIcon from "@mui/icons-material/LightMode"; 
// SUPERTOKENS
import React from "react";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session from "supertokens-auth-react/recipe/session";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + "/auth",
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: "EMAIL",
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === "true") {
  dataProvider = postgrestRestProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      "/proxy"
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/afc8e1d55">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != "DEV" ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
        
      >
    <Resource name="Players" options={{label:"players"}} 
list={PlayersList}
create={PlayersCreate}
edit={PlayersEdit}
recordRepresentation="Player_Name"
icon={PlayersIcon}/>
<Resource name="Games" options={{label:"games"}} 
list={GamesList}
create={GamesCreate}
edit={GamesEdit}
recordRepresentation="Game_ID"
icon={GamesIcon}/>
<Resource name="Animations" options={{label:"animations"}} 
list={AnimationsList}
create={AnimationsCreate}
edit={AnimationsEdit}
recordRepresentation="Animation_ID"
icon={AnimationsIcon}/>
<Resource name="Colors" options={{label:"colors"}} 
list={ColorsList}
create={ColorsCreate}
edit={ColorsEdit}
recordRepresentation="Color_ID"
icon={ColorsIcon}/>
<Resource name="Lights" options={{label:"lights"}} 
list={LightsList}
create={LightsCreate}
edit={LightsEdit}
recordRepresentation="Light_ID"
icon={LightsIcon}/>
    <CustomRoutes noLayout>
      {/*This renders the login UI on the /auth route*/}
      {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
      {/*Your app routes*/}
    </CustomRoutes>
  </Admin>
  </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
