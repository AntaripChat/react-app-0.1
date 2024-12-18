import Orangebg from '../../assets/orangebg.png';

export default function Hero(){
    return(
        <main className="md:px-12 md:py-6 bg-primaryDark">
            <section className=" relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
                <div className="container">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                    place-items-center min-h-[650px]">
                            <div className=" text-white mt-[100px] md:mt-0 p-4 space-y-4">
                                <h1 className="text-3xl pl-6 md:pl-14">01______</h1>
                                <h1 className="text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
                                <p className="text-sm ">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, placeat.
                                </p>
                                <button className=" primary-btn">Shop now</button> 
                            </div>

                            <div>
                                <img src={Orangebg} alt="Not found" className='relative z-10 w-[400px] img-shadow'/>
                            </div>
                            <div className='md:hidden'></div>
                    </div>
                </div>
                <h1 className='text-center text-[80px] sm:text-[120px] md:text[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow'>Orange</h1>
            </section>
        </main>
    )
}