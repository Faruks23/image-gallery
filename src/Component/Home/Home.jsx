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


import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";




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


  // handel drag end 
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedImages = Array.from(images);
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    setImages(reorderedImages);
  };


  
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="main container mx-auto my-10 bg-blue-200 p-2">
          <div className="main-gallery">
            {/* gallery heading */}
            <div className="gallery-head flex justify-between h-[60px] items-center border-b px-10 bg-white rounded-md">
              <div className="">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                    <span className="label-text ml-3 text-2xl font-bold capitalize">
                      {" "}
                      3 file selected
                    </span>
                  </label>
                </div>
              </div>

              <div className="delete text-2xl font-bold text-red-500 capitalize  cursor-pointer">
                delete
              </div>
            </div>
            {/* gallery image container*/}

           
            <Droppable droppableId="image-gallery" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid bg-white p-3 md:p-10 gallery grid-cols-5 md:gap-10 container gap-3 mx-auto"
                >
                  {images.map((image, index) => (
                    <Draggable
                      key={image.id}
                      draggableId={image.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="g1 border rounded-md"
                        >
                          {/* image card */}
                          <img src={image.src} alt={image.alt} />
                          <input className="z-40" type="text" name="" id="" />
                          <div className="g-overly"></div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="w-5 h-5 absolute top-3 left-3 p-5"
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Home;