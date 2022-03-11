import React, { useContext, useState } from 'react';

import { GestureResponderEvent, Image, Pressable, ScrollView, View } from 'react-native';
import { Marker } from '~components/Marker';

import { useNewPointContext } from '~context/NewPoint';
import { getPercentValue, imageHeight, imageWidth } from './services/ImageUtils';

const floors = [
    require('~assets/floor0.png'),
    require('~assets/floor1.png'),
    require('~assets/floor2.png'),
    require('~assets/floor3.png'),
    require('~assets/floor4.png')
]

const BuildingImage = 
        (props: { isPressed: boolean, setIsPressed: (v: boolean) => void}):JSX.Element => {
    const { coords, setXY, floor, setFloor } = useNewPointContext();

    function handlePress(event: GestureResponderEvent): void {
        props.setIsPressed(true);
        setXY( 
            getPercentValue(event.nativeEvent.locationX, imageWidth), 
            getPercentValue(event.nativeEvent.locationY, imageHeight));
    }

    return (
        <ScrollView>
            <ScrollView horizontal={true}>
                <Pressable onPress={handlePress} style={{width: imageWidth, height: imageHeight}}>
                    <Image style={{width: imageWidth, height: imageHeight }}
                            source={floors[floor!.number]}
                            resizeMode="contain" />
                </Pressable>
                {props.isPressed ? 
                    <Marker 
                        xPercent={ coords!.x } 
                        yPercent={ coords!.y } 
                        color='red'/> :
                     <View />}
            </ScrollView>
        </ScrollView>
    );
}

export default BuildingImage;