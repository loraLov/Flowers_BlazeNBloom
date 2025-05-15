import Marquee from "react-fast-marquee";

import './Line.css';

export default function Line() {
       return (
        <div className="line" >
    <Marquee className="textLine" speed={50} pauseOnHover gradient={false}>
       Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.   Blaze n'Bloom. From soul to stem.
    </Marquee>
    </div>
  );
}
    