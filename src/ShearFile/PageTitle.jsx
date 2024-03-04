import bannerimg from  "../assets/Untitled design (5).png";

const PageTitle = ({title}) => {
    return (
        <div className="relative">
            <img src={bannerimg} alt="PageTitle" className="w-full" />
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl md:text-4xl font-bold">
                {title}
            </h1>
        </div>
    );
};

export default PageTitle;
