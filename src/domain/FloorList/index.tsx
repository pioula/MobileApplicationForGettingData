import React, { useState } from 'react'

import { GestureResponderEvent, View } from 'react-native'

import Button from '~components/Button';
import { useModalVisibleContext } from '~context/ModalVisible';
import { useNewPointContext } from '~context/NewPoint';

import useFloor, { floors, floor_t } from '~hooks/useFloor';

import { styles } from './styles';

const FloorList = ():JSX.Element => {
    const { coords, setXY, floor, setFloor } = useNewPointContext();
    const { setModalVisible } = useModalVisibleContext()


    const onPress = (selectedFloor: { number: number, name: string }): void => {
        setFloor(selectedFloor.number, selectedFloor.name);
        setModalVisible(true);
    }
    
    return (
        <View style={ styles.listLayout }>
            {floors.map((floor) => 
                <Button 
                    label={ floor.name } 
                    type="primary" 
                    key={ floor.name } 
                    onPress={() => {onPress(floor)}}/>
            )}
        </View>
    );
}

export default FloorList;