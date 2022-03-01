import styled from "styled-components";

export const Style = styled.div `
a{
    display:block;
    padding: 27px;

    &:hover{
        cursor: pointer;
        background: rgba(0,0,0,.03);
        color: rgba(0,0,0,.95);
    }

    img{

        width: 80px;
        height: auto;
        display: block;
    }
}    


`;
export default Style;
