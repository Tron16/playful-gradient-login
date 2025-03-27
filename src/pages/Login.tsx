import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    if (authStatus === "authenticated") {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [authStatus, navigate, location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to Solar Scheduler
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to your account
          </p>
        </div>
        <Authenticator
          components={{
            Header() {
              return (
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sign In
                  </h3>
                </div>
              );
            },
          }}
        >
          {({ signOut, user }) => (
            <div className="mt-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Signed in as {user?.username}
                </p>
                <button
                  onClick={signOut}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
}
