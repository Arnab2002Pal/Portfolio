'use client'
const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-gray-300 py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center">
                {/* Left Section - Logo & Copyright */}
                <div className="text-center">
                    <p className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="text-sm mt-1">Fueled by code ☕ by <span className="font-semibold text-white">Arnab Kumar Pal.</span></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
