import React from 'react';
import logo from '../../.././assets/image/about-me.jpg'

const About = () => {
    return (
        <div className='md:flex justify-center items-center w-11/12 mx-auto gap-5 my-10'>
            <div className='md:w-2/4'>
                <img className='rounded-full' src={logo} alt="" />
            </div>
            <div className='md:w-2/4'>
                <h1 className='text-3xl mb-5 font-bold'>Hi there, I am Anna Rosetti. I am photographer, traveler and I love to capture your unique moments.</h1>
                <p className='font-semibold'>I am a professional photographer and digital artist. I particularly specialise in fine-art contemporary landscape and portrait photography, and I especially love shooting in Scotland and creating images with a "fairy tale" feel.My official gallery of photographs and digital art is at inpictur.es - where you can order prints and canvases and also purchase digital downloads; most of my images are available as smaller free downloads too! My Nik Sargent photography blog is over on my gallery too.</p>
            </div>
        </div>
    );
};

export default About;