import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSwipper = styled(Swiper)`
  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.2s ease-in-out;
    &:hover {
      color: rgba(20, 180, 215, 1);
    }
  }

  .swiper-pagination {
    position: static;
  }

  .swiper-pagination-bullet {
    border: 2px solid var(--swiper-theme-color);
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export default StyledSwipper;
