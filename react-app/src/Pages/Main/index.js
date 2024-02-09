import React from 'react';
import { Wrapper } from './styles';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Wrapper>
            <p>ستاد نیرو هوایی</p>
            <Outlet />
        </Wrapper>
    );
}

export default Main;