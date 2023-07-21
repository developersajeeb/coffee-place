import React from 'react';

const Page = async ({ params }) => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977');
    const data = await res.json();
    const mainData = data.meals[0];

    return (
        <>
            <header className='px-4 py-28 md:p-36 bg-cover bg-center text-white bg-fixed' style={{backgroundImage: `url(${mainData.strMealThumb})`}}>
                <h1 className='text-5xl md:text-8xl my-6 md:my-8 font-bold' data-aos="fade-right">{mainData.strMeal}</h1>
            </header>

            <main>
            </main>
        </>
    );
};

export default Page;