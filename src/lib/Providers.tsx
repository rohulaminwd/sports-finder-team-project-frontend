"use client"

import { store } from '@/redux/store';
import { Provider } from 'react-redux'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StyledComponentsRegistry from './AntdRegistry';

const Providers = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    return <Provider store={store}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
};

export default Providers;