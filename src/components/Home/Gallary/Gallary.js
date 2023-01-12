import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Gallary = () => {
  return (
    <section className="py-6  my-20">
        <h2 className="text-5xl my-5 text-center font-semibold text-blue-600/[.9]">Our Gallary</h2>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <PhotoProvider>
          <PhotoView className="w-full" src="https://i.ibb.co/m0490Dv/joyful-carefree-woman-dances-music-listens-favourite-audio-track-raises-hands-with-clenched-fists-sm.jpg">
          <img data-aos="fade-left"
          src="https://i.ibb.co/m0490Dv/joyful-carefree-woman-dances-music-listens-favourite-audio-track-raises-hands-with-clenched-fists-sm.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square cursor-pointer"
        />
          </PhotoView>
        </PhotoProvider>

        <PhotoProvider>
          <PhotoView className="w-full" src="https://i.ibb.co/5v6NJNR/woman-with-cloud-shaped-head-dancing-full-shot.jpg">
          <img data-aos="fade-right"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer"
          src="https://i.ibb.co/5v6NJNR/woman-with-cloud-shaped-head-dancing-full-shot.jpg"
        />
          </PhotoView>
        </PhotoProvider>

        <PhotoProvider>
          <PhotoView className="w-full" src="https://i.ibb.co/PNdYCww/young-sportive-man-daancing-breakdance-isolared-black-backgrounf-neon-with-mixed-lights.jpg">
          <img data-aos="fade-down"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer"
          src="https://i.ibb.co/PNdYCww/young-sportive-man-daancing-breakdance-isolared-black-backgrounf-neon-with-mixed-lights.jpg"
        />
          </PhotoView>
        </PhotoProvider>

        <PhotoProvider>
          <PhotoView className="w-full" src="https://i.ibb.co/P6vB9LL/ballet-dancer-classic-ballerina-dancing-isolated-dark-background.jpg">
          <img data-aos="fade-up-right"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer"
          src="https://i.ibb.co/P6vB9LL/ballet-dancer-classic-ballerina-dancing-isolated-dark-background.jpg"
        />
          </PhotoView>
        </PhotoProvider>

        <PhotoProvider>
          <PhotoView className="w-full" src="https://i.ibb.co/0FZmbyK/novel-young-graceful-ballet-dancers-red-cloth-wall-classic-action-art-motion-action-flexibility-insp.jpg">
          <img data-aos="fade-up"
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square cursor-pointer"
          src="https://i.ibb.co/0FZmbyK/novel-young-graceful-ballet-dancers-red-cloth-wall-classic-action-art-motion-action-flexibility-insp.jpg"
        />
          </PhotoView>
        </PhotoProvider>
        
      </div>
    </section>
  );
};

export default Gallary;
