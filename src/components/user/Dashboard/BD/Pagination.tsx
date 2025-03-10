

const Pagination = ({ page, limit, totalCount, onPageChange }) => {
    const totalPages = Math.ceil(totalCount / limit);

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className={"flex flex-auto bg-gray-200 mt-3 justify-items-end justify-end items-center space-x-3 mx-aut p-4"}>

            {pages.map((p) => (
                <button className={` w-min px-2 py-1  rounded-sm ${p === page?'bg-blue-500':'bg-white'}`} key={p} onClick={() => onPageChange(p)} disabled={p === page}>
                    {p}
                </button>
            ))}
        </div>
    );
};

export default Pagination;