// react deps
import { useEffect, useState } from "react";

// customs components
import { FormField, Hero, Loader, SectionContainer } from "../../components";
import RenderCards from "../../components/RenderCards";
import { apiURL } from "../../config/api";

const Home = () => {
    // fetching posts states
    const [isLoading, setIsLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    // searching states
    const [searchText, setSearchText] = useState('');
    const [searchedResults, setSearchedResults] = useState([]);
    const [searchTimout, setSearchTimeout] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(`${apiURL}/posts`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const result = await response.json();

                    console.log(result.data);

                    setAllPosts(result.data.reverse());
                }

            } catch (error) {

            } finally {
                setIsLoading(false);
            }

        };

        fetchPosts();
    }, []);


    const handleSearchChange = (e) => {
        clearTimeout(searchTimout);

        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const results = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));

                setSearchedResults(results);
            }, 500)
        );
    }

    return (
        <SectionContainer
        >
            <Hero
                title="The Community Showcase"
                subtitle="Browse through a collection of imaginative and visually stunning images generated by DALL-E AI"
            />
            <div className="mt-16">
                <FormField
                    labelName="Search posts"
                    type="text"
                    name="text"
                    placeholder="Search posts"
                    value={searchText}
                    handleChange={handleSearchChange}
                />
            </div>
            <div className="mt-10">
                {
                    isLoading ? (
                        <div
                            className="flex justify-center items-center"
                        >
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {searchText && (
                                <>
                                    <h2
                                        className="font-medium text-[#666e75] text-xl mb-3"
                                    >
                                        Showing results for <span className="text-[#222328]">
                                            {searchText}
                                        </span>
                                    </h2>
                                </>
                            )}
                            <div className="grid lg:grid-cools-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                                {searchText ? (
                                    <RenderCards
                                        data={searchedResults}
                                        title="No search results found"
                                    />
                                ) : (
                                    <RenderCards
                                        data={allPosts}
                                        title="No postsfound"
                                    />
                                )}
                            </div>
                        </>
                    )
                }
            </div>
        </SectionContainer>
    );
};

export default Home;