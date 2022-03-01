import styled from "styled-components";
const Style = styled.div `
    ul {
        display: flex;
        li{
            a{
                padding: 20px;
                display:block;
                color:rgba(0,0,0,.87);
                &:hover a {
                    background: rgba(0,0,0,.3);
                    color:rgba(0,0,0,.95)

                }
            }

        }
    }
`;
export default Style;