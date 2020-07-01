import React from 'react'
import classes from '../css/TabContentThree.module.css'
import {Button} from './Button'
import {Icon} from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'

function TabContentThree() {
    return (
        <div className={classes.TabContainer}>
            <div className={classes.TabContent}>
                <div className={classes.TabTopContent}>
                    <span style={{fontSize: '1.5rem'}}>Choose one plan and watch everything on Netflix</span>
                    <Button className={classes.Btn}>try it now</Button>
                </div>
                <div className={classes.TabBottomContent}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td>
                                    <Icon icon={cross} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td>
                                    <Icon icon={cross} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={cross} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Screen you can watch on at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                                <td>
                                    <Icon icon={checkmark} size={10}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TabContentThree