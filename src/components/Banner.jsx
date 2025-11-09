import React from 'react';
import deskWork from "../../deskwork.json";
import Lottie from 'lottie-react';
import TextType from './TextType';

const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto border px-4 py-3 flex justify-between items-center'>
            
            {/* header and button section  */}
            <div>
                <h1 className='text-4xl font-bold'>
                    
<TextType 
  text={["Reliable place for job finding ", "Match your achieve skill", "Grab your online dream job"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>


                </h1>



        
     




                <p className='font-semibold'>A multiverse collection of flexible jobs</p>

                <div className='flex justify-between items-center'>
                    <button className='bg-blue-500 text-white font-semibold px-4 p-2 rounded'>
                        Get Started 
                    </button>

        <p className='underline font-extralight underline-offset-4'>Explore Features</p>

                </div>
            </div>

        {/* picture section  */}
        <div className='w-96'>
         <Lottie animationData={deskWork} loop={true} />
        </div>





        </div>
    );
};

export default Banner;