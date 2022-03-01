import { Fragment } from 'react';
import HeaderTools from './headerTools';
import Logo from './logo';
import Menu from './menu';
import {Row,Col} from "antd";

import './style.css'
export function Header(){
    return(
        <Fragment>
        <Row justify='space-between'>
            <Col>
            <Menu/>
            </Col>
            <Col>
            <Logo/>
            </Col>
            <Col>
            <HeaderTools/>
            </Col>
        </Row>
        </Fragment>
        )
}
export default Header;