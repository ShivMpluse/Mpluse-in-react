import styled from 'styled-components';
import poster from '../../public/images/card-6.gif';
// import hero from '../../public/images/hero.webp';
import Info from './Info';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NextPage = () => {
    return (
        <section className="mt-16 flex flex-col flex-wrap gap-8 overflow-x-hidden px-8 ">
            <div className="heading md:px-4 container mx-auto poppins-medium flex flex-col gap-2 w-full">
                <h3 className="text-6xl text-black">
                    Why Choose <span className="text-transparent bg-gradient-to-r from-[#F5E197] to-[#E6217B] bg-clip-text">MPLUSE</span>
                </h3>
                <Para className="text-lg text-black/80 font-thin">
                    Discover why thousands of users trust us with their financial growth and fintech aspirations
                </Para>
            </div>
            <div className="container sm:mx-auto grid sm:grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <Info />
                </div>
                <div className="img sm:py-4 bg-cover object-cover bg-no-repeat rounded-xl flex justify-center overflow-hidden" >
                    <img src={poster} alt="Poster"  className='md:scale-[2.2]'/>
                    {/* <DotLottieReact  autoplay loop/> */}
                </div>
            </div>
        </section>
    );
};

export default NextPage;

const Para = styled.p`
    line-height: 1.8;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif
`;
