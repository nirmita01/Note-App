export default function NoteEditor({ note, updateNote }) {
  // Update note text
  const handleChange = (e) => {
    updateNote(note.id, e.target.value);
  };

  // Format dates
  const createdDate = new Date(note.createdAt).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const updatedDate = note.updatedAt
    ? new Date(note.updatedAt).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : null;

  return (
    <div className="flex flex-col h-full">
      {/* Editable textarea */}
      <textarea
        value={note.text}
        onChange={handleChange}
        className="flex-1 w-full p-4 rounded-xl resize-none
          bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
          border border-gray-300 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Start writing your note..."
      />

      {/* Dates only */}
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Created: {createdDate}
        {updatedDate && <span> | Last Edited: {updatedDate}</span>}
      </div>
    </div>
  );
}
