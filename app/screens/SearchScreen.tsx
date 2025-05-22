// app/screens/SearchScreen.tsx
import React, { useEffect, useState } from "react"
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
  Keyboard,
} from "react-native"
import { DUMMY_SEARCH_RESULTS, SearchResult } from "./DummyData"
import { MaterialIcons } from "@expo/vector-icons"

interface SearchScreenProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  onCancel: () => void
}

export const SearchScreen: React.FC<SearchScreenProps> = ({
  searchQuery,
  setSearchQuery,
  onCancel,
}) => {
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([])
      setIsTyping(false)
    } else {
      setIsTyping(true)
      // Simulate search delay
      const timeoutId = setTimeout(() => {
        const filtered = DUMMY_SEARCH_RESULTS.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        setFilteredResults(filtered)
        setIsTyping(false)
      }, 300)

      return () => clearTimeout(timeoutId)
    }
  }, [searchQuery])

  const renderSearchResult = ({ item }: { item: SearchResult }) => (
    <TouchableOpacity style={styles.resultItem}>
      <Image source={{ uri: item.image }} style={styles.resultImage} />
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.resultGenre}>{item.genre}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <MaterialIcons name="more-horiz" size={24} color="#8E8E93" />
      </TouchableOpacity>
    </TouchableOpacity>
  )

  const renderEmptyState = () => {
    if (isTyping) {
      return (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Searching...</Text>
        </View>
      )
    }

    if (searchQuery.trim() !== "" && filteredResults.length === 0) {
      return (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No results found</Text>
          <Text style={styles.emptySubtext}>Try searching for something else</Text>
        </View>
      )
    }

    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Search Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search here"
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
            returnKeyType="search"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <MaterialIcons name="close" size={24} color="#8E8E93" />
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      {filteredResults.length > 0 && (
        <View style={styles.resultsHeader}>
          <Text style={styles.topResultsText}>Top Results</Text>
        </View>
      )}

      <FlatList
        data={filteredResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.resultsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyState}
      />

      {/* Virtual Keyboard Placeholder */}
      {/* <View style={styles.keyboardPlaceholder} /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchHeader: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
  },
  searchInputContainer: {
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
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    padding: 0,
  },
  cancelButton: {
    padding: 4,
  },
  resultsHeader: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  topResultsText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  resultsList: {
    paddingHorizontal: 16,
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#2C2C2E",
  },
  resultImage: {
    width: 60,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#1C1C1E",
  },
  resultContent: {
    flex: 1,
    marginLeft: 12,
  },
  resultTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  resultGenre: {
    color: "#8E8E93",
    fontSize: 14,
  },
  moreButton: {
    padding: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  emptyText: {
    color: "#8E8E93",
    fontSize: 18,
    fontWeight: "500",
  },
  emptySubtext: {
    color: "#8E8E93",
    fontSize: 14,
    marginTop: 8,
  },
  keyboardPlaceholder: {
    height: 300, // Simulates virtual keyboard space
    backgroundColor: "#1C1C1E",
  },
})
