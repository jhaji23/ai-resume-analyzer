import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => ([
    { title: 'Auth | ResumeAI Pro' },
    { name: 'description', content: 'Secure access to your professional dashboard.' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1] || '/';
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-gradient flex items-center justify-center min-h-screen">
            <div className="gradient-border shadow-2xl scale-110">
                <section className="flex flex-col gap-10 bg-white rounded-2xl p-12 items-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                        <span className="text-white font-bold text-3xl">R</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h1 className="text-4xl text-slate-800">Welcome Back</h1>
                        <h2>Secure access to your insights</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p>Signing you in...</p>
                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button" onClick={auth.signOut}>
                                        <p>Log Out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button" onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth
