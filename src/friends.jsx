import React from 'react';
import Friend from './friendRow';

const Friends = () => {
    return (
        <div className="friends">
            <div className='friends__invite-bonus'>
                <div className='friends__invite-bonus-inner-wrapper'>
                    <div className="friends__invite-bonus-text">
                        Invite bonus: <span className='highlight'>100(1 lvl)</span>
                    </div>
                </div>
            </div>
            <div className='friends__total-earn'>
                <div className='friends__total-earn-inner-wrapper'>
                    <div className="friends__total-earn-text">
                        Total invite earn: <span className='highlight'>5.000</span>
                    </div>
                </div>
            </div>
            <div className='friends__wrapper'>
                <Friend userName={'username'} balance={100} bonus={250}/>
                <Friend userName={'username'} balance={100} bonus={250}/>
                <Friend userName={'username'} balance={100} bonus={250}/>
                <Friend userName={'username'} balance={100} bonus={250}/>
                <Friend userName={'username'} balance={100} bonus={250}/>
                <Friend userName={'username'} balance={100} bonus={250}/>
            </div>
            <div className="friends__buttons">
                <button className='friends__invite-button'>Прямое приглашение</button>
                <button className='friends__copy-invite-button'><img src="/static/pic/Group.svg" alt="ctrl+c" /></button>
            </div>
        </div>
    )
};

export default Friends;