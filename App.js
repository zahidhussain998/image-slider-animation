
import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { borderRightColor, borderStartColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/8159457/media/9e7bfb83b0bd704e941baa7a44282b22.jpg?compress=1&resize=1200x1200&vertical=top',
    'https://cdn.dribbble.com/users/3281732/screenshots/7226813/media/b3c0be6dd52619d555f25af859833fc6.jpg?compress=1&resize=1200x1200&vertical=top',
    'https://cdn.dribbble.com/users/3281732/screenshots/7284562/media/d65a4ce1bc2754d4a94b4884ae4c90dc.jpg?compress=1&resize=1200x1200&vertical=top',
    'https://cdn.dribbble.com/users/3281732/screenshots/14012664/media/bf04ac321c5b87c86879b6e714e6f562.jpeg?compress=1&resize=1200x1200&vertical=top',
    'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/7012328/media/bcd672685071ca4da27d5f3ea44ac5db.jpg?compress=1&resize=1200x1200&vertical=top',
    'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <StatusBar hidden />
          <View style={StyleSheet.absoluteFillObject}>


            {data.map((image, index) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width
              ]
          
          
             const  opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0,1,0]})

                return <Animated.Image
                    key={`image-${index}`}
                    source={{uri: image}}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {
                            opacity
                        }
                    ]}

                    
                    blurRadius={50}
                />
                })}
          </View>


            <Animated.FlatList
            data={data}
             onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            pagingEnabled
            renderItem={({ item }) => {
            return <View style=
                    {{width, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{ uri: item }} style={{ width: imageW,
                    height: imageH, 
                    resizeMode: 'cover',
                    borderRadius: 16,
                 }} />
            </View>
            
        }}
            />
          
             
        </View>
    );
};