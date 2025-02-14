import React from 'react';

const BottomSlider = () => {
    return (
        <section className='bottom-slider'>
            <p className='bottom-slider__text'>Profile name</p>
            <div className='bottom-slider__slider slider'>
                <div className='slider__big-line-outline'>
                    <div className='slider__big-line'/>
                </div>
                <div className='slider__circle-outline left'>
                    <div className='slider__circle left'/>
                </div>
                <div className='slider__circle-outline center'>
                  <div className='slider__circle'/>
                </div>
                <div className='slider__circle-outline right'>
                    <div className='slider__circle right'/>
                </div>
            </div>
        </section>
    )
};

export default BottomSlider;