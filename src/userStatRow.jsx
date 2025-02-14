import React, { useEffect, useRef, useState } from 'react';

const numberFormatter = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const UserStatRow = ({user}) => {
    const highlight = user.place === 1 ? 1 
    : user.place === 2 ? 2 : null;

    const outlineClass = highlight === 2 ? 
    'user-statistics__img-outline minor-highlight' 
    :
    'user-statistics__img-outline';

    user.balance = numberFormatter(user.balance);
    return (
        <>
        { highlight === 1 ?
            <div className="user-statistics__wrapper">
                <div className="user-statistics--highlight">
                    <div className="user-statistics__content">
                        <span className='user-statistics__user-place--highlight'>{user.place}</span>
                        <div className="user-statistics__vertical-line"/>
                        <section className='user-statistics__name-and-balance'>
                            <div className="user-statistics__name">{user.name}</div>
                            <div className="user-statistics__balance">{user.balance}</div>
                        </section>
                        <div className="user-statistics__img-outline highlight">
                            <img className='user-statistics__img' src={user.imgUrl}/>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className="user-statistics">
                <div className="user-statistics__content">
                    <span className='user-statistics__user-place'>{user.place}</span>
                    <div className="user-statistics__vertical-line"/>
                    <section className='user-statistics__name-and-balance'>
                        <div className="user-statistics__name">{user.name}</div>
                        <div className="user-statistics__balance">{user.balance}</div>
                    </section>
                    <div className={outlineClass}>
                        <img className='user-statistics__img' src={user.imgUrl}/>
                    </div>
                </div>
            </div>
        }
        </>
    )
};

export default UserStatRow;