import { FC, ReactNode } from 'react';
import StyledCard from 'src/assets/styles/components/Card/StyledCard';

type cardProps = {
  children: ReactNode;
  title?: string;
};

const Card: FC<cardProps> = ({ children, title }) => {
  return (
    <StyledCard>
      {title && (
        <div>
          <h2>§ {title}</h2>
        </div>
      )}
      {children}
    </StyledCard>
  );
};

export default Card;
