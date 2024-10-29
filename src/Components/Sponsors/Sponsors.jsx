import Marquee from "react-fast-marquee";

const Sponsors = () => {
    const logos = [
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-1.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-2.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-3.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-4.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-5.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-6.svg',
        'https://felan.ricetheme.com/wp-content/uploads/2024/06/Company-logo-7.svg',
    ];
    return (
        <div className='max-w-[1185px] mx-auto mb-24 md:mt-24'>
            <p className='text-center text-2xl mb-8'>Trusted by thousands of organizations</p>
            <Marquee
                speed={100}        // Speed of the scroll
                pauseOnHover={true}  // Pauses when you hover over
                gradient={false}   // Disable gradient by default
                loop={0}           // Infinite loop
            >
                {logos.map((logo, index) => (
                    <div key={index} className='border rounded-lg p-5 mr-6'>
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Sponsors;