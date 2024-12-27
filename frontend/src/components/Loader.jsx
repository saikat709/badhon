
export default function Loader( { horizontal = false } ){
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <span className="loading loading-md md:loading-lg"></span>
                <span>Loading</span>
            </div>
        </div>
    );
}