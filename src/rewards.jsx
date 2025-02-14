import React from 'react';

const Rewards = () => {
    return (
        <div className='rewards'>
            <button className='rewards__button'>
                <div className="rewards__button-level">1 LVL</div>
                <div className="rewards__vertical-line"/>
                <span className='rewards__reward'>Reward</span>
                <span className='rewards__price'>Price</span>
            </button>
            <button className='rewards__button'>
                <div className="rewards__button-level">2 LVL</div>
                <div className="rewards__vertical-line"/>
                <span className='rewards__reward'>Reward</span>
                <span className='rewards__price'>Price</span>
            </button>
            <button className='rewards__button'>
                <div className="rewards__button-level">3 LVL</div>
                <div className="rewards__vertical-line"/>
                <span className='rewards__reward'>Reward</span>
                <span className='rewards__price'>Price</span>
            </button>
            <button className='rewards__button'>
                <div className="rewards__button-level">4 LVL</div>
                <div className="rewards__vertical-line"/>
                <span className='rewards__reward'>Reward</span>
                <span className='rewards__price'>Price</span>
            </button>
        </div>
    )
};

export default Rewards;

