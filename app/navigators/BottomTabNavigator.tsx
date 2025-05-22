// app/navigators/BottomTabNavigator.tsx
import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text, StyleSheet } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { WatchScreen } from "@/screens/WatchScreen"

const Tab = createBottomTabNavigator()

// Dummy screens for other tabs
const DashboardScreen = () => (
  <View style={styles.dummyScreen}>
    <Text style={styles.dummyText}>Dashboard</Text>
  </View>
)

const MediaLibraryScreen = () => (
  <View style={styles.dummyScreen}>
    <Text style={styles.dummyText}>Media Library</Text>
  </View>
)

const MoreScreen = () => (
  <View style={styles.dummyScreen}>
    <Text style={styles.dummyText}>More</Text>
  </View>
)

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = ""

          switch (route.name) {
            case "Dashboard":
              iconName = "dashboard"
              break
            case "Watch":
              iconName = "play-circle-outline"
              break
            case "Media Library":
              iconName = "video-library"
              break
            case "More":
              iconName = "more-horiz"
              break
          }

          return <MaterialIcons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#1C1C1E",
          borderTopColor: "#2C2C2E",
          paddingBottom: 8,
          paddingTop: 8,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Watch" component={WatchScreen} />
      <Tab.Screen name="Media Library" component={MediaLibraryScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  dummyScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  dummyText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
})
