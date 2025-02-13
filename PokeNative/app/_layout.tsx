import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack
  // (stack) type de navigation utilisée
    screenOptions={{
      headerShown: false
    }} />;

}
