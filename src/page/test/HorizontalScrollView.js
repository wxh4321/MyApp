import React,{Component} from 'react';
import {ScrollView, Image, Text } from 'react-native';

export default class HorizontalScrollView extends Component{
    constructor(props){
        super(props);
        this.state = {
            uri : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586518891576&di=07824d173db1fbecea3c3d197c9e51d5&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201409%2F08%2F20140908130732_kVXzh.jpeg'
        };
    }
    render(){
        const {uri} = this.state;
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Image source={{uri: uri, width: 64, height: 64}} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}