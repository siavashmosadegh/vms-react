import React from 'react';
import {
    FixesAndManagement,
    Item,
    Items,
    OperationAndControlWrapper,
    Wrapper
} from './styles';
import { Outlet } from 'react-router-dom';
import MonitorIcon from '../../Icons/MonitorIcon';
import PlayIcon from '../../Icons/PlayIcon';
import MapIcon from '../../Icons/MapIcon';
import VideoCameraIcon from '../../Icons/VideoCameraIcon';
import SettingsIcon from '../../Icons/SettingsIcon';
import UserIcon from '../../Icons/UserIcon';

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

            <FixesAndManagement>
                <h3>تعمیرات و مدیریت</h3>

                <Items>
                    <Item>
                        <p>مدیریت دستگاه</p>

                        <VideoCameraIcon />
                    </Item>

                    <Item>
                        <p>پیکربندی</p>

                        <SettingsIcon />
                    </Item>

                    <Item>
                        <p>مدیریت حساب</p>

                        <UserIcon />
                    </Item>
                </Items>
            </FixesAndManagement>
            <Outlet />
        </Wrapper>
    );
}

export default Main;