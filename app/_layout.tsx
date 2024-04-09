import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const queryClient = new QueryClient();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    lato: require("../assets/fonts/Lato-Regular.ttf"),
    "lato-light": require("../assets/fonts/Lato-Light.ttf"),
    "lato-b": require("../assets/fonts/Lato-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="listing/[id]"
            options={{ headerTitle: "", headerTransparent: true }}
          />
          <Stack.Screen
            name="(modals)/booking"
            options={{
              headerTitleStyle: {
                fontFamily: "lato",
              },
              headerTitle: "Request to book",
            }}
          />
          <Stack.Screen
            name="reservation/[id]"
            options={{
              headerTitleStyle: {
                fontFamily: "lato",
              },
              headerTitle: "Request to book",
            }}
          />
        </Stack>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
