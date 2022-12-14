/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  useEffect(() => {}, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/home.jpg')}>
      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.height * 0.05,
          maxHeight: 100,
        }}>
        <Icon name="pills" size={60} color={COLORS.white} />
        <Text style={styles.title1}>Anim ex consequat </Text>
      </View>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.black]}
        style={styles.overlay}>
        <View style={styles.rowN}>
          <View style={styles.rowNorm}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PlantUpload')}
              style={styles.slide1}>
              <View style={styles.centerFlex}>
                <Icon name="notes-medical" size={30} color={COLORS.white} />
                <Text style={styles.text001}>Take Action</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('IotHome')}
              style={styles.slide1}>
              <View style={styles.centerFlex}>
                <Icon name="notes-medical" size={30} color={COLORS.white} />
                <Text style={styles.text001}>Device</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowNorm}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              style={styles.slide1}>
              <View style={styles.centerFlex}>
                <Icon name="notes-medical" size={30} color={COLORS.white} />
                <Text style={styles.text001}>Health Tips</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={styles.slide1}>
              <View style={styles.centerFlex}>
                <Icon name="notes-medical" size={30} color={COLORS.white} />
                <Text style={styles.text001}>Chat</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    marginTop: SIZES.height * 0.01,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
    minWidth: SIZES.width * 0.3,
    minHeight: SIZES.width * 0.2,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
  },
  overlay: {
    marginTop: SIZES.height * 0.4,
    height: SIZES.height * 0.6,
    // alignItems: 'center',
  },
  title1: {
    color: COLORS.third,
    fontWeight: 'bold',
    fontSize: 40,
  },
  rowNorm: {
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: SIZES.width,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  rowN: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
