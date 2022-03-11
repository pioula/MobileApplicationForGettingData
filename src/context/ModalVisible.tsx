import React, { createContext, useContext } from 'react';

export type modal_visible_t = {
    isModalVisible: boolean,
    setModalVisible: (isVisible: boolean) => void
}

const ModalVisibleContext = createContext<modal_visible_t>({
    isModalVisible: false,
    setModalVisible: (isVisible: boolean) => {}
});

export const useModalVisibleContext = () => useContext(ModalVisibleContext);

export default ModalVisibleContext;