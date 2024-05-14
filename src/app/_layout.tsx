import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack
        screenOptions={
            {
                headerStyle: {
                    backgroundColor: "#121212",
                },
                headerTintColor: "#FFF",
            }
        }
        >
            <Stack.Screen name="index" options={{title: "HOME"}} />
            <Stack.Screen name="typePlace" options={{title: "TIPO"}} />
            <Stack.Screen name="local/[name]" options={{title: "LOCAL"}} />,
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    )
}