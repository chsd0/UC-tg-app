import React, {useState, useEffect} from 'react';

const BottomSlider = ({index, setIndex}) => {
    const states = {
        left: 'left',
        center: 'center',
        right: 'right'
    };

    const [currentPosition, setCurrentPosition] = useState(states.center);

    const baseClassName = 'slider__circle';
    const baseOutlineClassName = baseClassName + '-outline';

    const mainCircleOutlineClassName = 'slider__main-circle-outline';
    const mainCircleClassName = 'slider__main-circle';
    
    const [leftCircleClassName, centerCircleClassName, rightCircleClassName] = new Array(3).fill(baseClassName);

    const leftCircleOutlineClassName = baseOutlineClassName + ' left';
    const centerCircleOutlineClassName = baseOutlineClassName + ' center';
    const rightCircleOutlineClassName = baseOutlineClassName + ' right';

    const stateExample = {
        main: {
            outline: mainCircleOutlineClassName + ' center',
            circle: mainCircleClassName,
        },
        left: {
            outline: leftCircleOutlineClassName,
            circle: leftCircleClassName
        },
        center: {
            outline: centerCircleOutlineClassName + ' big',
            circle: centerCircleClassName + ' big',
        },
        right: {
            outline: rightCircleOutlineClassName,
            circle: rightCircleClassName,
        }
    }

    const [classNames, setClassNames] = useState(stateExample);

    const texts = {
        left: 'Total Statistic',
        center: 'Profile Name',
        right: 'Games'
    }

    const [currentText, setCurrentText] = useState(texts.center);

    const applyChanges = (from, to) => {
        switch(from) {
            case states.left:
                classNames.left.outline = leftCircleOutlineClassName;
                classNames.left.circle = leftCircleClassName;
                break;
            case states.center:
                classNames.center.outline = centerCircleOutlineClassName;
                classNames.center.circle = centerCircleClassName;
                break;
            case states.right:
                classNames.right.outline = rightCircleOutlineClassName;
                classNames.right.circle = rightCircleClassName;
                break;
        }

        switch(to) {
            case states.left:
                classNames.left.outline = leftCircleOutlineClassName + ' big';
                classNames.left.circle = leftCircleClassName + ' big';
                classNames.main.outline = mainCircleOutlineClassName + ' left';
                setCurrentPosition(states.left);
                setCurrentText(texts.left);
                break;
            case states.center:
                classNames.center.outline = centerCircleOutlineClassName + ' big';
                classNames.center.circle = centerCircleClassName + ' big';
                classNames.main.outline = mainCircleOutlineClassName + ' center';
                setCurrentPosition(states.center);
                setCurrentText(texts.center);
                break;
            case states.right:
                classNames.right.outline = rightCircleOutlineClassName + ' big';
                classNames.right.circle = rightCircleClassName + ' big';
                classNames.main.outline = mainCircleOutlineClassName + ' right';
                setCurrentPosition(states.right);
                setCurrentText(texts.right);
                break;
        }
    }

    useEffect(() => {
        applyChanges(currentPosition, index === 0 ? states.left : index === 1 ? states.center : states.right);
    }, [index]);

    return (
        <section className='bottom-slider'>
            <p className='bottom-slider__text'>{currentText}</p>
            <div className='bottom-slider__slider slider'>
                <div className='slider__big-line-outline'>
                    <div className='slider__big-line'/>
                </div>
                <div className={classNames.left.outline}>
                    <div className={classNames.left.circle}/>
                </div>
                <div className={classNames.center.outline}>
                  <div className={classNames.center.circle}/>
                </div>
                <div className={classNames.right.outline}>
                    <div className={classNames.right.circle}/>
                </div>
                <div className={classNames.main.outline}>
                  <div className={classNames.main.circle}/>
                </div>
            </div>
        </section>
    )
};

export default BottomSlider;