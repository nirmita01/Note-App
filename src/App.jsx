import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import NotesSidebar from "./components/NotesSidebar";
import NoteEditor from "./components/NoteEditor";
import SignInPage from "./pages/SignInPage";
import AuthButton from "./components/Authbutton.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignInPage, setShowSignInPage] = useState(false); // Toggle sign-in page

  // Load dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Sign-in handler
  const handleSignIn = (credentials) => {
    setUser({ email: credentials.email });
    setShowSignInPage(false); // Close sign-in page
  };

  // Notes handlers
  const addNote = () => {
    if (!user) return;
    const newNote = {
      id: Date.now(),
      text: "",
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    setNotes([newNote, ...notes]);
    setSelectedNoteId(newNote.id);
  };

  const updateNote = (id, text) => {
    if (!user) return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, text, updatedAt: new Date().toISOString() }
          : note,
      ),
    );
  };

  const deleteNote = (id) => {
    if (!user) return;
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (selectedNoteId === id) setSelectedNoteId(null);
  };

  const selectedNote = notes.find((note) => note.id === selectedNoteId);

  // If user clicks Sign In, show SignInPage
  if (showSignInPage) {
    return <SignInPage onSignIn={handleSignIn} darkMode={darkMode} />;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex transition-colors duration-300 bg-pink-100 dark:bg-[#0a1a2f] text-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <NotesSidebar
          notes={notes}
          selectedNoteId={selectedNoteId}
          setSelectedNoteId={setSelectedNoteId}
          addNote={addNote}
          deleteNote={deleteNote}
        />

        {/* Main Editor */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <Header user={user} />
            <div className="flex gap-2 items-center">
              <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              {!user && (
                <AuthButton onClick={() => setShowSignInPage(true)}>
                  Sign In
                </AuthButton>
              )}
            </div>
          </div>

          {selectedNote ? (
            <NoteEditor note={selectedNote} updateNote={updateNote} />
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              {user
                ? "Select a note or click + to add one."
                : "Please sign in to create and edit notes."}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
