import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';

import Button from '~components/Button';
import { useModalVisibleContext } from '~context/ModalVisible';
import { useNewPointContext } from '~context/NewPoint';
import { floors } from '~hooks/useFloor';
import BuildingImage from './BuildingImage';

import { styles } from '~styles/modalStyles';

const BuildingPlanModal = 
    (props: {setAcceptPointModalVisible: (v: boolean) => void}):JSX.Element => {
    const [isPressed, setIsPressed] = useState(false);
    const { isModalVisible, setModalVisible } = useModalVisibleContext();

    const { floor } = useNewPointContext();

    const handleClose = (): void => {
        setIsPressed(false);
        setModalVisible(false);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={ handleClose }
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={ styles.modalText }>
                                { floor === null ? floor /*never*/ : floor!.name }
                            </Text>
                            <BuildingImage 
                                    isPressed={ isPressed } 
                                    setIsPressed={ setIsPressed }/>
                            <View style={styles.modalButtons}>
                                <Button 
                                    label={'Cancel'} 
                                    onPress={ handleClose }
                                            type='danger'/>
                                {!isPressed ?
                                    <Button label={ 'Apply' } disabled/> :
                                    <Button 
                                        label={ 'Apply' } 
                                        type='primary'
                                        onPress={() => { props.setAcceptPointModalVisible(true) }} 
                                    />
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default BuildingPlanModal;