import React from 'react';

import { GestureResponderEvent, Pressable, Text, View } from 'react-native';

import { rippleStyle, styles } from './styles';

type ButtonProps = {
    label: string,
    type?: 'primary' | 'danger',
    onPress?: (event: GestureResponderEvent) => void
    disabled?: boolean
}

const Button = (props: ButtonProps):JSX.Element => {
    return (
        <View>
            {props.disabled ? 
                <View style = { [styles.buttonStyle, styles.bg_disabled] }>
                    <Text style={ styles.textStyle}>{ props.label }</Text>
                </View> :
                <Pressable style={ [styles.buttonStyle, props.type === 'primary' ? styles.bg_primary : styles.bg_danger] } onPress={ props.onPress } android_ripple={ rippleStyle }>
                    <Text style={ styles.textStyle }>{ props.label }</Text>
                </Pressable>
            }   
        </View>
    )
}

export default Button;