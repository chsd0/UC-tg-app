import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const CircularProgress = ({ leftProgress, rightProgress, size = 120, strokeWidth = 10 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const [leftSpring, leftApi] = useSpring(() => ({
        strokeDashoffset: circumference,
        config: { duration: 500 },
    }));

    const [rightSpring, rightApi] = useSpring(() => ({
        strokeDashoffset: circumference,
        config: { duration: 500 },
    }));

    useEffect(() => {
        leftApi.start({
            strokeDashoffset: circumference * (1 - leftProgress / 100),
        });
    }, [leftProgress, leftApi, circumference]);

    useEffect(() => {
        rightApi.start({
            strokeDashoffset: -circumference * (1 - rightProgress / 100),
        });
    }, [rightProgress, rightApi, circumference]);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="#e0e0e0"
                strokeWidth={strokeWidth}
            />
            <animated.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="#ff5722"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={leftSpring.strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
            <animated.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="#6200ea"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={rightSpring.strokeDashoffset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </svg>
    );
};

export default CircularProgress;