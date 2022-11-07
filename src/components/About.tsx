import TypeWriterEffect from 'react-typewriter-effect';
import '../styles/about.css';
import image from '../assets/imagecoding.png';

const About = () => {
  return (
    <section className='container lg:grid grid-cols-2 mx-auto mt-20 min-h-[50vh] lg:rounded-md border border-white'>
      <div className='hidden lg:flex my-auto ml-5'>
        <TypeWriterEffect
          textStyle={{
            fontFamily: 'Red Hat Display',
            color: 'white',
            fontWeight: 700,
            fontSize: `3em`,
          }}
          startDelay={500}
          cursorColor='orange'
          multiText={[
            'Hi! my name is Aaron, Im a fullstack Web developer, I have experience with Node, React, java, sql... and i always like to learn new things ',
          ]}
          multiTextDelay={1000}
          typeSpeed={30}
        />
      </div>
      <div className='lg:hidden mb-10'>
        <p className='text-2xl mx-auto text-white mt-2 max-w-[300px]'>
          Hi! my name is Aaron, Im a fullstack Web developer, I have experience
          with Node, React, java, sql... and i always like to learn new things
        </p>
      </div>
      <div className='h-full flex justify-center items-center'>
        <img src={image} />
      </div>
    </section>
  );
};

export default About;
