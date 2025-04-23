import { FC, ReactNode } from 'react';
import StyledCard from 'src/assets/styles/components/Card/StyledCard';

type cardProps = {
  children: ReactNode;
  title?: string;
  style?: React.CSSProperties;
};

const Card: FC<cardProps> = ({ children, title, style }) => {
  return (
    <StyledCard style={style}>
      {title && <h2>{title}</h2>}
      {children}
    </StyledCard>
  );
};

export default Card;
