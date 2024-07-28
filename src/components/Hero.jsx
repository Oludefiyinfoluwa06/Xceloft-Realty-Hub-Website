import heroImg from '../assets/hero-img.png';
import Button from './Button';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl font-bold mb-6 fade-in">Your Ultimate Real Estate Management Solution</h1>
          <p className="text-lg mb-6 fade-in">Discover the easiest way to manage your real estate investments with our cutting-edge mobile app.</p>
          <Button text='Get the app' />
        </div>
        <div className="md:w-1/2">
          <img src={heroImg} alt="App Preview" className="fade-in w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;