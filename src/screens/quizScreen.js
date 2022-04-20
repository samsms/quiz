/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Option from '../components/Option';
import Questions from '../questions.json';

export default function quizScreen({route, navigation}) {
  const {index} = route.params;
  return (
    <View style={{backgroundColor:'#0aa',  flex: 1}}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={styles.questionNo}>
          {index + 1}/{Questions.questions.length}
        </Text>
      </View>
      <Text style={styles.Question}>{Questions.questions[index].question}</Text>
      {Questions.questions[index].answers.map((option, i) => (
        <Option
          value={option}
          navigation={navigation}
          optionIdx={i}
          qnIndex={index}
          key={i}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  questionNo: {
    color: 'yellow',
    backgroundColor:'green',
    width:'100%',
    fontSize: 25,
   padding:10,
  },
  Question: {
    fontSize: 30,
  color:'white',
    margin: 25,
  },
  nextButton: {
   padding:4,
    width: '20%',
    backgroundColor: '#3700B3',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    margin: 20,
    borderRadius: 15,
  },
  nextText: {
    color: 'white',
    fontWeight: '900',
  },
});
