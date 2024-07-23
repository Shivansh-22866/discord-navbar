"use client"
import React from 'react';
import AsyncButton from '@/components/AsyncButton';
import useAsyncButton from '@/components/ui/useAsyncButton';

import { CircularProgress } from '@mui/material';
import { AiOutlineLoading3Quarters, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
// import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const ParentComponent = () => {
    const buttonRef = useAsyncButton('Click Me!');
    const { setSubText, setLoading, setBgColorClass, setText } = buttonRef.current;

    const handleClick = async () => {
        setLoading(true);
        setText(<><CircularProgress size={18} className="mr-4" /> Please wait!</>);
        setSubText('Sending request');
        setBgColorClass(' bg-grey-500 ');

        setTimeout(() => {
            setTimeout(() => {
                setLoading(true);
                setText(<><CircularProgress size={18} className="mr-4" /> Please wait a bit longer!</>);
                setSubText('Sending request');
                setBgColorClass('bg-gray-500');

                setTimeout(() => {
                    setSubText('Response is positive!');
                    setLoading(false);
                    setBgColorClass('bg-red-500');
                    setText(<><AiOutlineCheck className="text-white mr-4" /> Successful</>);
                }, 2000);
            }, 2000);
        }, 2000);
    };



    return (
        <div className='bg-blue-400'>
            <AsyncButton
                buttonRef={buttonRef}
                onClickRun={handleClick}
            />
        </div>
    );
};

export default ParentComponent;
