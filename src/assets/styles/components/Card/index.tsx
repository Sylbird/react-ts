import { FC, ReactNode } from 'react';
import StyledCard from 'src/assets/styles/components/Card/StyledCard';

type cardProps = {
  children: ReactNode;
  title?: string;
};

const Card: FC<cardProps> = ({ children, title }) => {
  return (
    <StyledCard>
      {title && <h2>§ {title}</h2>}
      {children}
    </StyledCard>
  );
};

export default Card;
