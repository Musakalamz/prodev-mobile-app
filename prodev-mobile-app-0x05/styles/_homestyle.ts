import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    padding: 16,
    backgroundColor: "#fff",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#7B7B7B",
  },
  searchControl: {
    marginTop: 4,
    fontSize: 18,
  },
  searchButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },
  filterGroup: {
    flexDirection: "row",
    columnGap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 4,
    width: 80,
  },
  listingContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export { styles };
