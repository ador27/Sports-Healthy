import React from 'react';

const Testimonial = () => {
    return (
        <div className='m-8'>
            <h1 className='text-3xl font-bold text-center'>Testimonials</h1>
            <div className='grid grid-cols-2 m-4'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl ml-24">
                        <div className="card-body">

                            <p>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coached.</p>
                            <h2 className="card-title">Suketi Mantapo</h2>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="card w-96 bg-base-100 shadow-xl ml-12">
                        <div className="card-body">

                            <p>exercise used to be a boring thing for me, but after following the gym baran I become fond of sports and sports became my new hobby. I participate in sports 5 times a week.</p>
                            <h2 className="card-title">Ada Apose</h2>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Testimonial;