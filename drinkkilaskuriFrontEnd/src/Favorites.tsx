import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from './themes';
import { FavoritesProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 45,
    // backgroundColor: 'orange',
  },
  drinkContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  tableTitlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 20,
    // backgroundColor: 'white',
  },
  titleTextElements: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  tableTitleText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.beige,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    padding: 1,
    borderRightWidth: 1,
    borderRightRadius: 2,
    borderColor: colors.violet,
  },
  trashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: '100%',
    padding: 1,
  },
  drinkText: {
    fontSize: 15,
    color: colors.beige,
    textAlign: 'center',
  },
  drinkTextNoName: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const Favorites = ({ favorites, addDrink, removeFavorite }: FavoritesProps) => {
  if (!favorites) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        decelerationRate="fast"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {favorites.map((drink) => {
          return (
            <View style={styles.drinkWrapper} key={Math.random()}>
              <View style={styles.drinkContentWrapper}>
                <TouchableOpacity
                  onPress={() =>
                    addDrink(drink.alcPercent, drink.amount, drink.name)
                  }
                >
                  <View style={{ flexDirection: 'row', width: '80%' }}>
                    <View style={{ ...styles.section, width: '50%' }}>
                      {drink.name ? (
                        <Text style={styles.drinkText}>{drink.name}</Text>
                      ) : (
                        <Text style={styles.drinkTextNoName}>nimetön</Text>
                      )}
                    </View>
                    <View style={styles.section}>
                      <Text
                        style={styles.drinkText}
                      >{`${drink.alcPercent} %`}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text
                        style={styles.drinkText}
                      >{`${drink.amount} dl`}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.trashContainer}>
                  <TouchableOpacity onPress={() => removeFavorite(drink)}>
                    <Ionicons
                      name="trash-outline"
                      size={30}
                      color={colors.violet}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Favorites;
