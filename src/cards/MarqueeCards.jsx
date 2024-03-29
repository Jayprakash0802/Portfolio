
import Marquee from 'react-fast-marquee';

const MarqueeCards = ({children, direction}) => {

  return (
    <Marquee
      direction={direction}
      gradient={true}
      gradientWidth={0}
      gradientColor='rgb(142,36,170)'
      speed={100}
      pauseOnHover={1}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;