import React, { useEffect, useRef, useState } from 'react';

const BottomSlider = () => {
    return (
        <section className='bottom-slider'>
            <p className='bottom-slider__text'>Profile name</p>
            <div className='bottom-slider__slider slider'>
                <span className='slider__big-line-outline'>
                    <span className='slider__big-line'></span>
                </span>
                <div className='slider__circle-outline'>
                    <div className='slider__circle'></div>
                </div>
                <div className='slider__circle-outline'>
                    <div className='slider__circle'></div>
                </div>
                <div className='slider__big-circle-outline'>
                  <div className='slider__big-circle'></div>
                </div>
                <div className='slider__circle-outline'>
                    <div className='slider__circle'></div>
                </div>
                <div className='slider__circle-outline'>
                    <div className='slider__circle'></div>
                </div>
            </div>
        </section>
    )
};

export default BottomSlider;