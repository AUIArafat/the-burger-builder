import React from 'react';
import classes from './Layout.css'

const layout = (props) =>(
    <div>
        <div>Burger Builder</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;