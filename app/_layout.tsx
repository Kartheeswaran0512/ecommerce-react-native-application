// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//   <Stack>
//     <Stack.Screen name="index" options={{title:'Home'}}/>
//     <Stack.Screen name="about" options={{title:'About'}}/>
//     <Stack.Screen name="contact" options={{title:'Contact'}}/>
//     <Stack.Screen name="/" options={{title :'not found'}}/>


//   </Stack>
//   )
// }
// import { Stack } from 'expo-router';


// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgetPassword" />
      <Stack.Screen name="resetPassword" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
