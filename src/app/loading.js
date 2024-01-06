export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className=" grid place-items-center absolute top-2/4 left-2/4">
            <div className="bg-white p-5 shadow-md rounded-lg flex justify-center">
                <span className=" loading loading-spinner loading-lg"></span>
                <span>Loading...</span>
                {/* <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div> */}
            </div>
        </div>
    )
}