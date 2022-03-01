import styled from "styled-components";
const Style = styled.div `
    ul {
        display: flex;
        li{
            a{
                padding: 27px;
                display:block;
                color:rgba(0,0,0,.87);

                &:hover{
                cursor: pointer;
                background: rgba(0,0,0,.03);
                color: rgba(0,0,0,.95);
                }
            }
        }
    }
`;
export default Style;