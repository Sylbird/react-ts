import Card from 'src/assets/styles/components/Card';
import StyledSwipper from './Styled';
import { DisplayContainer } from 'src/assets/styles/components/StyledContainers';
import { UserPholder_SrcSet } from 'src/assets/images/srcSet';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  const CardsPlaceholder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Card title="§ Carousel">
      <DisplayContainer>
        <StyledSwipper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={10}
          breakpoints={{
            880: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 10
            },
            1320: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 10
            },
            1760: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 10
            },
            2200: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 10
            }
          }}
        >
          {CardsPlaceholder.map((index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  title={'Card ' + index}
                  style={{ textAlign: 'center', maxWidth: '350px' }}
                >
                  <img
                    srcSet={UserPholder_SrcSet}
                    alt="first_card"
                    sizes="(max-width: 767px) 192px, 256px"
                  />
                  <p>
                    Description: Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Nemo dicta labore fugiat, illo dolor
                    aspernatur neque veritatis possimus, officia debitis fugit
                    magni sunt dignissimos at unde esse quo corrupti in.
                  </p>
                </Card>
              </SwiperSlide>
            );
          })}
        </StyledSwipper>
      </DisplayContainer>
    </Card>
  );
};

export default Carousel;
