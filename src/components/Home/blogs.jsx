import { AppImages } from "../../constant/appImages";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export const Blogs = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex justify-center flex-col items-center px-4 py-10">
                <div className="flex flex-col justify-center items-center w-full max-w-4xl text-center">
                    <div className="bg-gradient-to-r from-orange-400 to-slate-100 w-20 rounded h-1 mb-3"></div>
                    <span className="text-orange-400 text-sm font-bold mb-2">FROM THE BLOG</span>
                    <span className="text-black text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        News & Articles
                    </span>
                </div>

                {/* Cards Container */}
                <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
                            <img className="w-full h-[250px] object-cover" src={AppImages.aboutimg1} alt="blog" />

                            <div className="flex flex-col items-center p-4">
                                {/* Blog Meta */}
                                <div className="flex flex-wrap justify-between w-full bg-gray-200 p-2 rounded-md text-sm">
                                    <div className="flex items-center gap-1 text-gray-900 hover:text-orange-400 cursor-pointer w-full sm:w-auto">
                                        <AccountCircleOutlinedIcon className="text-orange-400" />
                                        <span>by shadhin</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-900 hover:text-orange-400 cursor-pointer w-full sm:w-auto">
                                        <CommentOutlinedIcon className="text-orange-400" />
                                        <span>comments</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-900 hover:text-orange-400 cursor-pointer w-full sm:w-auto">
                                        <LocalOfferOutlinedIcon className="text-orange-400" />
                                        <span>ux/ui</span>
                                    </div>
                                </div>

                                {/* Blog Title & Description */}
                                <div className="w-full mt-4 text-left">
                                    <h3 className="text-lg sm:text-xl font-bold text-black">
                                        Data Backup and Recovery Best Practices Small
                                    </h3>
                                    <p className="text-gray-700 mt-2 text-sm">
                                        Parturient platea sociis congue maecenas dictumst imperdiet velit pellentesque
                                        rutrum molestie diam tempor tortor aptent natoque.
                                    </p>
                                </div>

                                {/* Read More */}
                                <div className="flex items-center justify-start w-full mt-4 text-orange-400 cursor-pointer hover:underline">
                                    <span className="text-md font-medium">Read more</span>
                                    <ArrowCircleRightIcon className="ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    );
};
