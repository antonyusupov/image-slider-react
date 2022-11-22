import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import './slider.css';

function Slider({images}) {

    const [slideNumber, setSlideNumber] = useState(0);
    const [bigImage, setBigImage] = useState(false);

    const handleBigImage = (index) => {
        setSlideNumber(index)
        setBigImage(true)
    }

    const handleCloseImage = () =>{
        setBigImage(false)
    }

    const prevImage = () => {
        slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1)
    }

    const nextImage = () => {
        slideNumber+ 1 === images.length ? setSlideNumber(0) : setSlideNumber (slideNumber +1)
    }

  return (
    <div>
        {bigImage && 
        <div className='big-slide-image'>
            <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseImage}/>
            <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevImage}/>
            <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextImage}/>
            <div className="fullscreenImage">
                <img src={images[slideNumber].img} alt='fullscreenimage' />
            </div>
        </div>
        }
        <div className="slider-wrapper">
            {
                images && images.map((image,index)=>{
                    return (
                        <div 
                            className="single-image" 
                            key={index}
                            onClick={()=> handleBigImage(index)}>
                            <img src={image.img} alt='randomImage' />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Slider;