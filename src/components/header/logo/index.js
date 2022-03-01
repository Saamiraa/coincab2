import Style from "./style";
import { Link } from "react-router-dom";

export function Logo(){
    return(
        <Style>
        <Link to="/">
            <img src='images/logo.svg'/>
        </Link>
        </Style>
        
    )
}
export default Logo;