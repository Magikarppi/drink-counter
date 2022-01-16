import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from './themes';
import { FavoritesProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'black'
  },
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 45,
  },
  drinkContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet
    // backgroundColor: 'dark-grey'
  },
  tableTitlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: 20,
    backgroundColor: 'dark-green'
  },
  tableTitleText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'dark-blue'
  },
  text: {
    fontSize: 10,
    color: colors.white
  },
});

const Favorites = ({ favorites, addDrink, removeFavorite }: FavoritesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tableTitlesWrapper}>
        <Text style={styles.tableTitleText}>Nimi</Text>
        <Text style={styles.tableTitleText}>%</Text>
        <Text style={styles.tableTitleText}>Määrä</Text>
      </View>
      <ScrollView>
        {favorites.map((drink) => {
          return (
            <View style={styles.drinkWrapper}>
              <TouchableOpacity key={Math.random()} onPress={() => addDrink(drink)}>
                <View style={styles.drinkContentWrapper}>
                  <View style={styles.section}>
                    <Text style={styles.text}>
                      {drink.name}
                    </Text>
                  </View>
                  <View style={styles.section}>
                    <Text style={styles.text}>
                      {drink.alcPercent}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>
                      {drink.amount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFavorite(drink)}>
                <Ionicons name='trash-outline' size={30} color={colors.violet} />
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
};

export default Favorites;