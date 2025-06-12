// StylishMenuIcon.jsx
const StylishMenuIcon = () => {
    return (
        <div style={{ padding: 5 }}>
            <div className="flex flex-col justify-between cursor-pointer text-orange-400 
                w-8 h-6      /* default size */
                sm:w-8 sm:h-6
                md:w-10 md:h-7
                lg:w-14 lg:h-8
                items-center
                ">
                {[...Array(3)].map((_, i) => (
                    <span
                        key={i}
                        className={`block rounded-sm bg-gray-800 transition duration-300 origin-center shadow-lg 
                            ${i === 1 ? 'w-full h-1.5' : 'w-4 h-1.5'}`}
                    />
                ))}
            </div>
        </div>

    );
};

export default StylishMenuIcon;
