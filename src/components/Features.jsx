import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';

const Features = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 fade-in">Key Features</h2>
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 fade-in">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold mb-2">Comprehensive Property Listings</h3>
              <p>Manage all your properties in one place. Add detailed information, photos, descriptions, rental prices, and availability for each property to keep everything organized and accessible.</p>
            </div>
            <img src={feature1} alt="Property Listings" className="mb-4 md:mb-0 w-full md:w-1/2" />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6 fade-in">
            <img src={feature2} alt="Wallet System" className="mb-4 md:mb-0 w-full md:w-1/2" />
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold mb-2">Wallet System</h3>
              <p>Easily track and manage your finances. The integrated wallet feature allows you to monitor transactions, process payments, and view financial summaries, ensuring you stay on top of your finances with ease.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-6 fade-in">
            <div className="md:w-1/2 text-left">
              <h3 className="text-xl font-bold mb-2">Chat System</h3>
              <p>Manage all your properties in one place. Add detailed information, photos, descriptions, rental prices, and availability for each property to keep everything organized and accessible.</p>
            </div>
            <img src={feature3} alt="Chat System" className="mb-4 md:mb-0 w-full md:w-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;