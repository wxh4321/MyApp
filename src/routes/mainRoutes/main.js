import React from 'react'
import {  createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,  } from 'react-navigation';
import MainPageGuider from "../../page/guide/MainPageGuider";
import HelloWorld from "../../page/test/HelloWorld";

const stackOptions = ({navigation}) => {
    // const { state, goBack } = navigation
    const headerStyle = {
      backgroundColor: '#fff',
        borderBottomWidth: 0,
        height: 40
    }
    const headerTintColor = '#000'
    const headerTitleStyle = {fontSize: 18, color: 'black', fontWeight: 'bold'}
    const headerBackTitle = '返回';
    // const headerBackground =  (
    //   <Image
    //     style={{
    //       flex: 1,
    //       width,
    //     }}
    //     source={require('../../../assets/images/topBarBg.png')}
    //     resizeMode="cover"
    //   />
    // )
    
    return {headerStyle, headerTintColor, headerTitleStyle, headerBackTitle}
}
export const mainNavigator = createStackNavigator(Object.assign({
    //索引页
    MainPageGuider:{screen: MainPageGuider},
    // 测试
    HelloWorld: {screen: HelloWorld, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    
    // 主页
    // TruckInfoContainer: {screen: TruckInfoContainer, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    // QuestionsContainer: {screen: QuestionsContainer, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    // ReserveInfoContainer: {screen: ReserveInfoContainer, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    // CarouselListContainer: {screen: CarouselListContainer, navigationOptions: ({navigation}) => stackOptions({navigation  })}
}));
