import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Style from './style';

export function Menu(){
    return(
        <Style>
        <ul>
        <li><Link to="/">Coins</Link></li>
        <li><Link to="/">Exchange</Link></li>
        <li><Link to="/">Swap</Link></li>
        </ul>
        </Style>
        
    )
}
export default Menu;