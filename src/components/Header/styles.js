import styled from 'styled-components';

export const Head = styled.header`
    display: flex;
    background: #4A90E2;
    justify-content: center;

    nav {
        color: #fff;
        height: 64px;
        width: 1024px;
        display: flex;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;

        img {
            height: 24px;
        }

        ul {
            display: flex;
            align-items: center;

            li {
                list-style: none;

                a {
                    color: #fff;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    
                    i {
                        font-size: 30px;
                        margin-left: 8px;
                    }
                }
            }
        }
    }
`;
