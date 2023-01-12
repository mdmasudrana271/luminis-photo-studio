import React from "react";
import AnimatedText from "react-animated-text-content";
import logo from "../../.././assets/image/banner2.jpg";

const About = () => {
  return (
    <div className="md:flex justify-between items-center w-11/12 mx-auto gap-5 my-10">
      <div className="md:w-1/2 mr-4">
        <img className="rounded-xl" src={logo} alt="" />
      </div>
      <div className="md:w-1/2">
          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: "200px",
              y: "-20px",
              scale: 1.1,
              ease: "ease-in-out",
            }}
            animationType="float"
            interval={0.06}
            duration={0.8}
            tag="h2"
            className="animated-paragraph text-3xl mb-2 font-semibold"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
            options={{
                autoStart: true,
                loop: true,
              }}
            
            
          >
            Hi there, I am Anna Rosetti. I am photographer, traveler and I love
            to capture your unique moments
          </AnimatedText>

        <p className="font-semibold">
          I am a professional photographer and digital artist. I particularly
          specialise in fine-art contemporary landscape and portrait
          photography, and I especially love shooting in Scotland and creating
          images with a "fairy tale" feel.My official gallery of photographs and
          digital art is at inpictur.es - where you can order prints and
          canvases and also purchase digital downloads; most of my images are
          available as smaller free downloads too! My Nik Sargent photography
          blog is over on my gallery too.
        </p>
      </div>
    </div>
  );
};

export default About;
