import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-3xl font-extrabold text-blue mb-4 fade-in">Take Control of Your Real Estate Management Today</p>
        <Button text='Get the app' />

        <hr className="bg-gray-500 mt-6" />
              
        <p className="mt-6 text-sm text-gray-500 fade-in">© {new Date().getFullYear()} Copyright by Xceloft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;