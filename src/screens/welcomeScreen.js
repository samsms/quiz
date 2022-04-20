/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
   BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';

const welcomeScreen = ({navigation}) => {
  const [{}, dispatch] = useStateValue();
  const [Name, setName] = useState('');
  return (
    <View style={styles.welcomeScreen}>
      <Image style={styles.logo} source={require('../../assets/android.webp')} />
      <Text style={styles.welcomeText}>Welcome </Text>
       <Text style={styles.welcomeText}>Take an android quiz </Text>
      <Text style={styles.sub}>Enter your name to Proceed...</Text>
      <TextInput
        style={styles.inputBox}
        value={Name}
        onChangeText={setName}
        placeholder="Enter Your Name"
        placeholderTextColor="black"
      />
      <Button
        icon={<Icon name="arrow-circle-right" size={70} color="yellow" />}
        type="clear"
        onPress={() => {
          if (Name === '') {
            ToastAndroid.show(
              'Enter your name to proceed...',
              ToastAndroid.CENTER,
            );
          } else {
            dispatch({
              type: 'SET_USER',
              user: Name,
            });
            navigation.navigate('QuestionScreen');
          }
        }}
      />
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

const styles = StyleSheet.create({
   sub: {
    
    color:'white',
    justifyContent: 'center',
  },
  welcomeScreen: {
    flex: 1,
    backgroundColor:'#0aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 300,
  },
  welcomeText: {
    fontSize: 35,
    marginTop: 15,
    color:'white',
    textAlign: 'center',
  },
  inputBox: {
    width: '85%',
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginTop: 60,
    color: 'white',
  },
});
export default welcomeScreen;
