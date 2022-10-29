import Image from 'next/image'
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Slider = () => {
  const images = [
    '/assets/slide1.jpg',
    '/assets/slide2.JPG',
    '/assets/slide3.JPG',
    '/assets/slide4.JPG'
  ]
  const [activeSlide, setActiveSlide] = useState(1)

  const prevSliderHandler = (index: number) => {
    if (index === 0) {
      setActiveSlide(images.length - 1)
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1)
    } else {
      setActiveSlide(images.length - 1)
    }
  }

  const nextSliderHandler = (index: number) => {
    if (index === images.length - 1) {
      setActiveSlide(1)
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(images.length - 1)
    }
  }

  return (
    <div className="m-6">
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={activeSlide === index ? 'flex justify-between items-center' : 'hidden'}
          >
            <button
              className="text-6xl border-2 border-black"
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=" w-full h-[400px]">
              <Image
                src={item}
                alt="landscape"
                width={1300}
                height={1200}
                className=" object-cover w-full h-[1000px] px-6"
              />
            </div>
            <button
              className="text-6xl border-2 border-black"
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Slider
