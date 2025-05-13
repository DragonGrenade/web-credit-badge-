const email = "chrisnolan012@gmail.com";
  const btn = document.getElementById("emailBtn");
  const label = document.getElementById("copyLabel");

  function showEmail() {
    btn.textContent = email;
  }

  function resetText() {
    btn.textContent = "Email Me";
  }

  function copyEmail() {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        label.style.display = "block";
        setTimeout(() => {
          label.style.display = "none";
        }, 2000);
      }).catch(() => {
        fallbackCopy();
      });
    } else {
      fallbackCopy();
    }
  }

  function fallbackCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.style.position = "fixed"; // prevent scroll
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document.execCommand("copy");
      label.style.display = "block";
      setTimeout(() => {
        label.style.display = "none";
      }, 2000);
    } catch (err) {
      alert("Could not copy email. Please copy manually.");
    }

    document.body.removeChild(textarea);
  }