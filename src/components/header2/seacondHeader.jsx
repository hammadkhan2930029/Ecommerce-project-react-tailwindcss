import React, { useState } from 'react';
import { AppImages } from '../../constant/appImages';
import StylishMenuIcon from '../../assets/images/stylishIcon';
import { MenuDrawer } from '../header/drawer';

export const Second_HeaderComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center w-full bg-white shadow" style={{padding:15}} >
                <div className="md:w-1/5 flex justify-center items-center">
                    <img src={AppImages.logo2} className="w-48 object-contain" alt="logo" />
                </div>
                <div onClick={() => setDrawerOpen(true)} className="cursor-pointer">
                    <StylishMenuIcon />
                </div>
            </div>

            <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        </div>
    );
};
