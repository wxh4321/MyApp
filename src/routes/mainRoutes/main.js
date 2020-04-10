import React from 'react'
import {  createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,  } from 'react-navigation';
import MainPageGuider from "../../page/guide/MainPageGuider";
import HelloWorld from "../../page/test/HelloWorld";
import HorizontalScrollView from "../../page/test/HorizontalScrollView";
import TextInputTrans from "../../page/test/TextInputTrans";
import ClickMeButton from "../../page/test/ClickMeButton";
import FlatList from "../../page/test/FlatList";
import SectionList from "../../page/test/SectionList";

const stackOptions = ({navigation}) => {
    // const { state, goBack } = navigation
    const headerStyle = {
      backgroundColor: '#eee',
        borderBottomWidth: 0,
        height: 60
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
    MainPageGuider:{screen: MainPageGuider, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    // 测试
    HelloWorld: {screen: HelloWorld, navigationOptions: ({navigation}) => stackOptions({navigation  })},
    HorizontalScrollView:{screen:HorizontalScrollView,navigationOptions: ({navigation}) => stackOptions({navigation  })},
    TextInputTrans:{screen:TextInputTrans,navigationOptions:({navigation}) => stackOptions({navigation  })},
    ClickMeButton:{screen:ClickMeButton,navigationOptions:({navigation}) => stackOptions({navigation  })},
    FlatList:{screen:FlatList,navigationOptions:({navigation}) => stackOptions({navigation  })},
    SectionList:{screen:SectionList,navigationOptions:({navigation}) => stackOptions({navigation  })},
    
    
    // 主页
   
}));
