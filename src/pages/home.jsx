import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export default function Home() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen w-full flex flex-column" style={{ background: "#E5F6FF" }}>
      <div className="grid p-6 md:p-8 align-items-center justify-content-center" style={{ flex: 1 }}>
        <div className="col-12 md:col-6 text-left">
          <div className="text-5xl font-bold mb-2">Web <span className="text-primary">Design</span></div>
          <div className="text-2xl text-cyan-700 font-bold mb-4">HOME PAGE</div>
          <p className="text-lg mb-4" style={{ maxWidth: "100rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
          <Button label="Learn More" className="p-button-rounded p-button-info" onClick={handleLearnMoreClick} />
          <div className="flex gap-3 mt-5">
            <i className="pi pi-instagram text-2xl"></i>
            <i className="pi pi-twitter text-2xl"></i>
            <i className="pi pi-facebook text-2xl"></i>
          </div>
        </div>
        <div className="col-12 md:col-6 text-center">
          <img
            src="/images/Home_illustration.jpg"
            alt="Home_illustration.jpg"
            className="w-full"
            style={{ maxHeight: "100rem", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};
