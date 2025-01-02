import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Details() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        }}
        style={styles.headerImage}
      />

      {/* Back Button */}
      <Link href="/" style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </Link>

      {/* Heart Button */}
      <TouchableOpacity style={styles.heartButton}>
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.contentCard}>
        {/* Room Features */}
        <View style={styles.featuresRow}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={24} color="#006B7F" />
            <Text style={styles.featureText}>King Size Bed</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="people-outline" size={24} color="#006B7F" />
            <Text style={styles.featureText}>Max: 4 Guest / room</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="car-outline" size={24} color="#006B7F" />
            <Text style={styles.featureText}>Parking Area</Text>
          </View>
        </View>

        {/* Hotel Info */}
        <View style={styles.hotelHeader}>
          <Text style={styles.hotelName}>Amazia Resort</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={20} color="#666" />
            <Text style={styles.location}>Surat, Gujarat</Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.ratingText}>4.3</Text>
            <Ionicons name="star" size={16} color="#FFD700" />
          </View>
        </View>

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>
            This apartment will be a great stay for every age groups and has
            everything inside what you'll need. It's not just an apartment...
            <Text style={styles.readMore}>Read more</Text>
          </Text>
        </View>

        {/* Room Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Room details</Text>
          <View style={styles.roomCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
              }}
              style={styles.roomImage}
            />
            <View style={styles.roomHeader}>
              <Text style={styles.roomType}>Deluxe Room</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>₹18,066</Text>
                <Text style={styles.perNight}>Per Night</Text>
              </View>
            </View>

            <View style={styles.amenitiesList}>
              {[
                "24-hour Room Service",
                "Free Wi-Fi",
                "Bathroom",
                "24-hour Housekeeping",
                "Air Conditioning",
                "Mineral Water",
              ].map((item, index) => (
                <View key={index} style={styles.amenityItem}>
                  <Ionicons
                    name="checkmark-outline"
                    size={20}
                    color="#006B7F"
                  />
                  <Text style={styles.amenityText}>{item}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity style={styles.selectButton}>
              <Text style={styles.selectButtonText}>Select room</Text>
            </TouchableOpacity>

            {/* Book Now Button */}
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book now</Text>
            </TouchableOpacity>

            {/* Amenities Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Amenities</Text>
              <View style={styles.amenitiesGrid}>
                {[
                  { icon: "tv", label: "Television" },
                  { icon: "water", label: "Hair drier" },
                  { icon: "snow", label: "AC" },

                  { icon: "call", label: "Telephone" },
                  { icon: "wifi", label: "Wifi" },
                  { icon: "ellipsis-horizontal", label: "More Things" },
                ].map((item, index) => (
                  <View key={index} style={styles.amenityBox}>
                    <Ionicons name={item.icon} size={20} color="#006B7F" />
                    <Text style={styles.amenityBoxText}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Hotel Location Section */}
            <View style={styles.section}>
              <View style={styles.titleRow}>
                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Hotel Location</Text>
              </View>
              <View style={styles.mapContainer}>
                <Image
                  source={require("../assets/images/900b6bc090a0308d3b17be2e959087cf 1.png")}
                  style={styles.mapImage}
                />
                <View style={styles.mapOverlay} />
              </View>
            </View>

            {/* Property Policy Section */}
            <View style={styles.section}>
              <View style={styles.titleRow}>
                <View style={styles.horizontalLine} />
                <Text style={styles.sectionTitle}>Property policy</Text>
                <Text style={styles.readMore1}>Read more</Text>
              </View>

              <Text style={styles.policyTitle}>Children and extra beds</Text>
              <Text style={styles.policyText}>
                Extra beds are dependent on the room you choose. Please check
                the individual room capacity for more details.
              </Text>

              <View style={styles.policyCard}>
                <Text style={styles.policyCardTitle}>Infant 0-2 year</Text>
                <Text style={styles.policyCardText}>
                  Stay for free if using existing bedding.
                </Text>
                <Text style={styles.policyCardNote}>
                  Baby cot/crib available upon request
                </Text>
              </View>

              <View style={styles.policyCard}>
                <Text style={styles.policyCardTitle}>Children 3-11 year</Text>
                <Text style={styles.policyCardText}>Must use an extra bed</Text>
                <Text style={styles.policyCardNote}>
                  Baby cot/crib available upon request
                </Text>
              </View>

              <View style={styles.policyCard}>
                <Text style={styles.policyCardTitle}>Adults 12 & above</Text>
                <Text style={styles.policyCardText}>
                  Must use an extra bed which will incur an additional charge.
                </Text>
              </View>

              <Text style={styles.policyTitle}>Others</Text>
              <View style={styles.bulletPoint}>
                <Text style={styles.policyText}>
                  • The property does not permit food and beverages from
                  outside.
                </Text>
                <Text style={styles.policyText}>
                  • When booking more than 5 rooms, different policies and
                  additional supplements may apply.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImage: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 8,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  heartButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#006B7F",
    padding: 8,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  contentCard: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 20,
    borderWidth: 0,
    borderColor: "#E8E8E8",
  },
  hotelHeader: {
    marginBottom: 20,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  ratingBox: {
    position: "absolute",
    right: 0,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 4,
    color: "#333",
  },
  roomCard: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 15,
    padding: 15,
  },
  roomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  featureItem: {
    alignItems: "center",
  },
  featureText: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  location: {
    color: "#666",
    marginLeft: 5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    lineHeight: 24,
  },
  description: {
    color: "#666",
    lineHeight: 20,
  },
  readMore: {
    color: "#006B7F",
  },
  roomImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#006B7F",
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
    borderColor: "#006B7F",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
  },
  selectButtonText: {
    color: "#006B7F",
    fontWeight: "bold",
  },
  bookButton: {
    backgroundColor: "#006B7F",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  bookButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  amenityBox: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#006B7F",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    backgroundColor: "white",
  },
  amenityBoxText: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  horizontalLine: {
    width: 24,
    height: 2,
    backgroundColor: "#000",
    marginRight: 15,
    marginBottom: 15,
  },
  mapContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
  },
  mapImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  mapOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 107, 127, 0.3)",
    borderRadius: 15,
  },
  readMore1: {
    color: "#006B7F",
    marginLeft: 35,
  },
  policyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  policyText: {
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  policyCard: {
    borderWidth: 1,
    borderColor: "#006B7F",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  policyCardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 5,
  },
  policyCardText: {
    color: "#666",
    fontSize: 14,
    marginBottom: 5,
  },
  policyCardNote: {
    color: "#999",
    fontSize: 12,
    fontStyle: "italic",
  },
  bulletPoint: {
    paddingLeft: 5,
  },
});
