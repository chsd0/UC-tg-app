import React from 'react';

const Friend = ({userName, balance, bonus}) => {
    return (
        <div className='friends__people'>
            <div className='friends__people-inner-wrapper'>
                <div className="friends__people-content">
                    <span className='friends__user-name'>{userName}</span>
                    <span className='friends__user-balance'>{balance}</span>
                    <span className='friends__user-bonus'>+{bonus}</span>
                </div>
            </div>
        </div>
    )
};

export default Friend;