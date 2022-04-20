import React from 'react';
import {StyleSheet, Text, View, Linking, BackHandler} from 'react-native';
import {Divider} from 'react-native-elements';
import PieChart from 'react-native-pie-chart';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';
import Icon from 'react-native-vector-icons/FontAwesome';
const congratScreen = () => {
  const [{user, score}] = useStateValue();
  const widthAndHeight = 150;
  const series = [score, 10 - score];
  const sliceColor = ['#00FF00'];
  return (
    <View style={styles.cogratsScreen}>
      <Text style={styles.congratsText}>
        Congratulations {user}, You've scored {score} points
      </Text>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        doughnut={true}
        coverRadius={0.55}
        coverFill={'#FFF'}
      />
      <Divider width={100} />
     
    <Button
        icon={<Icon name="sign-out" size={70} color="red" />}
        type="clear"
        onPress={() => {
        BackHandler.exitApp();
           // navigation.navigate('QuestionScreen');
          }
        }
      />
    </View>
  );
};

export default congratScreen;

const styles = StyleSheet.create({
  cogratsScreen: {
    flex: 1,
     backgroundColor:'#0aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratsText: {
    fontSize: 26,
    color:'white',
    textAlign: 'center',
  },
});
