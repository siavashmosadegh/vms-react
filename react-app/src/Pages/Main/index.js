import React from 'react';
import { Wrapper } from './styles';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Wrapper>
            <p>مشکین قلم پشمین کون</p>
            <Outlet />
        </Wrapper>
    );
}

export default Main;