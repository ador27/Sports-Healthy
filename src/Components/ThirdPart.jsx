import React from 'react';
import people from '../images/people.png';
import man from '../images/man.png';
import walk from '../images/walk.png';

const ThirdPart = () => {
    return (
        <div className='grid grid-cols-3 bg-purple-700 p-12 rounded text-white m-12'>
            <div className='flex'>
                <img style={{ width: '20%', height: '50px' }} src={people} alt="" />
                <h1 className='font-bold'>Get that 11 line <br />in 30 days</h1>

            </div>
            <div className='flex'>
                <img style={{ width: '20%', height: '50px' }} src={man} alt="" />
                <h1 className='font-bold ml-2'>14 days <br />sherd challenge</h1>

            </div>
            <div className='flex'>
                <img style={{ width: '20%', height: '50px' }} src={walk} alt="" />
                <h1 className='font-bold'>Get flat belly <br />in 30 days</h1>

            </div>

        </div>
    );
};

export default ThirdPart;