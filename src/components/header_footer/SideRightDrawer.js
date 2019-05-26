import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const SideRightDrawer = (props) => {
    return (
        <Drawer
            anchor={"right"}
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component={'nav'}>
                <ListItem button onClick={() => console.log('test')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => console.log('testA')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => console.log('testB')}>
                    HighLights
                </ListItem>
                <ListItem button onClick={() => console.log('testC')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log('testE')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideRightDrawer;