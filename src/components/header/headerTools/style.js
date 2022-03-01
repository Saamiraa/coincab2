import styled from "styled-components";

export const Style = styled.div`
    ul{
        display:flex;
        li{
            padding: 20px;
            line-height:2.5;
            a{
                color:rgba(0,0,0,.87);
            }
            &:nth-child(3){
                a{
                    button{
                        color:#ffffff;
                        background:rgb(24, 198, 131);
                        transition: transform 0.2s ease 0s;
                        box-shadow:rgb(0 0 0 / 40%) 0px 2px 15px -3px;
                        border-radius:16px;
                        border:none;
                        &:hover{
                        transform: translateY(-2px);
                        }
                    }
                }
            }
        }
    }
`;
export default Style;