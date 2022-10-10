import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../../helpers';
import LinearGradient from 'react-native-linear-gradient';

import {LineChart, ContributionGraph} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Humidity({navigation}) {
  const [spo2, setSpo2] = useState();
  const [resp, setResp] = useState([
    {date: '2017-01-02', count: 1},
    {date: '2017-01-03', count: 4},
    {date: '2017-01-04', count: 3},
    {date: '2017-01-05', count: 3},
    {date: '2017-01-06', count: 5},
    {date: '2017-01-30', count: 2},
    {date: '2017-01-31', count: 3},
    {date: '2017-03-01', count: 1},
    {date: '2017-04-02', count: 4},
    {date: '2017-03-05', count: 5},
    {date: '2017-02-30', count: 2},
  ]);
  const [spo2d, setSpod2d] = useState();
  const [blood, setBlood] = useState([
    'Mon',
    'Tue',
    'Wen',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]);
  const [blood2, setBlood2] = useState([31, 35, 38, 30, 33, 34]);
  const [spoAvg, setSpoAvg] = useState();

  useEffect(() => {
    // getSPO2()
    //   .then(response => {
    //     if (response.error) {
    //       console.log('error', response.error);
    //       // showToast(response.error);
    //       return;
    //     }
    //     const {data} = response;
    //     console.log(data);
    //     setResp(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     // setLoading(false);
    //   });
    // getBlood()
    //   .then(response => {
    //     if (response.error) {
    //       console.log('error', response.error);
    //       // showToast(response.error);
    //       return;
    //     }
    //     const {data} = response;
    //     const newArray = data.map(element => element.labels);
    //     const newArray2 = data.map(element => element.datasets);
    //     setBlood(newArray);
    //     setBlood2(newArray2);
    //     let result = newArray2.map(i => Number(i));
    //     console.log(result);
    //     setSpoAvg(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     // setLoading(false);
    //   });
    // // handlePlay();
  }, []);
  return (
    // <View style={styles.mainBody}>
    <LinearGradient
      colors={[COLORS.black, COLORS.primary, COLORS.black]}
      style={styles.mainBody}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.7, 0.9]}>
      <Text style={styles.title}>Blood Temperature</Text>
      {blood2 ? (
        <LineChart
          data={{
            labels: blood,
            datasets: [
              {
                data: blood2,
              },
            ],
          }}
          width={SIZES.width * 0.9} // from react-native
          height={220}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: COLORS.primary,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.secondary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      ) : null}
      {resp && 2 === 2 ? (
        <ContributionGraph
          values={resp}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={SIZES.width * 0.9}
          height={220}
          chartConfig={{
            backgroundColor: COLORS.primary,
            backgroundGradientFrom: COLORS.primary,
            backgroundGradientTo: COLORS.secondary,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
        />
      ) : null}
      <View style={styles.row}>
        <View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>CRITICAL</Text>
            <Text style={styles.title1}>{'>'}90%</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>NORMAL</Text>
            <Text style={styles.title1}>{'>'}80%</Text>
          </View>
          <View style={styles.rowFlex}>
            <Text style={styles.title1}>Danger</Text>
            <Text style={styles.title1}>{'>'}70%</Text>
          </View>
        </View>
        <View style={styles.avgBox}>
          <Text style={styles.title2}>Your Average</Text>
          {/* {spoAvg ? ( */}
          <Text style={styles.title2}>
            {/* {spoAvg.reduce((a, b) => a + b, 0).toFixed(2)} */}
            30
          </Text>
          {/* ) : null} */}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.slide1}>
        <View style={styles.rowFlexBtn}>
          <Icon name="notes-medical" size={30} color={COLORS.white} />
          <Text style={styles.text001}>go back</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
    // </View>
  );
}

const styles = StyleSheet.create({
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  text001: {
    color: COLORS.white,
    fontSize: 15,
    marginLeft: 15,
  },
  slide1: {
    marginTop: SIZES.height * 0.05,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: SIZES.width * 0.5,
    height: 60,
  },
  rowFlexBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  rowFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    // width: SIZES.width * 0.5,
    marginRight: SIZES.width * 0.15,
    borderBottomWidth: 1,
    borderColor: COLORS.secondary,
    marginTop: SIZES.width * 0.04,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 15,
  },
  avgBox: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
    borderRadius: 16,
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 15,
  },
  mainBody: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
    width: SIZES.width * 0.2,
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});
