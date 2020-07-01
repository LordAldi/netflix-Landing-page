import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor'
import TabDevice from './tabs_nav/TabDevice'
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'
import TabPrices from './tabs_nav/TabPrices'
import classes from '../css/TabsNav.module.css';


class TabComponent extends Component {
    state={
        tabIndex: 0
    }
    render() {
        return (
            <div>
                <Tabs className={classes.Tabs} 
                selectedIndex={this.state.tabIndex} 
                onSelect={tabIndex=> this.setState({tabIndex})}> 
                    <TabList className={classes.TabNavContainer}>
                        <Tab className={`${this.state.tabIndex === 0 ? classes.active+' '+classes.TabSelected : null}`} >
                            <TabDoor /> 
                            <p style={{marginBottom: '1.875rem'}}><strong>No Commitments<br/>
                            Cansel online at anytime </strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? classes.active+' '+classes.TabSelected : null}`}> 
                            <TabDevice /> 
                            <p style={{marginTop: '-5.3125rem'}}><strong>Watch Anywhere</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? classes.active+' '+classes.TabSelected : null}`}>
                            <TabPrices/>
                            <p><strong>Pick Your Price</strong></p>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <TabContentOne/>
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo/>
                    </TabPanel>
                    
                    <TabPanel>
                        <TabContentThree/>
                    </TabPanel>
                </Tabs>
                
            </div>
        )
    }
}

export default TabComponent
