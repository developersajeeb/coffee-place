import Image from 'next/image';
import React from 'react';

const Loading = () => {
    return (
        <div>
            <Image src='/others/loading.gif.crdownload' width={100} height={100} alt='' className='w-[100vh] h-[100vh]'/>
        </div>
    );
};

export default Loading;