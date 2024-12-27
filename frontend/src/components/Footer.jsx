export default function Footer(){

    return (
    <>
        <footer className="w-full flex justify-center items-center gap-1 p-3 text-md bg-white text-slate-900 font-bold">
            <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-lg">
                <div className="flex justify-center flex-col items-center">
                    <p>Make this website better! </p> <a href="https://www.github.com/saikat709/iit-indoor" target="_blank" className="text-primary underline">Contribute</a>
                    <p>Suggetions for me - </p> <a href="mailto:saikatislam709@gmail.com" className="text-primary underline">saikatislam709@gmail.com</a>
                </div>
                <div className="h-px w-full md:w-px md:h-12 mx-6 text-black bg-black my-2"></div>
                <div className="flex justify-center flex-col items-center">
                    <h2> Being maintained by, <br/><span className="text-nowrap text-primary">Mohammad Saikat Islam</span> </h2>
                    <h2> Institute of Information Technology, </h2>
                    <h2> University of Dhaka </h2>
                </div>
            </div>
        </footer>
    </>);
}