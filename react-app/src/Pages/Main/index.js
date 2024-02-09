import React from 'react';
import {
    Item,
    Items,
    OperationAndControlWrapper,
    Wrapper
} from './styles';
import { Outlet } from 'react-router-dom';
import MonitorIcon from '../../Icons/MonitorIcon';
import PlayIcon from '../../Icons/PlayIcon';
import MapIcon from '../../Icons/MapIcon';

const Main = () => {
    return (
        <Wrapper>
            <OperationAndControlWrapper>
                <h3>عملیات و کنترل</h3>

                <Items>
                    <Item>
                        <p>دید اصلی</p>

                        <MonitorIcon />
                    </Item>

                    <Item>
                        <p>بازبینی</p>

                        <PlayIcon />
                    </Item>

                    <Item>
                        <p>نقشه الکترونیکی</p>

                        <MapIcon />
                    </Item>
                </Items>
            </OperationAndControlWrapper>
            <Outlet />
        </Wrapper>
    );
}

export default Main;