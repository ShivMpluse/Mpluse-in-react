import poster from '../../public/images/choose.png';
import hero from '../../public/images/hero.webp';
import Info from './Info';

const NextPage = () => {
    return (
        <section className="mt-16 flex flex-col flex-wrap gap-8">
            <div className="heading md:px-4 container mx-auto poppins-medium flex flex-col gap-2 w-full">
                <h3 className="text-6xl text-black">
                    Why Choose <span className="text-transparent bg-gradient-to-r from-[#F5E197] to-[#E6217B] bg-clip-text">MPLUSE</span>
                </h3>
                <p className="text-lg text-black/80 font-thin">
                    Discover why thousands of users trust us with their financial growth and fintech aspirations
                </p>
            </div>
            <div className="container sm:mx-auto grid sm:grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <Info />
                </div>
                <div className="img border bg-cover object-cover bg-no-repeat rounded-xl" style={{ backgroundImage: `url(${hero})` }}>
                    <img src={poster} alt="Poster" />
                </div>
            </div>
        </section>
    );
};

export default NextPage;
