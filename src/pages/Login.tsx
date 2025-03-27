import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function Login() {
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
        />
      </div>
    </div>
  );
}
