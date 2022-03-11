import React, { useState } from 'react';

export type coords_t = {
    x: number,
    y: number
}

export const emptyCoords = {
    x: 0,
    y: 0
}

export type use_coords_t = [coords_t, (x: number, y: number) => void]

export type set_xy_t = (x: number, y: number) => void;

const useCoords = (_x?: number, _y?: number): use_coords_t  => {
    const initialState = {
        x: _x === undefined ? 0 : _x,
        y: _y === undefined ? 0 : _y
    }
    
    const [coords, setCoords] = useState<coords_t>(initialState);

    const setXY = (x: number, y: number): void => {
        setCoords({ x: x, y: y});
    }

    return [coords, setXY];
}

export default useCoords;