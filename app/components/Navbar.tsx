import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200">
                    <span className="text-white font-bold text-xl">R</span>
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-800">ResumeAI <span className="text-emerald-600">Pro</span></span>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
