import React from 'react';

import { Modal, Text, View } from 'react-native';
import Button from '~components/Button';

import { styles } from '~styles/modalStyles';

const AcceptPointModal = 
    (props: {
        isAcceptPointModalVisible: boolean,
        setAcceptPointModalVisible: (v: boolean) => void,
        setAccepted: (v: boolean) => void 
    }):JSX.Element => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.isAcceptPointModalVisible}
                onRequestClose={() => {
                    props.setAcceptPointModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalText}>Do you want to put marker in this spot?</Text>
                            <View style={styles.modalButtons}>
                                <Button 
                                    label={'Cancel'} 
                                    onPress={() => { props.setAcceptPointModalVisible(false); }}
                                    type='danger'
                                />
                                <Button 
                                    label={'Accept'} 
                                    type='primary'
                                    onPress={() => { props.setAccepted(true) }} />
                            </View>
                        </View>                            
                    </View>
                </View>
            </Modal>
        </View>
    );
}



export default AcceptPointModal;