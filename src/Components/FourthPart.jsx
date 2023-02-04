import React from 'react';
import hand from '../images/handgym.jpg';

const FourthPart = () => {
    return (
        <div className='grid grid-cols-2 m-16'>
            <div>
                <img style={{ width: '60%', height: '450px' }} src={hand} alt="" />

            </div>
            <div>
                <h1 className='text-4xl font-semibold m-5'>Best full body <br />workout to lose fat</h1>
                <p className='m-5'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                <button className="btn btn-active btn-primary m-8 w-64">Get started</button>
            </div>

        </div>
    );
};

export default FourthPart;