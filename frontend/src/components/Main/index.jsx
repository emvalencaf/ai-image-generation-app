const Main = ({ children }) => {
    return (
        <main
            className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]"
        >
            {children}
        </main>

    );
};

export default Main;