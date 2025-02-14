import React, { useEffect, useRef, useState } from 'react';
import UserStatRow from './userStatRow';

const StatsScreen = () => {
    const users = [
        {
            name: 'Ivan Ivan',
            balance: 3000000,
            imgUrl: '/static/pic/gofman.jpg',
            place: 1,
        }, {
            name: 'Ivan Divan',
            balance: 2000000,
            imgUrl: '/static/pic/gofman.jpg',
            place: 2,
        }, {
            name: 'Ivan Bilan',
            balance: 1000000,
            imgUrl: '/static/pic/gofman.jpg',
            place: 3,
        }, {
            name: 'Ivan Xyian',
            balance: 500000,
            imgUrl: '/static/pic/gofman.jpg',
            place: 4,
        }
    ]
    return (
        <div className='card__content-wrapper'>
            <section className='card__app-statistics app-statistics'>
                <div className='app-statistics__first-row'>
                    <div className='app-statistics__total-users'>
                        <span className='app-statistics__text'>Total users: <span className='app-statistics__text--highlight'>8</span></span>
                    </div>
                    <div className='app-statistics__last-day-active'>
                        <span className='app-statistics__text'>Last 24h active: <span className='app-statistics__text--highlight'>2 users</span></span>
                    </div>
                </div>
                <div className='app-statistics__coin-available'>
                    <span className='app-statistics__text'>Coin available: <span className='app-statistics__text--highlight'>100.000.000</span></span>
                </div>
            </section>
            <section className='card__claim-bonus claim-bonus'>
                <button className='claim-bonus__button'>Claim bonus +1</button>
            </section>
            <div className="card__horizontal-line"/>
            <section className='card__user-section user-section'>
            {users.map((user, index) => (
                <UserStatRow
                key={index}
                user={user}
                />
            ))}
            </section>
        </div>
    )
};

export default StatsScreen;