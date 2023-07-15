import Header from '../components/Header/Header';

const Menu = () => {
    return (
        <>
            <Header title={'Coffee Menu'}></Header>
            <main className='bg-color-second'>
                <section className='px-5 py-16 md:px-32 md:py-28'>
                    <div className='text-center text-white mb-16' data-aos="zoom-in">
                        <p className='text-color'>CHOOSE BEST OF</p>
                        <h2 className='text-4xl my-5 font-semibold'>Coffee Place Menu</h2>
                    </div>
                    <div>
                        
                    </div>
                </section>
            </main>
        </>
    );
};

export default Menu;