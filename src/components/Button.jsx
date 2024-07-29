// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
    const handleDownload = () => {
        const fileUrl = '../assets/xrh.apk';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'xrh.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button 
            className="bg-gradient-to-r from-blue to-[#3E37A3] text-white px-4 py-2 rounded"
            onClick={handleDownload}
        >
            {text}
        </button>
    );
}

export default Button;