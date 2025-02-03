import { Link, Outlet, useNavigate } from "react-router-dom"

const RootLayout = () => {
    const isAuth = localStorage.getItem("token") !== null;
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex space-x-4">
                            <Link to="/" className="text-xl font-bold">
                                Home
                            </Link>
                            <Link to="/profile" className="text-xl font-bold">
                                Profile
                            </Link>
                            <Link to="/dashboard" className="text-xl font-bold">
                                Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout