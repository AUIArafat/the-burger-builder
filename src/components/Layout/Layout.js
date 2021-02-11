import React from 'react';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) =>(
    <div>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;