import { m, LazyMotion, domAnimation } from 'framer-motion';

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-neutral-50 p-6 noselect"
      >
        <span
          className="opacity-70"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
            <div className='font-mova sm:text-3xl md:px-36'>
                {subtitle}
            </div>
        </span>
        <h2
          className="tracking-wider text-7xl sm:text-8xl md:px-36 md:text-9xl"
          style={{ fontFamily: "mova"}}
        >
          {title.split("").map((char, index) => {
            if(char === " ") {
              return " ";
            }
            return <span key={index} className="bounce">{char}</span>
          })}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;