// react deps and hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// customs components
import { FormField, Hero, Loader, PreviewImg, SectionContainer } from '../../components';

// utils
import { getRandomPrompt } from '../../utils';

// assets
import { preview } from '../../assets';

// config api url
import { apiURL } from '../../config/api';

const CreatePost = () => {
    // state for navigate
    const navigate = useNavigate();

    // form states
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

    // generating image states
    const [isGeneratingImg, setIsGeneratingImg] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    // handle submit event
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.prompt && form.photo) {
            setIsLoading(true);

            try {
                const response = await fetch(`${apiURL}/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                await response.json();

                navigate('/');

            } catch (error) {
                console.log(error);
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
    
        } else {
            alert('Please enter a prompt or generate an image');
        }

    }

    // handle change event
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    // handle surprise me
    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({
            ...form,
            prompt: randomPrompt,
        });
    };

    // handle generate image
    const handleGenerateImage = async () => {

        if (form.prompt) {
            try {
                setIsGeneratingImg(true);
                
                const response = await fetch(`${apiURL}/dall-e`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                    })
                });

                const data = await response.json();

                console.log(data);

                if (!data.success) return alert(data.message);

                setForm({
                    ...form,
                    photo: `data:image/jpeg;base64,${data?.data?.photo}`,
                });

            } catch (error) {
                console.log(error);
            } finally {
                setIsGeneratingImg(false);
            }
        } else {
            alert('Please enter a prompt');
        }

    };

    return (
        <SectionContainer>
            <Hero
                title="Create"
                subtitle="Create imaginative and visually stunning images through DALL-E AI and share them with the community"
            />
            <form
                className="mt-16 max-w-3xl"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-5">
                    <FormField
                        labelName="Your name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="A plush toy robot sitting against a yellow wall"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />
                    <PreviewImg
                        photo={form.photo}
                        altText={form.prompt}
                        isGeneratingImg={isGeneratingImg}
                    />
                </div>
                <div className="mt-5 flex gap-5">
                    <button
                        type="button"
                        onClick={handleGenerateImage}
                        className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        {isGeneratingImg ? 'Generating...': 'Generate'}
                    </button>
                </div>
                <div className="mt-10">
                    <p
                        className='mt-2 text-[#666e75] text-[14px]'
                    >
                        Once you have created the image you want, you can share it with others in the community
                    </p>
                    <button
                        type="submit"
                        className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        {
                            isLoading ? 'Sharing...' : 'Share with the community'
                        }
                    </button>
                </div>
            </form>
        </SectionContainer>
    );
};

export default CreatePost;