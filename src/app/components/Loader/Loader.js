import React from 'react';
import Lottie from 'lottie-react';
import loading from '../../../../public/others/';

const Loader = () => {
    return (
        <section>
            <Lottie animationData={loading} loop={true}/>
        </section>
    );
};

export default Loader;