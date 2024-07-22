import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { AiOutlineLoading3Quarters, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const AsyncButton = ({ onClick, onSuccess, onError, initialText = 'Click Me!' }) => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState(initialText);
    const [subText, setSubText] = useState('');
    const [bgColorClass, setBgColorClass] = useState('bg-gray-500');

    const handleClick = async () => {
        try {
            setLoading(true);
            setText(<><CircularProgress size={18} className="mr-4" /> Please wait!</>);
            setSubText('Sending request');
            setBgColorClass('bg-gray-500');

            const result = await onClick();

            onSuccess(result);
            setSubText('Response is positive!');
            setLoading(false);
            setBgColorClass('bg-green-500');
            setText(<><AiOutlineCheck className="text-white mr-4" /> Success!</>);
        } catch (error) {
            console.error('Error:', error);
            onError();
            setSubText('The response was corrupt or negative');
            setLoading(false);
            setBgColorClass('bg-red-500');
            setText(<><AiOutlineClose className="text-white mr-4" /> Error!</>);
        }
    };

    return (
        <div className={`flex flex-col items-center gap-2`}>
            <button
                className={`py-2 px-4 text-white rounded-3xl ${bgColorClass} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
                onClick={handleClick}
                style={{ transition: 'background-color 0.3s ease' }}
            >
                <div className="flex items-center justify-center">
                    {text}
                </div>
            </button>
            {subText && <div className="text-xs text-white mt-1">{subText}</div>}
        </div>
    );
};

export default AsyncButton;
