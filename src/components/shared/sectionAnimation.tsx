import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import VisibilitySensor from "react-visibility-sensor";

const FadeInDirection = ({ isVisible, children, direction }: any) => {
    const XY = direction == 'Y' ? 'translateY' : 'translateX'
    const LRU = direction == 'XL' ? '-200px' : '200px' 
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? `${XY}(0px)` : `${XY}(${LRU})`,
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
 
  type Props = {
    transition?: string

}  
const FadeInContainer: React.FC<Props> = (props) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = (visiblity: boolean) => {
      visiblity && setVisibility(visiblity);

    };
    const direction = props.transition ? props.transition : 'Y'
    return (
      <VisibilitySensor onChange={(v) => onChange(v)} partialVisibility={true} scrollDelay={500} intervalDelay={500} offset={{top:200, bottom: 200}}>
        <FadeInDirection isVisible={isVisible} direction={direction}>{props.children}</FadeInDirection>
      </VisibilitySensor>
    );
  };
  
 export default FadeInContainer