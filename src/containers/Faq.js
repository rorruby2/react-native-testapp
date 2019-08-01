import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView} from 'react-native';


class Faq extends React.Component {
  state={
    faqList: [],
    loading: false
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
    fetch('https://reactnative-240707.firebaseio.com/FAQ.json')
    .then(res => res.json())
    .then(response=>{
      this.setState({
        loading: false
      });
      const arr=[];
      for(let key in response){
        console.log('data=>',response[key])
        arr.push(
          response[key]
        )
      }
      this.setState({
        faqList: arr,
      });
      console.log('data=>',this.state.faqList)
    })
    .catch(err=>console.log(err))
  }


  render() 
  {
    return (
      <ScrollView style={{backgroundColor: "#e4e6e8"}}>
      {
        this.state.loading ?
          <ActivityIndicator color = '#fff' size = "large" style = {styles.activityIndicator}/>
        :
        <View >
          <Text style={styles.TextStyle}>Frequently Asked Questions</Text>
          { this.state.faqList.map((item, key)=>
            (
              <Text style={styles.questioList}> { item } </Text>)
            )
          }
        </View>
      }
    </ScrollView>
    );
  }
}

export default Faq;

const styles = StyleSheet.create({
  questioList: { 
    margin: 7, 
    backgroundColor: 'white',
    padding: 20
  },
  TextStyle:{
    fontSize : 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: 'black'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }

});