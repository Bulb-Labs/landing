import React from 'react';
import { Cpu, Book, Layers } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl"></div>
            </div>

            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 shadow-sm relative z-10">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 text-transparent bg-clip-text">
                            Bulb AI
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="py-24 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <div className="relative inline-block">
                        <h1 className="text-6xl font-bold text-gray-900 mb-8 relative">
                            Welcome to Bulb AI
                            <span className="absolute -top-2 -right-10 text-3xl text-amber-600">✦</span>
                        </h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        A multi-purpose game framework for creating and training AI agents for the future of the metaverse.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://docs.bulbai.xyz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-amber-700 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md"
                        >
                            View Docs
                        </a>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            Icon={Cpu}
                            title="Intelligent Action Processing"
                            description="Our engine uses your agent goals, personality characteristics, and available actions to compute the most appropriate decisions for your agent to execute."
                        />
                        <FeatureCard
                            Icon={Book}
                            title="Dynamic Agents"
                            description="Shape your agent's behavior through publicly available inputs, real-time training, and environment interactions."
                        />
                        <FeatureCard
                            Icon={Layers}
                            title="All-in-One Solution"
                            description="A single scalable system for reducing complex interactions to simple actions for agents."
                        />
                    </div>
                </div>
            </section>

            {/* Token Section */}
            <section id="token" className="py-20 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        $BULB
                    </h2>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Token Address</h3>
                            <a
                                href="https://sonicscan.org/token/0xf3e3613b0dc9c6578baaca1e3e6c2412cc0e9993"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-700 hover:text-orange-600 break-all"
                            >
                                0xf3e3613b0dc9c6578baaca1e3e6c2412cc0e9993
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Events</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-amber-700 mr-2">•</span>
                                    Completed a public sale that raised 7,079,564 $YOKO from 41 participants
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-700 mr-2">•</span>
                                    Bonded $BULB agent with 1,700,000 YOKO
                                    <a
                                        href="https://sonicscan.org/tx/0xf014a23673e0b7a1c59680c9eaf79f8524b43cae010c657c05c25e36e149d34e"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-700 hover:text-orange-600 ml-1"
                                    >
                                        (View Transaction)
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-700 mr-2">•</span>
                                    Added 5,359,453 $YOKO and 220,169,104 $BULB into Spooky LP
                                    <a
                                        href="https://sonicscan.org/tx/0x85317e974ad0b71d462f74aea1ba56393846b3469a80c40830eb86bb43348ad0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-700 hover:text-orange-600 ml-1"
                                    >
                                        (View Transaction)
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-700 mr-2">•</span>
                                    Locked Spooky LP for 3 months
                                    <a
                                        href="https://sonicscan.org/tx/0xddc89dc8b8b0da6a4366a681140dece3c9700373bab8baab71fcefa233fa513d"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-700 hover:text-orange-600 ml-1"
                                    >
                                        (View Transaction)
                                    </a>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-700 mr-2">•</span>
                                    Locked 100M $BULB for 6 months as per team tokens
                                    <a
                                        href="https://sonicscan.org/tx/0x3a232e266563ce9511796b9f06c9e80013072551a6a7b5a2e7dc95c9430bd14f"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-700 hover:text-orange-600 ml-1"
                                    >
                                        (View Transaction)
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokenomics Section */}
            <section id="tokenomics" className="py-20 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Tokenomics
                    </h2>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="text-amber-700 mr-2 font-bold">30%</span>
                                <div>
                                    <span className="font-semibold">LP on Spookyswap</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-amber-700 mr-2 font-bold">10%</span>
                                <div>
                                    <span className="font-semibold">Team</span>
                                    <p className="text-gray-600">6 month lockup with 12 month vesting</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-amber-700 mr-2 font-bold">5%</span>
                                <div>
                                    <span className="font-semibold">Ecosystem Incentives</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-amber-700 mr-2 font-bold">5%</span>
                                <div>
                                    <span className="font-semibold">Yoko Community</span>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="text-amber-700 mr-2 font-bold">50%</span>
                                <div>
                                    <span className="font-semibold">Private Sale</span>
                                    <div className="flex items-center mt-1">
                                        <span className="text-gray-600 mr-2">Claim contract:</span>
                                        <a
                                            href="https://sonicscan.org/address/0xb7722849b098f2097e83495366dbdd4f323ebc32"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-amber-700 hover:text-orange-600 break-all"
                                        >
                                            0xb7722849b098f2097e83495366dbdd4f323ebc32
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Links Section */}
            <section id="contact" className="py-20 bg-white relative z-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Connect With Us
                    </h2>
                    <div className="flex justify-center space-x-8">
                        <a
                            href="https://github.com/Bulb-Labs/Bulb-AI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-amber-700 transition-colors flex items-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-amber-700 transition-colors flex items-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                            <span>Twitter</span>
                        </a>
                        <a
                            href="https://t.me/Bulb_AI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-amber-700 transition-colors flex items-center space-x-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon }) => (
    <div
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
        border border-gray-100 flex flex-col items-start space-y-4"
    >
        <div className="bg-amber-100 p-3 rounded-lg">
            <Icon className="w-8 h-8 text-amber-700" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

export default LandingPage;
