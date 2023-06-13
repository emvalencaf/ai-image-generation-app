// custom components
import { Loader } from '../';

// assets
import { preview } from '../../assets';

const PreviewImg = ({ photo, altText, isGeneratingImg }) => {
    return (
        <div
            className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center"
        >
            {
                photo ? (
                    <img
                        src={photo}
                        alt={altText}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                        src={preview}
                        alt="preview"
                        className="w-9/12 h-9/12 object-contain opacity-40"
                    />
                )
            }

            {isGeneratingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                </div>
            )}
        </div>
    );
};

export default PreviewImg;