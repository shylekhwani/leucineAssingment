import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLogin } from "../../hooks/apis/auth/useLogin";

export const LogInComponent = function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState(null);

    const navigate = useNavigate();

    const { loginMutation } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setValidationError(null);

        try {
          await loginMutation({ email, password });
          console.log("Sign-in successful");
          navigate("/");
        } catch (error) {
          console.error("Error signing in:", error);
          setValidationError(error);
        } finally {
          setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
          >
            <h2 className="text-2xl font-bold text-center">Sign In</h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {validationError && (
              <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {validationError.message}
              </div>
            )}

            <p className="text-center text-gray-600 mt-4">
              Dont have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>
    );
};