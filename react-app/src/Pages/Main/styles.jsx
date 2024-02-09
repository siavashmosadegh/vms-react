import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OperationAndControlWrapper = styled.div`
    width: 80%;
    background-color: rgb(229,229,229);
    border-radius: 20px;

    h3 {
        text-align: right;
        margin-right: 30px;
    }
`;

export const Items = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 12px;
`;

export const Item = styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    padding-inline: 10px;
    margin-left: 50px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    p {
        margin-left: 5px;
    }
`;