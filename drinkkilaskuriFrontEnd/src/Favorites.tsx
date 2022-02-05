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
    backgroundColor: 'orange',
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
    color: colors.white,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  trashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'cyan',
  },
  drinkText: {
    fontSize: 15,
    color: colors.white,
  },
});

const Favorites = ({ favorites, addDrink, removeFavorite }: FavoritesProps) => {
  if (!favorites) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '90%',
          height: '10%',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'green',
        }}
      >
        <View style={styles.tableTitlesWrapper}>
          <View style={{ ...styles.titleTextElements, width: '40%' }}>
            <Text style={styles.tableTitleText}>Nimi</Text>
          </View>
          <View style={styles.titleTextElements}>
            <Text style={styles.tableTitleText}>%</Text>
          </View>
          <View style={styles.titleTextElements}>
            <Text style={styles.tableTitleText}>Määrä</Text>
          </View>
        </View>
      </View>
      <ScrollView
        decelerationRate="fast"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {favorites.map((drink) => {
          return (
            <View style={styles.drinkWrapper} key={Math.random()}>
              <View style={styles.drinkContentWrapper}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      addDrink(drink.alcPercent, drink.amount, drink.name)
                    }
                  >
                    <View style={{ flexDirection: 'row', width: '80%' }}>
                      <View style={{ ...styles.section, width: '40%' }}>
                        <Text style={styles.drinkText}>{drink.name}</Text>
                      </View>
                      <View style={styles.section}>
                        <Text style={styles.drinkText}>{drink.alcPercent}</Text>
                      </View>
                      <View style={styles.section}>
                        <Text style={styles.drinkText}>{drink.amount}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeFavorite(drink)}>
                    <View style={{ ...styles.section, width: 40 }}>
                      <Ionicons
                        name="trash-outline"
                        size={30}
                        color={colors.violet}
                      />
                    </View>
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
