import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "lato-b",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Properties",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "lato",
          },
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "My Reservations",
          headerTitleAlign: "center",
          tabBarLabel: "Reservations",
          headerTitleStyle: {
            fontFamily: "lato",
          },
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Account",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "lato",
          },
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
