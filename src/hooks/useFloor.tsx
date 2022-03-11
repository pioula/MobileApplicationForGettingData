import React, { useState } from 'react';

export type floor_t = {
    number: number,
    name: string
} | null;

export const emptyFloor = null

export type set_floor_t = (floorNumber: number, floorName: string) => void;

export type use_floor_t = [floor_t, set_floor_t]


const useFloor = (): use_floor_t  => {
    const initialState = null
    
    const [floor, setF] = useState<floor_t>(initialState);

    const setFloor = (floorNumber: number, floorName: string): void => {
        setF({ number: floorNumber, name: floorName});
    }

    return [floor, setFloor];
}

export const floors = [
    {
        number: 0,
        name: 'Parter'
    },
    {
        number: 1,
        name: 'Piętro 1'
    },
    {
        number: 2,
        name: 'Piętro 2'
    },
    {
        number: 3,
        name: 'Piętro 3'
    },
    {
        number: 4,
        name: 'Piętro 4'
    },
];

export default useFloor;