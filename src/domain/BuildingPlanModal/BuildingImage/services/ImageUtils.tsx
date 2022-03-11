import React from 'react';

export const imageWidth = 3240;
export const imageHeight = 828;

export const getPercentValue = (v: number, max: number): number => {
    return v / max * 100;
}