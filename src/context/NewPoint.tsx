import React, { createContext, useContext } from 'react';

import { coords_t, set_xy_t } from '~hooks/useCoords';
import { floor_t, set_floor_t } from '~hooks/useFloor';

export type new_point_t = {
    coords: coords_t | null,
    setXY: set_xy_t
    floor: floor_t,
    setFloor: set_floor_t 
}

const NewPointContext = createContext<new_point_t>({
    coords: null,
    setXY: (x: number, y: number) => {},
    floor: null,
    setFloor: (floorNumber: number, floorName: string) => {}
});

export const useNewPointContext = () => useContext(NewPointContext);

export default NewPointContext;