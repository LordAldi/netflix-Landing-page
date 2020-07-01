import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import classes from '../css/Footer.module.css'
import {Icon} from 'react-icons-kit'
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld/'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown/'

 class Footer extends Component {
     state={
         lengContent: false
     }
     handleToggle = e =>{
         e.preventDefault();
         this.setState({
             lengContent: !this.state.lengContent
         })
     }
    render() {
        return (
            <div className={classes.FooterContainer}> 
                <span style={{marginLeft: '15%', fontSize: '1.125rem'}}>Questions? <Link>call 1-877-742-1335</Link></span>
                <div className={classes.FooterColomn}>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investor Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to Watch</Link>
                        </li>
                        <li>
                            <Link>Corporate Information</Link>
                        </li>
                        <li>
                            <Link>Netfix Originals</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link>Help Center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of Use</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Card</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>
                    <div className={classes.langBtn} onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20}/>
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown}/>
                    </div>

                </div>
                {this.state.lengContent &&( 
                    <div className={classes.langToggle}>
                    <ul>
                        <li>English</li>
                        <li>French</li>
                    </ul>
                </div>)}
                <span style={{marginLeft:'15%', fontSize:'0.9rem'}}>Netflix Indonesia</span>
            </div>
            
        )
    }
}

export default Footer