import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    height: '100%',
  },
  overlay: {
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  overlaytwo: {
    flex: 1,
  },

  favoriteGroup: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 14,
  },
  favoriteOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  rateText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 500,
    marginLeft: 4,
  },
  priceGroup: {
    backgroundColor: '#F9F9F9',
    width: 104,
    height: 45,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 17,
    fontWeight: 500,
  },
  cardTextGroup: {
    width: 205,
  },
  cardLargeText: {
    fontSize: 30,
    fontWeight: 600,
    color: '#fff',
  },
  cardSmallText: {
    fontSize: 15,
    fontWeight: 400,
    color: '#fff',
  },
  cardGroup: {
    flexDirection: 'row',
    columnGap: 40,
    alignItems: 'center',
  },
  group: {
    position: 'absolute',
    bottom: 30,
    left: 10,
  },
});

export { styles };
