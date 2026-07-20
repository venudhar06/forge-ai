import {
  Lock,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-xl rounded-3xl border border-slate-700 bg-slate-900 p-10 text-center shadow-xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/10">

          <Lock
            size={52}
            className="text-yellow-400"
          />

        </div>

        <h1 className="mt-8 text-6xl font-bold text-white">
          401
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Unauthorized
        </h2>

        <p className="mt-4 text-slate-400">
          You need to log in before accessing this page.
        </p>

        <Link
          to="/login"
          className="mx-auto mt-10 flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white"
        >
          <LogIn size={18} />
          Go to Login
        </Link>

      </div>

    </div>
  );
}