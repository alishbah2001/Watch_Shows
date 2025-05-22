// app/screens/WatchScreen.tsx
import React, { useState, useRef } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native"
import { SearchScreen } from "./SearchScreen"
import { MOVIE_CATEGORIES, DUMMY_SEARCH_RESULTS } from "./DummyData"
import { MaterialIcons } from "@expo/vector-icons"

const { width } = Dimensions.get("window")

interface Category {
  id: string
  title: string
  image: string
}

export const WatchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchActive, setIsSearchActive] = useState(false)

  // Animation values
  const scrollY = useRef(new Animated.Value(0)).current
  const searchBarTranslateY = useRef(new Animated.Value(0)).current
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<"up" | "down">("up")

  const SEARCH_BAR_HEIGHT = 80 // Height of search container including padding

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y
    const scrollDelta = currentScrollY - lastScrollY.current

    // Always show search bar when at the top
    if (currentScrollY <= 0) {
      scrollDirection.current = "up"
      Animated.timing(searchBarTranslateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start()
    } else {
      // Determine scroll direction for other positions
      if (scrollDelta > 5 && scrollDirection.current !== "down") {
        // Scrolling down - hide search bar (with threshold to avoid jitter)
        scrollDirection.current = "down"
        Animated.timing(searchBarTranslateY, {
          toValue: -SEARCH_BAR_HEIGHT,
          duration: 200,
          useNativeDriver: true,
        }).start()
      } else if (scrollDelta < -5 && scrollDirection.current !== "up") {
        // Scrolling up - show search bar (with threshold to avoid jitter)
        scrollDirection.current = "up"
        Animated.timing(searchBarTranslateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start()
      }
    }

    lastScrollY.current = currentScrollY
  }

  const handleSearchFocus = () => {
    setIsSearchActive(true)
  }

  const handleSearchCancel = () => {
    setIsSearchActive(false)
    setSearchQuery("")
  }

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryOverlay}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )

  if (isSearchActive) {
    return (
      <SearchScreen
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onCancel={handleSearchCancel}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Animated Search Bar */}
      <Animated.View
        style={[
          styles.searchContainer,
          {
            transform: [{ translateY: searchBarTranslateY }],
          },
        ]}
      >
        <TouchableOpacity style={styles.searchBar} onPress={handleSearchFocus}>
          <MaterialIcons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
          <Text style={styles.searchPlaceholder}>TV shows, movies and more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <MaterialIcons name="close" size={24} color="#8E8E93" />
        </TouchableOpacity>
      </Animated.View>

      {/* Categories Grid */}
      <FlatList
        data={MOVIE_CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={[styles.categoriesContainer, { paddingTop: SEARCH_BAR_HEIGHT }]}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "#000",
    zIndex: 1000,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchPlaceholder: {
    color: "#8E8E93",
    fontSize: 16,
    flex: 1,
  },
  cancelButton: {
    padding: 4,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  categoryCard: {
    flex: 1,
    height: 120,
    margin: 6,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  categoryImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1C1C1E",
  },
  categoryOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
    padding: 12,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.8)",
  },
})
