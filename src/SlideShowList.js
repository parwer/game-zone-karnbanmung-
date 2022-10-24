import React from 'react';
import SlideshowWithPagination from "react-slideshow-with-pagination";

const Slideshow = (props) => {
    const { data } = props;
  return (
    <div>
      <SlideshowWithPagination
        options={data}
        showNumbers={true}
        showDots={true}
        showArrows={true}
        numberOfCardsPerScreen={3}
        showOneCardForWidthLower="sm"
        slideshowContainerMaxWidth={false}
        cardWidth={500}
        cardHeight={300}
      />
      <SlideshowWithPagination
        showNumbers={true}
        showDots={true}
        showArrows={true}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <img src={item.icon} alt={item.title} />
            <p>{item.name}</p>
          </React.Fragment>
        ))}
      </SlideshowWithPagination>
    </div>
  );
};

export default Slideshow;
