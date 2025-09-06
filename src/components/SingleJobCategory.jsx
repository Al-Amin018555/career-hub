const SingleJobCategory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-[rgba(152,115,255,0.05)] py-12 px-14 rounded-lg">
            <div className="mb-8">
                <img className="p-3 bg-[rgba(152,115,255,0.1)] rounded-lg" src={logo} alt="" />
            </div>
            <h4 className="mb-2 text-[20px] font-extrabold">{category_name}</h4>
            <p className="text-[#A3A3A3]">{availability}</p>
        </div>
    );
};

export default SingleJobCategory;