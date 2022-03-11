import React, { useEffect, useState } from 'react';

import { View } from 'react-native';

import FlashMessage, { showMessage } from 'react-native-flash-message';

import AcceptPointModal from '~domain/AcceptPointModal';
import BuildingPlanModal from '~domain/BuildingPlanModal';
import FloorList from '~domain/FloorList';

import ModalVisibleContext from '~context/ModalVisible';
import NewPointContext from '~context/NewPoint';

import useCoords from '~hooks/useCoords';
import useFloor from '~hooks/useFloor';


const App = (): JSX.Element => {
    const [floor, setFloor] = useFloor();
    const [coords, setXY] = useCoords(0, 0);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isAcceptPointModalVisible, setAcceptPointModalVisible] = useState(false);
    
    const [isAccepted, setAccepted] = useState(false);

    useEffect(
        () => {
            if (isAccepted === true) {
                console.log('Great Success!');
                console.log(`floor: ${floor?.number} \n x: ${coords.x} \n y: ${coords.y}`)
                setAccepted(false);
                setAcceptPointModalVisible(false);
                showMessage({
                    message: "Success!",
                    type: "success"
                });
            }
        }, 
        [isAccepted]
    )

    return (
        <View>
            <ModalVisibleContext.Provider value={{ isModalVisible, setModalVisible }}>
                <NewPointContext.Provider value={{ coords, setXY, floor, setFloor }}>
                    <FloorList />
                    <BuildingPlanModal 
                        setAcceptPointModalVisible={ setAcceptPointModalVisible }/>
                </NewPointContext.Provider>
            </ModalVisibleContext.Provider>
            <AcceptPointModal 
                isAcceptPointModalVisible={ isAcceptPointModalVisible }
                setAcceptPointModalVisible={ setAcceptPointModalVisible }
                setAccepted={ setAccepted } />
                <FlashMessage position="top" />
        </View> 
    )
}

export default App;