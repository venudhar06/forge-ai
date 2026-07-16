import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-gray-800 bg-[#111827] p-10">

        <Link to="/forgot-password">
    Forgot Password?
</Link>

        <p className="mt-4 text-center text-gray-400">
          Password reset functionality will be available after backend
          integration.
        </p>

        <Link
          to="/login"
          className="mt-8 block rounded-xl bg-blue-600 py-4 text-center font-semibold text-white hover:bg-blue-500"
        >
          Back to Login
        </Link>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;