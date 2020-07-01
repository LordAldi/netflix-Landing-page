import React from 'react'
import classes from '../css/TabContentTwo.module.css'
import {Button} from './Button'
import ImgTv from '../images/tab-tv.png'
import ImgMacbook from'../images/tab-macbook.png'
import ImgTablet from '../images/tab-tablet.png'



function TabContentTwo() {
    return (
        <div className={classes.TabContainer}>
            <div className={classes.TabContent}>
                <div className={classes.TabTopContent}>
                    <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere - personalized for you</span>
                    <Button className={classes.Btn}>try it now</Button>
                </div>
                <div className={classes.TabBottomContent}>
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div>
                        <img src={ImgMacbook} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabContentTwo