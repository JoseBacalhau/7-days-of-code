import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from "@expo-google-fonts/overpass";
import theme from "./src/theme";
import Routes from "./src/routes";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.dark} />

      <Routes />
    </>
  );
}