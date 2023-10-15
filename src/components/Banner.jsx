import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://qph.cf2.quoracdn.net/main-qimg-ff0f7c1f117cec9b0ad4f7c958d96347-pjlq)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">
                        Connecting You with Tech Experts
                    </h1>
                    <p className="mb-5 text-lg text-center">
                        ExpertLink is your gateway to tech expertise. Connect
                        with a diverse range of experts, including video
                        editors, script writers, system administrators, and
                        more. Get tailored consultations, collaborate, and
                        enhance your tech projects. Join ExpertLink today!
                    </p>
                    <Link to="consultants" className="btn btn-primary bg-[#e2136e]">Hire Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;