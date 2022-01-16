import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from './themes';
import { FavoritesProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
  drinkWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet
    // backgroundColor: 'dark-grey'
  },
  tableTitlesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'dark-green'
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

const Favorites = ({ favoriteDrinks, addDrink }: FavoritesProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tableTitlesWrapper}>
        <Text style={styles.tableTitleText}>Nimi</Text>
        <Text style={styles.tableTitleText}>%</Text>
        <Text style={styles.tableTitleText}>Määrä</Text>
      </View>
      <ScrollView>
        {favoriteDrinks.map((drink) => {
          return (
            <TouchableOpacity key={Math.random()} onPress={() => addDrink(drink)}>
              <View style={styles.drinkWrapper}>
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
          )
        })}
      </ScrollView>
    </View>
  )
};

export default Favorites;