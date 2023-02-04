import React from 'react';
import fitness from '../images/Fitness tracker.png';
import nike from '../images/nike.png';
import adidas from '../images/adidas.png';
import puma from '../images/puma.png';
import reebok from '../images/reebok.png';

const Header = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='ml-4 mt-24'>
                <h1 className='font-semibold text-6xl m-2'>Healthy in side</h1>
                <h1 className='font-semibold text-6xl m-2'><span className='text-cyan-600'>fresh</span> out side</h1>
                <p className='mt-12 ml-2 mb-3'>Exercise is a very important need for our body. Healthy and fitness will be obtained if you can do regular exercise and run a healthy routine</p>
                <div className='grid grid-cols-2'>
                    <button className="btn btn-active btn-primary m-8">Get started</button>
                    <button className="btn btn-active btn-gray m-8">Learn more</button>
                </div>
                <div className='grid grid-cols-4 m-2'>
                    <img src={nike} alt="" />
                    <img src={adidas} alt="" />
                    <img src={puma} alt="" />
                    <img src={reebok} alt="" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img style={{ width: '80%', height: '550px' }} src={fitness} alt="" />
            </div>

        </div>
    );
};

export default Header;