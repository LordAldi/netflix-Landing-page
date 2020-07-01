import React from 'react'
import Img from '../images/tab-1-pic.png'
import classes from '../css/TabContentOne.module.css'
import classes2 from '../css/Header.module.css'
import {Button} from './Button'

function TabContentOne() {
    return (
        <div className={classes.TabContentContainer}>
            <div className={classes.Container}>
                <div className={classes.TabContent}>
                    <div>
                        <span style={{marginBottom: '2rem'}}>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</span>
                        <br/>
                        <Button style={{marginTop: '2rem'}}>try it now </Button>
                    </div>
                    
                    <img src={Img}/>
                </div>
            </div>
        </div>
    )
}
export default TabContentOne