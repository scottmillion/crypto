import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChartDisplay } from 'components'

const ChartSlider = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const Wrapper = styled.div`
    margin-top: 14px;
  `

  return (
    <Wrapper>
      <Slider {...settings}>
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
