import { FaRegStar } from 'react-icons/fa';
import '../CSS/about.css'


const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        <ul className="marquee-content">
          <li><MarqueeItem text="UI Design" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar'/>
          <li><MarqueeItem text="Responsive" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Components" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Animations" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Performance" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Accessibility" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          </ul>
        <ul className="marquee-content" aria-hidden="true">
          <li><MarqueeItem text="UI Design" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Responsive" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Components" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Animations" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Performance" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          <li><MarqueeItem text="Accessibility" /></li>
          <FaRegStar size={50} color='#898888b4' className='marqueeStar' />
          </ul>
      </div>
      <div className="marquee-fade-left"></div>
      <div className="marquee-fade-right"></div>
    </div>
  );
};

const MarqueeItem = ({ text }) => {
  return (
    <div className="marquee-item">
      <h2 className="marquee-item-text">{text}</h2>
    </div>
  );
};

export default Marquee;