import { useState } from "react";
import AuthButton from "../components/Authbutton";

export default function SignInPage({ onSignIn, darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple sign in logic: just accept any email/password
    onSignIn({ email });
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${darkMode ? "bg-[#0a1a2f] text-gray-100" : "bg-pink-100 text-gray-900"}`}
    >
      <div
        className={`w-96 p-6 rounded-xl shadow-lg transition-colors duration-300
          ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-3 rounded-lg border border-gray-300 dark:border-gray-600
              ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
              focus:outline-none focus:ring-2 focus:ring-pink-300`}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`p-3 rounded-lg border border-gray-300 dark:border-gray-600
              ${darkMode ? "bg-gray-700 text-gray-100" : "bg-gray-100 text-gray-900"}
              focus:outline-none focus:ring-2 focus:ring-pink-300`}
            required
          />
          <AuthButton type="submit">Sign In</AuthButton>
        </form>
      </div>
    </div>
  );
}
