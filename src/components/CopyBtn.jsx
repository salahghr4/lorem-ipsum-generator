const CopyBtn = ({ text }) => {
  const handleClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        alert("Failed to copy color to clipboard");
      }
    } else {
      alert("Clipboard access not available");
    }
  };

  return (
    <button
      className="btn copy-btn"
      onClick={handleClick}
    >
      Copy Text
    </button>
  );
};

export default CopyBtn;
