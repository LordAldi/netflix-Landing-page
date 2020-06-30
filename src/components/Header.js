import React, { Component } from 'react'
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom'
import classes from '../css/Header.module.css'
import { Icon } from 'react-icons-kit'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'


class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className={classes.headertop}>
                    <img className={classes.Img} src={logo}/>
                    <NavLink className={classes.signInbtn} to='/'>Sign In</NavLink>
                </div>

                <div className={classes.headerContent}>
                    <h1 className={classes.title}>See what's next.</h1>
                    <h2 className={classes.subtitle}>WATCH ANYWHERE. CANCEL ANYTIME,</h2>
                    <Link className={classes.mainOfferBtn}>try it now <Icon icon={ic_keyboard_arrow_right} size={37} className={classes.icon}/></Link>
                </div>
            </div>
        )
    }
}

export default Header

