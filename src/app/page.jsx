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
        setBgColorClass('bg-purple-500');
    
        setTimeout(() => {
            setLoading(true);
            setText(<><CircularProgress size={18} className="mr-4" /> Please wait a bit longer!</>);
            setBgColorClass('bg-purple-500');
    
            let countdown = 3;
            const intervalId = setInterval(() => {
                setSubText(`Waiting...${countdown}`);
                countdown--;
                if (countdown < 0) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        // Simulate an error scenario
                        const error = Math.random() < -9; // 50% chance of error
                        if (error) {
                            setLoading(false);
                            setBgColorClass('bg-red-500');
                            setText(<><AiOutlineClose className="text-white mr-4" /> Failed!</>);
                            setSubText('Seems like there is an error');
                        } else {
                            setSubText('Response is positive!');
                            setLoading(false);
                            setBgColorClass('bg-green-500');
                            setText(<><AiOutlineCheck className="text-white mr-4" /> Successful</>);
                        }
                    }, 1000);
                }
            }, 1000);
        }, 2000);
    };



    return (
        <div className='bg-blue-400 mt-4'>
            <AsyncButton
                buttonRef={buttonRef}
                onClickRun={handleClick}
            />
        </div>
    );
};

export default ParentComponent;
