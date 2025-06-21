import { FallingLines } from "react-loader-spinner"

export const Loader = () => {
    return (
        <div className="w-full h-[100vh] bg-black flex flex-col justify-center items-center">

            <FallingLines
                color="#ff8904"
                width="200"
                height="200"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
            <span className="text-white font-bold uppercase text-3xl lg:text-6xl md:text-3xl">Loading...</span>

        </div>
    )
}

