const themes = {
  default: {
    "--base-text-color": "#212529",
    "--header-bg": "#007bff",
    "--header-text-color": "#fff",
    "--default-btn-bg": "#007bff",
    "--default-btn-text-color": "#fff",
    "--default-btn-hover-bg": "#0069d9",
    "--default-btn-border-color": "#0069d9",
    "--danger-btn-bg": "#dc3545",
    "--danger-btn-text-color": "#fff",
    "--danger-btn-hover-bg": "#bd2130",
    "--danger-btn-border-color": "#dc3545",
    "--input-border-color": "#ced4da",
    "--input-bg-color": "#fff",
    "--input-text-color": "#495057",
    "--input-focus-bg-color": "#fff",
    "--input-focus-text-color": "#495057",
    "--input-focus-border-color": "#80bdff",
    "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
  },
  dark: {
    "--base-text-color": "#212529",
    "--header-bg": "#343a40",
    "--header-text-color": "#fff",
    "--default-btn-bg": "#58616b",
    "--default-btn-text-color": "#fff",
    "--default-btn-hover-bg": "#292d31",
    "--default-btn-border-color": "#343a40",
    "--default-btn-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    "--danger-btn-bg": "#b52d3a",
    "--danger-btn-text-color": "#fff",
    "--danger-btn-hover-bg": "#88222c",
    "--danger-btn-border-color": "#88222c",
    "--input-border-color": "#ced4da",
    "--input-bg-color": "#fff",
    "--input-text-color": "#495057",
    "--input-focus-bg-color": "#fff",
    "--input-focus-text-color": "#495057",
    "--input-focus-border-color": "#78818a",
    "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
  },
  light: {
    "--base-text-color": "#212529",
    "--header-bg": "#fff",
    "--header-text-color": "#212529",
    "--default-btn-bg": "#fff",
    "--default-btn-text-color": "#212529",
    "--default-btn-hover-bg": "#e8e7e7",
    "--default-btn-border-color": "#343a40",
    "--default-btn-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    "--danger-btn-bg": "#f1b5bb",
    "--danger-btn-text-color": "#212529",
    "--danger-btn-hover-bg": "#ef808a",
    "--danger-btn-border-color": "#e2818a",
    "--input-border-color": "#ced4da",
    "--input-bg-color": "#fff",
    "--input-text-color": "#495057",
    "--input-focus-bg-color": "#fff",
    "--input-focus-text-color": "#495057",
    "--input-focus-border-color": "#78818a",
    "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
  },
};
let lastSelectedTheme = "default";

const themeSelect = document.getElementById("themeSelect");
themeSelect.addEventListener("change", onThemeSelectHandler);

function onThemeSelectHandler(e) {
  const selectedTheme = themeSelect.value;
  //   const isConfirmed = confirm(
  //     `Вы действительно хотите изменить тему: ${selectedTheme}?`
  //   );
  //   if (!isConfirmed) {
  //     themeSelect.value = lastSelectedTheme;
  //     return;
  //   }
  setTheme(selectedTheme);
}

function setTheme(name) {
  const selectedThemeObj = themes[name];
  Object.entries(selectedThemeObj).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
