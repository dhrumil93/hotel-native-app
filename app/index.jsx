import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton}>
      <Ionicons name="chevron-back" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuButton}>
      <Ionicons name="menu" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search Hotel hear..."
      placeholderTextColor="#666"
    />
    <TouchableOpacity style={styles.filterButton}>
      <Ionicons name="options-outline" size={20} color="#0077cc" />
    </TouchableOpacity>
  </View>
);

const ListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.listTitle}>All Hotels & Resorts</Text>
    <TouchableOpacity>
      <Text style={styles.seeAll}>See All</Text>
    </TouchableOpacity>
  </View>
);

const RatingStars = ({ count = 4 }) => (
  <View style={styles.stars}>
    {[...Array(count)].map((_, index) => (
      <Ionicons key={index} name="star" size={16} color="#FFD700" />
    ))}
  </View>
);

const HotelCard = ({ hotel }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width - 40; // 40 is total horizontal padding

  return (
    <TouchableOpacity style={[styles.hotelCard, { width: cardWidth }]}>
      <Link href="/details">
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: hotel.imageUrl }}
            style={[styles.hotelImage, { width: cardWidth }]}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={24} color="#0D6EFD" />
          </TouchableOpacity>
        </View>
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName} numberOfLines={1}>
            {hotel.name}
          </Text>
          <Text style={styles.hotelLocation} numberOfLines={1}>
            {hotel.location}
          </Text>
          <View style={styles.ratingContainer}>
            <RatingStars count={hotel.rating} />
            <Text style={styles.reviews}>({hotel.reviews} Reviews)</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>₹{hotel.price}</Text>
            <Text style={styles.perNight}>Per Night</Text>
          </View>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

const hotelData = [
  {
    id: 1,
    name: "Amazia Resort",
    location: "Surat, Gujarat",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    rating: 4,
    reviews: 569,
    price: "8,066",
  },
  {
    id: 2,
    name: "Hotel Holiston",
    location: "Dwarka, Gujarat",
    imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    rating: 4,
    reviews: 226,
    price: "8,066",
  },
];

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <ImageBackground
          style={[styles.imageBackground, { width, height: height * 0.3 }]}
          source={{
            uri: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
          }}
          resizeMode="cover"
        >
          <Text style={[styles.title, { fontSize: width * 0.08 }]}>Hotels</Text>
          <SearchBar />
        </ImageBackground>

        <ListHeader />

        <View style={styles.hotelList}>
          {hotelData.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    overflow: "hidden",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    width: "100%",
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  filterButton: {
    padding: 5,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    color: "#0077cc",
    fontSize: 14,
  },
  hotelList: {
    paddingHorizontal: 20,
  },
  hotelCard: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
  },
  hotelImage: {
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  favoriteButton: {
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "rgba(192,192,192,0.7)",
    borderRadius: 20,
    padding: 8,
    zIndex: 1,
  },
  hotelInfo: {
    padding: 15,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  hotelLocation: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  stars: {
    flexDirection: "row",
    marginRight: 5,
  },
  reviews: {
    fontSize: 12,
    color: "#666",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0077cc",
  },
  perNight: {
    fontSize: 12,
    color: "#666",
    marginLeft: 5,
  },
});
