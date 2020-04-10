import React, { Component } from 'react';
import { Dimensions,FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get("window");

export default class MainPageGuider extends Component {

  click(data){
    console.log(data);
    this.props.navigation.navigate(data);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'HelloWorld'},
            {key: 'HorizontalScrollView'},
            {key: 'TextInputTrans'},
            {key: 'ClickMeButton'},
            {key: 'FlatList'},
            {key: 'SectionList'},
            // {key: 'Joel'},
            // {key: 'John'},
            // {key: 'Jillian'},
            // {key: 'Jimmy'},
            // {key: 'Julie'},
          ]}
          renderItem={({item}) => 
            <TouchableOpacity onPress={(e)=>{
              e.preventDefault();
              this.click(item.key);
            }}>
              <Text style={styles.item}>
                  {item.key}
              </Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    width:width,
    textAlign:"center",
    borderWidth:1,
    borderColor:"#ddd",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})