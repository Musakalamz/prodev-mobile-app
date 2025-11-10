import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefefff',
  },
  searchGroup: {
    padding: 16,
    backgroundColor: '#34967C',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 12,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333333',
  },
  searchControl: {
    flex: 1,
    fontSize: 16,
    color: '#BEBEBE',
  },
  searchButton: {
    backgroundColor: '#FFA800',
    padding: 10,
    borderRadius: 50,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    paddingVertical: 10,

    height: 72,
  },
  filterContainer: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  listingContainer: {
    paddingHorizontal: 16,
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  showMoreButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
export { styles };
