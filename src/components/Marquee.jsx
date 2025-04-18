import '../CSS/about.css'

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-inner">
        <ul className="marquee-content">
          <li><MarqueeItem text="UI Design" /></li>
          <li><MarqueeItem text="Responsive" /></li>
          <li><MarqueeItem text="Components" /></li>
          <li><MarqueeItem text="Animations" /></li>
          <li><MarqueeItem text="Performance" /></li>
          <li><MarqueeItem text="Accessibility" /></li>
        </ul>
        <ul className="marquee-content" aria-hidden="true">
          <li><MarqueeItem text="UI Design" /></li>
          <li><MarqueeItem text="Responsive" /></li>
          <li><MarqueeItem text="Components" /></li>
          <li><MarqueeItem text="Animations" /></li>
          <li><MarqueeItem text="Performance" /></li>
          <li><MarqueeItem text="Accessibility" /></li>
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