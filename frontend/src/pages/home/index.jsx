// react deps
import { useState } from "react";

// customs components
import { FormField, Hero, Loader } from "../../components";
import RenderCards from "../../components/RenderCards";

const Home = () => {
    // fetching posts states
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    // searching states
    const [searchText, setSearchText] = useState();

    return (
        <section
            className="max-w-7x1 mx-auto"
        >
            <Hero />
            <div className="mt-16">
                <FormField />
            </div>
            <div className="mt-10">
                {
                    loading ? (
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
                                    <div className="grid lg:grid-cools-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                                        {searchText ? (
                                            <RenderCards
                                                data={[]}
                                                title="No search results found"
                                            />
                                        ):(
                                            <RenderCards
                                                data={[]}
                                                title="No postsfound"
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default Home;