// Gallery.js
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Image from "../Image/Image";


function Gallery({ images, setImages }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImage, setFeatureImage] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedImages = Array.from(images);
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setImages(reorderedImages);

    // Update feature image when sorting
    if (result.destination.index === 0) {
      setFeatureImage(images[result.source.index]);
    }
  };

  const handleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const handleDeleteSelectedImages = () => {
    setImages(images.filter((image) => !selectedImages.includes(image.id)));
    setSelectedImages([]);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="image-gallery">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid grid-cols-3 gap-4"
            >
              {images.map((image, index) => (
                <Draggable
                  key={image.id}
                  draggableId={`image-${image.id}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`relative ${
                        featureImage === image ? "border-4 border-blue-500" : ""
                      }`}
                    >
                      <Image
                        image={image}
                        isSelected={selectedImages.includes(image.id)}
                        handleImageSelection={handleImageSelection}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {selectedImages.length > 0 && (
        <button
          onClick={handleDeleteSelectedImages}
          className="bg-red-500 text-white p-2 rounded mt-2"
        >
          Delete Selected Images
        </button>
      )}
    </div>
  );
}

export default Gallery;
