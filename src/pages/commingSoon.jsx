const ComingSoon = () => {
    return (
        <div
            className="flex flex-column justify-content-center align-items-center text-center min-h-screen w-full"
            style={{
                backgroundImage: `url('/gif/comingSoon.gif')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#04dec8",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            <div className="text-3xl sm:text-5xl font-bold mb-3">We Are Coming Very Soon!</div>
            <div className="mb-8 text-lg font-bold">
                We are ready to lunch{" "}
                <a
                    href="https://everefficient.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-300 underline"
                >
                </a>
            </div>

            <a
                href="https://everefficient.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-pink-400 hover:bg-pink-500 text-teal-600 font-semibold py-2 px-4 rounded transition duration-200"
            >
                Visit Our Main Website
            </a>

            <div className="flex gap-3 mt-2">
                <i className="pi pi-twitter text-2xl"></i>
                <i className="pi pi-facebook text-2xl"></i>
                <i className="pi pi-linkedin text-2xl"></i>
                <i className="pi pi-github text-2xl"></i>
            </div>
        </div>
    );
};

export default ComingSoon;