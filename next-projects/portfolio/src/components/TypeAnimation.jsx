import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default ExampleComponent;