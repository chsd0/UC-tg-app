import React, { useEffect, useRef, useState } from 'react';

const GamesScreen = ({switchToChoose}) => {
    return (
        <div className='card__content-wrapper'>
            <section className='card__voprosiki voprosiki'>
                <span className='voprosiki__big'>?</span>
                <span className='voprosiki__left'>?</span>
                <span className='voprosiki__right'>?</span>
                <span className='voprosiki__up'>?</span>
            </section>
            <section className='card__button-section button-section'>
                <div className="button-section__button-wrapper">
                    <button className='button-section__funny-choice' onClick={switchToChoose}>
                        <span className='button-section__funny-choice-text'>FUNNY CHOICE <img src='/static/pic/Vector 41.svg' /></span>
                    </button>
                </div>
                <button className='button-section__something-else'>SOMETHING ELSE...</button>
            </section>
        </div>
    )
};

export default GamesScreen;