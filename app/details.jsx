import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from 'expo-router';

export default function Details() {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945" }}
        style={styles.headerImage}
      />
      
      {/* Back Button */}
      <Link href="/" style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </Link>

      {/* Favourite Button */}
      <TouchableOpacity style={styles.heartButton}>
        <Ionicons name="heart-outline" size={24} color="#0D6EFD" />
      </TouchableOpacity>

      {/* Content Card */}
      <View style={styles.contentCard}>
        {/* Room Features */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={24} color="#666" />
            <Text style={styles.featureText}>King Size Bed</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="people-outline" size={24} color="#666" />
            <Text style={styles.featureText}>Max: 4 Guest / room</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="car-outline" size={24} color="#666" />
            <Text style={styles.featureText}>Parking Area</Text>
          </View>
        </View>

        {/* Hotel Info */}
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>Amazia Resort</Text>
          <View style={styles.locationContainer}>
            <Ionicons name="location-outline" size={20} color="#666" />
            <Text style={styles.location}>Surat, Gujarat</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>4.3</Text>
            <Ionicons name="star" size={16} color="#FFD700" />
          </View>
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>
            This apartment will be a great stay for every age groups and has everything inside what you'll need. It's not just an apartment...
            <Text style={styles.readMore}>Read more</Text>
          </Text>
        </View>

        {/* Room Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Room details</Text>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461" }}
            style={styles.roomImage}
          />
          <View style={styles.roomInfo}>
            <Text style={styles.roomType}>Deluxe Room</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>₹8,066</Text>
              <Text style={styles.perNight}>Per Night</Text>
            </View>
          </View>

          {/* Room Features List */}
          <View style={styles.amenitiesList}>
            {[
              "24-hour Room Service",
              "Free Wi-Fi",
              "Bathroom",
              "24-hour Housekeeping",
              "Air Conditioning",
              "Mineral Water"
            ].map((item, index) => (
              <View key={index} style={styles.amenityItem}>
                <Ionicons name="checkmark-outline" size={20} color="#0D6EFD" />
                <Text style={styles.amenityText}>{item}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.selectButton}>
            <Text style={styles.selectButtonText}>Select room</Text>
          </TouchableOpacity>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book now</Text>
        </TouchableOpacity>

        {/* Amenities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesGrid}>
            {[
              { icon: "tv-outline", label: "Television" },
              { icon: "wifi-outline", label: "Wifi" },
              { icon: "snow-outline", label: "AC" },
              { icon: "call-outline", label: "Telephone" },
              { icon: "water-outline", label: "Hair drier" },
              { icon: "ellipsis-horizontal", label: "More Things" }
            ].map((item, index) => (
              <View key={index} style={styles.amenityBox}>
                <Ionicons name={item.icon} size={24} color="#0D6EFD" />
                <Text style={styles.amenityBoxText}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerImage: {
    width: "100%",
    height: 300,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 8,
    borderRadius: 20,
  },
  heartButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },
  contentCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    marginBottom: 20,
  },
  featureItem: {
    alignItems: "center",
  },
  featureText: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  hotelInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    color: "#666",
    marginLeft: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 5,
    borderRadius: 10,
  },
  rating: {
    marginRight: 5,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 1
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    color: "#666",
    lineHeight: 20,
  },
  readMore: {
    color: "#0D6EFD",
  },
  roomImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  roomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  roomType: {
    fontSize: 18,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0D6EFD",
  },
  perNight: {
    color: "#666",
    marginLeft: 5,
  },
  amenitiesList: {
    marginBottom: 20,
  },
  amenityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  amenityText: {
    marginLeft: 10,
    color: "#666",
  },
  selectButton: {
    borderWidth: 1,
    borderColor: "#0D6EFD",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
  },
  selectButtonText: {
    color: "#0D6EFD",
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#0D6EFD",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 5,
    marginBottom:20
  },
  bookButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // marginBottom:5
  },
  amenityBox: {
    width: "30%",
    backgroundColor: "#f8f9fa",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  amenityBoxText: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
});
