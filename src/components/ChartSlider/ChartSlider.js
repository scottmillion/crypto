import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChartDisplay } from 'components'

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

  const Wrapper = styled.div`
    margin-top: 14px;
    position: relative;
  `

  const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.left ? props.left : '')};
    right: ${(props) => (props.right ? props.right : '')};
    padding-inline: 5px;
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    z-index: 1000;
  `

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
            data={props.coinsData}
            dataLabels={props.priceDataLabels}
            dataPoints={props.priceDataPoints}
            isLoading={props.isPriceDataLoading}
            label="Price"
            legendTitle="Price"
            type="Line"
            width="100%"
          />
        </div>
        <div>
          <ChartDisplay
            data={props.coinsData}
            dataLabels={props.volumeDataLabels}
            dataPoints={props.volumeDataPoints}
            isLoading={props.isVolumeDataLoading}
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
