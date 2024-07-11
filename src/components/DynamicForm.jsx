'use client';
import { Button, ButtonBase } from '@mui/material';
import React, { useState } from 'react';

const DynamicForm = () => {
    // State for the main form fields
    const [party1Name, setParty1Name] = useState('');
    const [date, setDate] = useState('');
    const [party2Name, setParty2Name] = useState('');
    const [otherStuff, setOtherStuff] = useState('');

    // State for YouTube section
    const [youtubeShorts, setYoutubeShorts] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([]);

    // State for Instagram section
    const [instagramPosts, setInstagramPosts] = useState([]);
    const [instagramStories, setInstagramStories] = useState([]);

    // Function to handle adding items to YouTube section
    const addYoutubeItem = (section) => {
        if (section === 'shorts') {
            setYoutubeShorts([...youtubeShorts, { date: '', time: '', details: '' }]);
        } else if (section === 'videos') {
            setYoutubeVideos([...youtubeVideos, { date: '', time: '', details: '' }]);
        }
    };

    // Function to handle removing items from YouTube section
    const removeYoutubeItem = (section, index) => {
        if (section === 'shorts') {
            const updatedShorts = [...youtubeShorts];
            updatedShorts.splice(index, 1);
            setYoutubeShorts(updatedShorts);
        } else if (section === 'videos') {
            const updatedVideos = [...youtubeVideos];
            updatedVideos.splice(index, 1);
            setYoutubeVideos(updatedVideos);
        }
    };

    // Function to handle adding items to Instagram section
    const addInstagramItem = (section) => {
        if (section === 'posts') {
            setInstagramPosts([...instagramPosts, { date: '', time: '', details: '' }]);
        } else if (section === 'stories') {
            setInstagramStories([...instagramStories, { date: '', time: '', details: '' }]);
        }
    };

    // Function to handle removing items from Instagram section
    const removeInstagramItem = (section, index) => {
        if (section === 'posts') {
            const updatedPosts = [...instagramPosts];
            updatedPosts.splice(index, 1);
            setInstagramPosts(updatedPosts);
        } else if (section === 'stories') {
            const updatedStories = [...instagramStories];
            updatedStories.splice(index, 1);
            setInstagramStories(updatedStories);
        }
    };

    // Function to handle JSON representation of the form data
    const generateJSON = () => {
        const formData = {
            party1Name,
            date,
            party2Name,
            otherStuff,
            youtube: {
                shorts: youtubeShorts,
                videos: youtubeVideos
            },
            instagram: {
                posts: instagramPosts,
                stories: instagramStories
            }
        };
        console.log(JSON.stringify(formData, null, 2));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Dynamic Nested Form</h2>

            <div className="mb-4">
                <label className="block mb-4">Party 1 Name:</label>
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 w-full rounded-full"
                    value={party1Name}
                    onChange={(e) => setParty1Name(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-4">Date:</label>
                <input
                    type="date"
                    className="border border-gray-300 px-3 py-2 w-full rounded-full"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-4">Party 2 Name:</label>
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 w-full rounded-full"
                    value={party2Name}
                    onChange={(e) => setParty2Name(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block mb-4">Other Stuff:</label>
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-2 w-full rounded-full"
                    value={otherStuff}
                    onChange={(e) => setOtherStuff(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">YouTube</h3>

                <div className='ml-16 ml-'>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Shorts 
                            <ButtonBase
                                className="rounded-full font-bold px-4 py-2"
                                onClick={() => addYoutubeItem('shorts')}
                            >
                                +
                            </ButtonBase>
                        </h4>
                        {youtubeShorts.map((item, index) => (
                            <div key={index} className="m-8 flex flex-col w-3/4 gap-2">
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="border border-gray-300 px-3 py-2 rounded-full"
                                    value={item.date}
                                    onChange={(e) => {
                                        const updatedShorts = [...youtubeShorts];
                                        updatedShorts[index].date = e.target.value;
                                        setYoutubeShorts(updatedShorts);
                                    }}
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.time}
                                    onChange={(e) => {
                                        const updatedShorts = [...youtubeShorts];
                                        updatedShorts[index].time = e.target.value;
                                        setYoutubeShorts(updatedShorts);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Details"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.details}
                                    onChange={(e) => {
                                        const updatedShorts = [...youtubeShorts];
                                        updatedShorts[index].details = e.target.value;
                                        setYoutubeShorts(updatedShorts);
                                    }}
                                />
                                <button
                                    className="bg-red-500 text-white px-3 py-2 ml-2 rounded-full"
                                    onClick={() => removeYoutubeItem('shorts', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-2">Videos
                            <ButtonBase
                                className="px-4 py-2 rounded-full"
                                onClick={() => addYoutubeItem('videos')}
                            >
                                +
                            </ButtonBase>
                        </h4>
                        {youtubeVideos.map((item, index) => (
                            <div key={index} className="m-8 flex flex-col w-3/4 gap-2">
                                <input
                                    type="date"
                                    placeholder="Date"
                                    className="border border-gray-300 px-3 py-2 rounded-full"
                                    value={item.date}
                                    onChange={(e) => {
                                        const updatedVideos = [...youtubeVideos];
                                        updatedVideos[index].date = e.target.value;
                                        setYoutubeVideos(updatedVideos);
                                    }}
                                />
                                <input
                                    type="time"
                                    placeholder="Time"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.time}
                                    onChange={(e) => {
                                        const updatedVideos = [...youtubeVideos];
                                        updatedVideos[index].time = e.target.value;
                                        setYoutubeVideos(updatedVideos);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Details"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.details}
                                    onChange={(e) => {
                                        const updatedVideos = [...youtubeVideos];
                                        updatedVideos[index].details = e.target.value;
                                        setYoutubeVideos(updatedVideos);
                                    }}
                                />
                                <button
                                    className="bg-red-500 text-white px-3 py-2 rounded-full ml-2"
                                    onClick={() => removeYoutubeItem('videos', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Instagram</h3>
                    <div className='ml-16'>
                        <div>
                        <h4 className="text-lg font-bold">Posts
                        <ButtonBase
                            className="rounded-full font-bold px-4 py-2"
                            onClick={() => addInstagramItem('posts')}
                        >
                            +
                        </ButtonBase>
                        </h4>
                        {instagramPosts.map((item, index) => (
                            <div key={index} className="m-8 flex flex-col w-3/4 gap-2">
                                <input
                                    type="text"
                                    placeholder="Date"
                                    className="border border-gray-300 px-3 py-2 rounded-full"
                                    value={item.date}
                                    onChange={(e) => {
                                        const updatedPosts = [...instagramPosts];
                                        updatedPosts[index].date = e.target.value;
                                        setInstagramPosts(updatedPosts);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Time"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.time}
                                    onChange={(e) => {
                                        const updatedPosts = [...instagramPosts];
                                        updatedPosts[index].time = e.target.value;
                                        setInstagramPosts(updatedPosts);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Details"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.details}
                                    onChange={(e) => {
                                        const updatedPosts = [...instagramPosts];
                                        updatedPosts[index].details = e.target.value;
                                        setInstagramPosts(updatedPosts);
                                    }}
                                />
                                <button
                                    className="bg-red-500 text-white px-3 py-2 rounded-full ml-2"
                                    onClick={() => removeInstagramItem('posts', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-2">Stories
                        <ButtonBase
                            className="rounded-full font-bold px-4 py-2"
                            onClick={() => addInstagramItem('stories')}
                        >
                            +
                        </ButtonBase>
                        </h4>
                        {instagramStories.map((item, index) => (
                            <div key={index} className="m-8 flex flex-col w-3/4 gap-2">
                                <input
                                    type="text"
                                    placeholder="Date"
                                    className="border border-gray-300 px-3 py-2 rounded-full"
                                    value={item.date}
                                    onChange={(e) => {
                                        const updatedStories = [...instagramStories];
                                        updatedStories[index].date = e.target.value;
                                        setInstagramStories(updatedStories);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Time"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.time}
                                    onChange={(e) => {
                                        const updatedStories = [...instagramStories];
                                        updatedStories[index].time = e.target.value;
                                        setInstagramStories(updatedStories);
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Details"
                                    className="border border-gray-300 px-3 py-2 ml-2 rounded-full"
                                    value={item.details}
                                    onChange={(e) => {
                                        const updatedStories = [...instagramStories];
                                        updatedStories[index].details = e.target.value;
                                        setInstagramStories(updatedStories);
                                    }}
                                />
                                <button
                                    className="bg-red-500 text-white px-3 py-2 rounded-full ml-2"
                                    onClick={() => removeInstagramItem('stories', index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    </div>
            </div>

            <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={generateJSON}
            >
                Generate JSON
            </button>
        </div>
    );
};

export default DynamicForm;
