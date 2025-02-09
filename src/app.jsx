import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import CircularProgress from './CircularProgress';
import Choose from './choose';

export function App() {
    return (
        <Foo />
    );
}

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function Foo() {

    const state = {
        collapsed: false,
    }

    const [currentState, setState] = useState(state);
    const [switchToSurvey, setSwitch] = useState(false);

    // const onSwipeLeft = (refs, direction) => {
    //     const [statsRef, questionRef, diagramRef, quoteRef] = refs;
    //     if(!currentState.collapsed){
    //         const initialValues = {...currentState.questions[0].swipes};
    //         if(direction === 'left') {
    //             initialValues.left += 1;
    //         } else {
    //             initialValues.right += 1;
    //         }
    //         currentState.questions[0].swipes.left = 1;
    //         currentState.questions[0].swipes.right = 1;
    //         questionRef.current.className = 'question-section collapsed';

    //         setState({...currentState, questions: currentState.questions});
    //         setTimeout(() => {
    //             statsRef.current.className = 'statistics active';
    //             quoteRef.current.className = 'statistics__quote active';
    //             diagramRef.current.className = 'statistics__diagram active';
    //             setTimeout(() => {
    //                 currentState.questions[0].swipes = initialValues;
    //                 setState({questions: currentState.questions, collapsed: true});
    //             }, 300);
    //         }, 500);
    //     } else {
    //         quoteRef.current.className = 'statistics__quote';
    //         diagramRef.current.className = 'statistics__diagram';
    //         setTimeout(() => {
    //             statsRef.current.className = 'statistics hidden';
    //             questionRef.current.className = 'question-section';
    //             currentState.questions = currentState.questions.slice(1);
    //             setState({...currentState, collapsed: false});
    //         }, 800);   
    //     }
    // };

    const onSwipeRight = () => {
        if(!switchToSurvey) {
            setTimeout(() => {
                setSwitch(true);
            }, 300);
        }
    };

    const backButtonCallback = () => {
        setSwitch(false);
    };

    return (
        <div className="main">
            {switchToSurvey ?
                <Choose backButtonCallback={backButtonCallback}/> 
                :
                <Card
                    //onSwipeLeft={onSwipeLeft}
                    onSwipeRight={onSwipeRight}
                />
            }
        </div>
    );
}

function Card({ /*onSwipeLeft,*/ onSwipeRight }) {
    const statsRef = useRef(null);
    const questionRef = useRef(null);
    const diagramRef = useRef(null);
    const quoteRef = useRef(null);

    const refs = [statsRef, questionRef, diagramRef,quoteRef];

    const [{ x, y, rotate }, set] = useSpring(() => ({
        x: 0,
        y: 0,
        rotate: 0,
        config: { mass: 1, tension: 350, friction: 40 },
    }));

    const bind = useDrag(({ down, movement: [mx, my], direction: [dx, dy], velocity }) => {
        if (down) {
            const clampedX = clamp(mx, -150, 150);
            const clampedY = clamp(my, -50, 50);
            set({ x: clampedX, y: clampedY, rotate: clampedX / 10 });
        } else {
            if (mx > 100) {
                onSwipeRight(refs, 'right');
            } else if (mx < -100) {
                onSwipeLeft(refs, 'left');
            }
            set.start({ x: 0, y: 0, rotate: 0 });
        }
    });


    return (
        <animated.article
            className="card__wrapper"
            {...bind()}
            style={{
                transform: x.to((x) => `translate3d(${x}px, ${y.get()}px, 0) rotate(${rotate.get()}deg)`),
                touchAction: 'none',
            }}
        >
            {/* <section className='card__profile-statistics profile-statistics'>
                <div className='profile-statistics__coin-balance'>
                    <img className='profile-statistics__coin-icon'/>
                    <span className='profile-statistics__coin-amount'></span>
                </div>
                <span className='profile-statistics__daily'>
                    <p className='profile-statistics__daily-bonus'>Daily bonus: </p>
                    <p className='profile-statistics__daily-profit'>Daily profit: </p>
                </span>
                <p className='profile-statistics__force'>Force: </p>
            </section>
            <section className='card__main-section main-section'>
                <aside className="main-section__friends">
                    <button className='main-section__friends-button'>My friends</button>
                </aside>
                <aside className='main-section__boosters boosters'>
                    <span className='boosters__text'>Boosters</span>
                    <button className='boosters__daily-profit-button'>Daily profit</button>
                    <button className='boosters__daily-bonus-button'>Daily bonus</button>
                    <button className='boosters__force-button'>Force</button>
                </aside>
            </section> */}
        </animated.article>
    );
}