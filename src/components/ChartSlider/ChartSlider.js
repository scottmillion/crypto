import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChartDisplay } from 'components'
import { Wrapper, SliderButton } from './ChartSlider.css'

import { useRef } from 'react'

const ChartSlider = (props) => {
  const slider = useRef(null)

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper>
      <SliderButton left="10px" onClick={() => slider?.current?.slickPrev()}>
        &#60;
      </SliderButton>
      <SliderButton right="10px" onClick={() => slider?.current?.slickNext()}>
        &#62;
      </SliderButton>
      <Slider ref={slider} {...settings}>
        <div>
          <ChartDisplay
            data={props.data}
            dataLabels={props.dataLabels}
            dataPoints={props.priceDataPoints}
            isLoading={props.isLoading}
            label="Price"
            legendTitle="Price"
            type="Line"
            width="100%"
          />
        </div>
        <div>
          <ChartDisplay
            data={props.data}
            dataLabels={props.dataLabels}
            dataPoints={props.volumeDataPoints}
            isLoading={props.isLoading}
            label="Volume"
            legendTitle="Volume 24h"
            type="Bar"
            width="100%"
          />
        </div>
      </Slider>
    </Wrapper>
  )
}

export default ChartSlider
