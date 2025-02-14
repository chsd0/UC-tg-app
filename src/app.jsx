import React, { useState, useRef } from 'react';
import { useFetch } from './Ajax';
import Choose from './choose';
import SwipeableViews from 'react-swipeable-views';
import BottomSlider from './bottomSlider';
import StatsScreen from './statsScreen';
import GamesScreen from './gamesScreen';
import Modal from './modal';
import Rewards from './rewards';
import Friends from './friends';

export function App() {
    return (
        <Foo />
    );
}

function Foo() {
    const [chooseActive, setChooseActive] = useState(false);

    const switchToChoose = () => {
        if(!chooseActive) {
            setChooseActive(true);
        }
    };

    // friendsOverReward = null - модалка неактивна
    // = true - модалка друзей
    // = false - модалка наград
    const [friendsOverReward, setFriendsOverReard] = useState(null);

    const [rewardVisibility, setRewardVisibility] = useState(false);
    const [friendsVisibility, setFriendsVisibility] = useState(false);

    const onForceButtonClick = () => {
        if(friendsOverReward !== false) {
            setFriendsOverReard(false);
        }
        if(!rewardVisibility) {
            setRewardVisibility(true);
        }
    }

    const onFriendsButtonClick = () => {
        if(friendsOverReward !== true) {
            setFriendsOverReard(true);
        }
        if(!friendsVisibility) {
            setFriendsVisibility(true);
        }
    }

    const backButtonCallback = () => {
        if(chooseActive) {
            setChooseActive(false);
        }
    }

    const [index, setIndex] = useState(1);

    const views = [
        <StatsScreen key='1'/>,
        <Card key='2' 
              onFriendsButtonClick={onFriendsButtonClick}
              onForceButtonClick={onForceButtonClick}
        />,
        <GamesScreen key='3'
            switchToChoose={switchToChoose}/>,
    ]

    //первая проверка идет на активность игры, далее смотрим по наличии модалки, если есть - смотрим какая активна
    const chooseActiveScreen = () => {
        return (
            chooseActive ? 
            <Choose backButtonCallback={backButtonCallback}/> 
            :
            friendsOverReward === null ? 
            <></> 
            : 
            friendsOverReward ? 
            <Modal visibility={friendsVisibility} setVisibility={setFriendsVisibility}>
                <Friends/>
            </Modal>
            :
            <Modal visibility={rewardVisibility} setVisibility={setRewardVisibility}>
                <Rewards/>
            </Modal>
        )
    }

    return (
        <div className="main">
            {chooseActiveScreen()}
            <article className="card__wrapper">
                <SwipeableViews
                    resistance
                    index={index}
                    onChangeIndex={setIndex}
                    enableMouseEvents
                >
                    {views}
                </SwipeableViews>
                <BottomSlider index={index}
                              setIndex={setIndex}
                />
            </article>
        </div>
    );
}

function Card({ onFriendsButtonClick, onForceButtonClick }) {
    // Пример
    // const {data, loading, error} - пока loading = true, data неопределена, поэтому использовать нельзя
    // чтобы использовать в коде делаем что то типо loading ? 'loading...' : data
    // пример на 130 строке
    // Принимает функция:
    // метод запроса - 'GET', 'POST', 'PUT', 'DELETE'
    // информация в json если надо
    // эндпоинт обращения
    // базовый урл задается в Ajax.js

    // const {data, loading, error} = useFetch('GET', undefined,'/api/data'); - использование

    return (
        <div className='card__content-wrapper'>
            <section className='card__profile-statistics profile-statistics'>
                <div className='profile-statistics__coin-balance'>
                    <span className='profile-statistics__coin-amount'>
                        <div className="profile-statistics__coin-amount-inner-wrapper">
                        240 <span className='profile-statistics__uc'>UC {/* loading ? 'UC' : data.message - применение*/}</span>
                        </div>
                    </span>
                </div>
                <span className='profile-statistics__daily'>
                    <div className='profile-statistics__daily-bonus'>
                        <div className='profile-statistics__daily-bonus-inner-wrapper'>
                            <div className="profile-statistics__daily-bonus-text">
                                Daily bonus: <span className='highlight'>25</span>
                            </div>
                        </div>
                    </div>
                    <div className='profile-statistics__daily-profit'>
                        <div className='profile-statistics__daily-profit-inner-wrapper'>
                            <div className='profile-statistics__daily-profit-text'>
                                Daily profit: <span className='highlight'>1</span>
                            </div>
                        </div>
                    </div>
                </span>
                <div className='profile-statistics__force'>
                    <div className='profile-statistics__force-inner-wrapper'>
                        <div className='profile-statistics__force-text'>
                            Force: <span className='highlight'>5</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='card__main-section main-section'>
                <aside className='main-section__boosters boosters'>
                    <div className="boosters__inner-wrapper">
                        <div className="boosters__content">
                        <span className='boosters__text'>Boosters</span>
                        <div className='boosters__daily-profit-wrapper'>
                            <button className='boosters__daily-profit-button'>Daily profit</button>
                        </div>
                        <div className='boosters__daily-bonus-wrapper'>
                            <button className='boosters__daily-bonus-button'>Daily bonus</button>
                        </div>
                        <div className='boosters__force-wrapper'>
                            <button className='boosters__force-button' onClick={onForceButtonClick}>Force</button>
                        </div>
                        </div>
                    </div>
                </aside>
                <aside className="main-section__friends">
                    <div className='main-section__friends-wrapper'>
                        <button className='main-section__friends-button' onClick={onFriendsButtonClick}>My friends</button>
                    </div>
                </aside>
            </section>
        </div>
    );
}