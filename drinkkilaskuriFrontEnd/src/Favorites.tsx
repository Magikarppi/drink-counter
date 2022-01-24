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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'cyan',
  },
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 45,
    backgroundColor: 'orange',
  },
  drinkContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
    backgroundColor: 'dark-grey',
  },
  tableTitlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 20,
    backgroundColor: 'dark-green',
  },
  tableTitleText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  text: {
    fontSize: 10,
    color: colors.white,
  },
});

const Favorites = ({ favorites, addDrink, removeFavorite }: FavoritesProps) => {
  if (!favorites) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.tableTitlesWrapper}>
        <Text style={styles.tableTitleText}>Nimi</Text>
        <Text style={styles.tableTitleText}>%</Text>
        <Text style={styles.tableTitleText}>Määrä</Text>
      </View>
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
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}
                  >
                    <View style={styles.section}>
                      <Text style={styles.text}>{drink.name}</Text>
                    </View>
                    <View style={styles.section}>
                      <Text style={styles.text}>{drink.alcPercent}</Text>
                    </View>
                    <View>
                      <Text style={styles.text}>{drink.amount}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeFavorite(drink)}>
                <Ionicons
                  name="trash-outline"
                  size={30}
                  color={colors.violet}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Favorites;
