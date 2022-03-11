import React from 'react';

import { View } from 'react-native';

import { styles } from './styles';



export function Marker(props: {xPercent: number, yPercent: number, color: string}): JSX.Element {
    return (
        <View 
        style={[
            styles.marker,
            {
                left: props.xPercent.toString() + '%',
                top: props.yPercent.toString() + '%',
                backgroundColor: props.color,
            }
            ]}/>
    );
}
