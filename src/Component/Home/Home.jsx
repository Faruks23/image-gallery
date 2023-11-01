import React, { useState } from 'react';
import Gallery from '../Gallery/Gallery';
import image1 from '../../assets/images/image-1.webp'
import image2 from '../../assets/images/image-2.webp'
import image3 from '../../assets/images/image-3.webp'
import image4 from '../../assets/images/image-4.webp'
import image5 from '../../assets/images/image-5.webp'
import image6 from '../../assets/images/image-6.webp'
import image7 from '../../assets/images/image-7.webp'
import image8 from '../../assets/images/image-8.webp'
import image9 from '../../assets/images/image-9.webp'
import image10 from '../../assets/images/image-10.jpeg'
import image11 from '../../assets/images/image-11.jpeg'


import './Home.css'
const Home = () => {
  const [images, setImages] = useState([
    // Sample image data with id, src, and alt
    { id: 1, src: image1 },
    { id: 2, src: image2, alt: "Image 2" },
    { id: 3, src: image3, alt: "Image 3" },
    { id: 4, src: image4, alt: "Image 3" },
    { id: 5, src: image5, alt: "Image 3" },
    { id: 6, src: image6, alt: "Image 3" },
    { id: 7, src: image7, alt: "Image 3" },
    { id: 8, src: image8, alt: "Image 3" },
    { id: 9, src: image9, alt: "Image 3" },
    { id: 10, src: image10, alt: "Image 3" },
    { id: 11, src: image11, alt: "Image 3" },
    // Add more images as needed
  ]);

  //  <div className="container mx-auto py-4 ">
  //    <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
  //    {/* <Gallery images={images} setImages={setImages} /> */}
  //  </div>;

  // Function to determine background color based on index
  
  return (
    <>
      <div className="main container mx-auto my-10 bg-blue-200 p-2">
        <div className="main-gallery">
          <div className="gallery-head flex justify-between h-[60px] items-center border-b px-10 bg-white rounded-md">
            <div className="">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-info bg-blue-500"
                  />
                  <span className="label-text ml-3 text-2xl font-bold capitalize"> 3 file select</span>
                </label>
              </div>{" "}
            </div>
            <div className="delete text-2xl font-bold text-red-500 capitalize  cursor-pointer">delete</div>
          </div>

          <div className="grid bg-white p-3  md:p-10 gallery grid-cols-5 md:gap-10 container gap-3 mx-auto  ">
            <div
              draggable
              className="g1  col-span-2 row-span-2 border  bg-black rounded-md"
            >
              <img src={images[0]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1  rounded-md border">
              <img src={images[1]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1   border rounded-md">
              <img src={images[2]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1   rounded-md border">
              <img src={images[3]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1  rounded-md border">
              <img src={images[4]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1  rounded-md border">
              <img src={images[5]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1   rounded-md border">
              <img src={images[6]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1   border rounded-md">
              <img src={images[7]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1  border rounded-md">
              <img src={images[8]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1  border rounded-md">
              <img src={images[9]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1   border rounded-md">
              <img src={images[10]?.src} alt="" />
              <div className="g-overly"></div>
            </div>
            <div className="g1    border rounded-md">
              <img src={images[11]?.src} alt="" />
              <input className=" z-40" type="text" name="" id="" />
              <div className="g-overly"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;