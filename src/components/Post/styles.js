import styled from 'styled-components';

export const PostContainer = styled.div`
    padding: 20px;
    color: #3e3e3e;
    background: #fff;
    margin-top: 20px;
    border-radius: 18px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.03);

    .header {
        display: flex;
        align-items: center;
    }

    .avatar {
        width: 48px;
        border-radius: 50%;
    }

    .post-comments {
        margin-top: 20px;
    }

    .divider {
        width: 100%;
        height: 1px;
        background: #eee;
    }

    .comment {
        display: flex;
        margin-top: 20px;

        .header {
            align-items: flex-start;
        }
    }

    .details {
        display: flex;
        margin-left: 15px;
        line-height: 20px;
        flex-direction: column;
            
        span {
            font-family: 'Poppins';
            font-size: 13.5px;
            color: #ccc;
        }
    }

    .comment-details {
        padding: 20px;
        background: #f3f3f3;
        border-radius: 18px;
    }

    .post-content {
        margin-top: 20px;
        font-size: 15.5px;
        line-height: 20px;
        text-align: justify;
    }

    .comment-content {
        margin-top: 5px;
        font-size: 15.5px;
        text-align: justify;
    }
`;
