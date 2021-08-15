import { Fragment } from 'react';
import  MainNavigation from './mainNavigation';
import classes from './Layout.module.css';

const layout = (props) => {

    return (
        <Fragment>
           <MainNavigation ></MainNavigation>
           <main className={classes.main}>
               {props.children}
           </main>
        </Fragment>
    );
};


export default layout;