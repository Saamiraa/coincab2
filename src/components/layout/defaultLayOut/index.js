import { Fragment } from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import './style.css';


export function DefaultLayOut(props){
    const {children} = props
    return(
        <Fragment>
        <Header/>
        {children}
        <Footer/>
        </Fragment>

        )
}
export default DefaultLayOut