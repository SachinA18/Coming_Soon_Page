const About = () => {
    return (
        <div className="min-h-screen w-full flex flex-column" style={{ background: "#E5F6FF" }}>
            <div className="grid p-6 md:p-8 align-items-center justify-content-center" style={{ flex: 1 }}>
                <div className="col-12 md:col-6 text-left">
                    <div className="text-5xl font-bold mb-2">About <span className="text-primary">Us</span></div>
                    <p>
                        Welcome to our website! We're dedicated to delivering high-quality services that meet your
                        needs. Our mission is to provide exceptional value and a seamless user experience.
                    </p>
                    <p>
                        We appreciate your interest and look forward to connecting with you.
                    </p>
                </div>
                <div className="col-12 md:col-6 text-center">
                    <img
                        src="/images/About_illustration.jpg"
                        alt="About_illustration.jpg"
                        className="w-full"
                        style={{ maxHeight: "100rem", objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;