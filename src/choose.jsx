import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import isEqual from 'lodash/isEqual';

const Choose = ({ backButtonCallback }) => {
    const imgSrc = '/static/pic/gofman.jpg';
    const survey = [
        {
            text: 'Дать леща',
            votes: 10,
            imageUrl: imgSrc
        },
        {
            text: 'Сломать колени',
            votes: 3,
            imageUrl: imgSrc
        }, 
        {
            text: 'Вилкой в глаз',
            votes: 5,
            imageUrl: imgSrc
        },
        {
            text: 'В тюрме вилок нет',
            votes: 7,
            imageUrl: imgSrc
        }
    ];

    const [allSurveys, changeSurvey] = useState(survey);
    const [currentSurvey, changeCurrentSurvey] = useState(null);
    const [optionActive, changeOptionActivity] = useState(false);

    const circleRef = useRef(null);
    const outerCircleRef = useRef(null);
    const upperRef = useRef(null);
    const lowerRef = useRef(null);
    const upperPercantageRef = useRef(null);
    const lowerPercantageRef = useRef(null);
    const textUpperRef = useRef(null);
    const textLowerRef = useRef(null);
    const imgUpperRef = useRef(null);
    const imgLowerRef = useRef(null);

    useEffect(() => {
        const initialSurvey = chooseOptions();
        if (initialSurvey) {
            changeCurrentSurvey(initialSurvey);
        }
    }, []);

    const chooseOptions = () => {
        if (allSurveys.length < 2) {
            return null;
        }
        let firstOption = Math.floor(Math.random() * allSurveys.length);
        let secondOption = Math.floor(Math.random() * allSurveys.length);
        while (firstOption === secondOption) {
            secondOption = Math.floor(Math.random() * allSurveys.length);
        }
        return {
            upperQuestion: allSurveys[firstOption],
            lowerQuestion: allSurveys[secondOption]
        };
    };

    const changeOneOption = (preserveUpper) => {
        if (allSurveys.length < 2) {
            return;
        }

        removeOption(preserveUpper);
        changeOneStyle(preserveUpper);
        
        setTimeout(() => {
            continueChange(preserveUpper);
            changeOptionActivity(false);
        }, 300);
    };

    const continueChange = (preserveUpper) => {
        if (preserveUpper) {
            let lowerOption = Math.floor(Math.random() * allSurveys.length);
            while (isEqual(currentSurvey.upperQuestion, allSurveys[lowerOption]) ||
                   isEqual(currentSurvey.lowerQuestion, allSurveys[lowerOption])) {
                lowerOption = Math.floor(Math.random() * allSurveys.length);
            }
            changeCurrentSurvey({
                upperQuestion: currentSurvey.upperQuestion,
                lowerQuestion: allSurveys[lowerOption]
            });
        } else {
            let upperOption = Math.floor(Math.random() * allSurveys.length);
            while (isEqual(currentSurvey.lowerQuestion, allSurveys[upperOption]) ||
                   isEqual(currentSurvey.upperQuestion, allSurveys[upperOption])) {
                upperOption = Math.floor(Math.random() * allSurveys.length);
            }
            changeCurrentSurvey({
                upperQuestion: allSurveys[upperOption],
                lowerQuestion: currentSurvey.lowerQuestion
            });
        }
    }

    const chooseOption = (upper) => {
        if (optionActive) {
            return;
        }
        changeOptionActivity(true);
        const totalVotes = currentSurvey.lowerQuestion.votes + currentSurvey.upperQuestion.votes + 1;
        const upperPercantage = (currentSurvey.upperQuestion.votes + 1 * upper) / totalVotes * 100;
        const lowerPercantage = (currentSurvey.lowerQuestion.votes + 1 * !upper) / totalVotes * 100;
        changeStyle(upper);

        setTimeout(() => {
            if (circleRef.current) {
                circleRef.current.style.fontSize = '18px';
                circleRef.current.innerText = `${upperPercantage.toFixed(0)}%\n${lowerPercantage.toFixed(0)}%`;
            }
        }, 300);

        setTimeout(() => {
            changeOneOption(upper);
        }, 2000);
    };

    const changeStyle = (upper) => {
        if (upper) {
            currentSurvey.upperQuestion.votes += 1;
            if (upperRef.current) {
                upperRef.current.classList.add('big');
            }
            if (lowerRef.current) {
                lowerRef.current.classList.add('small');
            }
        } else {
            currentSurvey.lowerQuestion.votes += 1;
            if (lowerRef.current) {
                lowerRef.current.classList.add('big');
            }
            if (upperRef.current) {
                upperRef.current.classList.add('small');
            }
        }

        if (circleRef.current) {
            circleRef.current.classList.add('active');
        }
        if (outerCircleRef.current) {
            outerCircleRef.current.classList.add('active');
        }
    };

    const changeOneStyle = (upper) => {
        if (circleRef.current) {
            circleRef.current.innerText = '';
        }
        if (circleRef.current) {
            circleRef.current.classList.toggle('active');
        }
        if (outerCircleRef.current) {
            outerCircleRef.current.classList.toggle('active');
        }
        if (upper) {
            if (upperRef.current) {
                upperRef.current.classList.remove('big');
            }
            if (lowerRef.current) {
                lowerRef.current.classList.remove('small');
            }
        } else {
            if (lowerRef.current) {
                lowerRef.current.classList.remove('big');
            }
            if (upperRef.current) {
                upperRef.current.classList.remove('small');
            }
        }
        
    };

    const removeOption = (upper) => {
        if(upper) {
            imgLowerRef.current.classList.add('hide');
            textLowerRef.current.classList.add('hide');

            setTimeout(() => {
                imgLowerRef.current.classList.remove('hide');
                textLowerRef.current.classList.remove('hide');
                // imgLowerRef.current.classList.add('show');
                // textLowerRef.current.classList.add('show');
            }, 500);
            return;
        }
        imgUpperRef.current.classList.add('hide');
        textUpperRef.current.classList.add('hide');
        setTimeout(() => {
            imgUpperRef.current.classList.remove('hide');
            textUpperRef.current.classList.remove('hide');
            // imgUpperRef.current.classList.add('show');
            // textUpperRef.current.classList.add('show');
        }, 500);
    }

    const handleMouseDownUp = (upper) => {
        if(upper){
            textUpperRef.current.classList.toggle('active');
            imgUpperRef.current.classList.toggle('active');
            return;
        }
        textLowerRef.current.classList.toggle('active');
        imgLowerRef.current.classList.toggle('active');
    }

    const mouseOnUpper = () => {
        handleMouseDownUp(true);
    }

    const mouseOnLower = () => {
        handleMouseDownUp(false)
    }

    const chooseUpperOption = () => {
        chooseOption(true);
    };

    const chooseLowerOption = () => {
        chooseOption(false);
    };

    if (!currentSurvey || !currentSurvey.upperQuestion || !currentSurvey.lowerQuestion) {
        return <div>Loading...</div>;
    }

    return (
        <article className='choose__wrapper'>
            <button className='choose__return-to-menu' onClick={backButtonCallback}>🠔</button>
            <section className='choose__first-option' 
                     onClick={chooseUpperOption} 
                     onMouseDown={mouseOnUpper} 
                     onMouseUp={mouseOnUpper} 
                     onTouchStart={mouseOnUpper}
                     onTouchEnd={mouseOnUpper}
                     ref={upperRef}>
                <img className='choose__image choose__image--upper' src={imgSrc} alt="Option 1" ref={imgUpperRef}></img>
                <p className='choose__text choose__text--upper' ref={textUpperRef}>{currentSurvey.upperQuestion.text}</p>
            </section>
            <div className="choose__central-block">
                <div className="choose__outer-circle" ref={outerCircleRef}>
                    <div className="choose__inner-circle" ref={circleRef}>
                        <p className='choose__upper-percantage' ref={upperPercantageRef}></p>
                        <p className='choose__lower-percantage' ref={lowerPercantageRef}></p>
                    </div>
                </div>
            </div>
            <section className='choose__second-option' 
                     onClick={chooseLowerOption} 
                     onMouseDown={mouseOnLower} 
                     onMouseUp={mouseOnLower} 
                     onTouchStart={mouseOnLower}
                     onTouchEnd={mouseOnLower}
                     ref={lowerRef}>
                <p className='choose__text choose__text--lower' ref={textLowerRef}>{currentSurvey.lowerQuestion.text}</p>
                <img className='choose__image choose__image--lower' src={imgSrc} alt="Option 2" ref={imgLowerRef}></img>
            </section>
        </article>
    );
};

export default Choose;