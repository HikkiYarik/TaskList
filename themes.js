// Объект с стилями для тем
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
    "--header-bg": "#E6E6FA",
    "--header-text-color": "#212529",
    "--default-btn-bg": "#E6E6FA",
    "--default-btn-text-color": "#212529",
    "--default-btn-hover-bg": "#e8e7e7",
    "--default-btn-border-color": "#343a40",
    "--default-btn-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
    "--danger-btn-bg": "#f1b5bb",
    "--danger-btn-text-color": "#212529",
    "--danger-btn-hover-bg": "#ef808a",
    "--danger-btn-border-color": "#e2818a",
    "--input-border-color": "#ced4da",
    "--input-bg-color": "#E6E6FA",
    "--input-text-color": "#495057",
    "--input-focus-bg-color": "#E6E6FA",
    "--input-focus-text-color": "#495057",
    "--input-focus-border-color": "#78818a",
    "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
  },
};

// объявление переменной которая забирает из локал стореджа текущую выбранную тему
// если в хранилище пусто тогда вместо выбранной темы в значение залетает дефолтная
let lastSelectedTheme = localStorage.getItem("app_theme") || "default";
//объявлять стандартной темой последнюю из локал стореджа
setTheme(lastSelectedTheme);

//наш селект
const themeSelect = document.getElementById("themeSelect");
//эвент с обработчиком на селект и темы которые мы в нём выбираем.
themeSelect.addEventListener("change", onThemeSelectHandler);

//обработчик выбора темы
function onThemeSelectHandler(event) {
  //константа которая сохраняет вэлью выбранной темы
  let selectedTheme = themeSelect.value;

  /*
   * На данный момент существует проблема
   * Тема в локал сторедже сохраняется, а значение темы в селекте после перезагрузки нет.
   * Итого после перезагрузки у нас висит к примеру тёмная тема, но в селекте стандартная, так как в html она физически первая
   */
  // Object.values(themeSelect).forEach((child) => {
  //   if (child.value != selectedTheme) {
  //     return;
  //   }
  //   child.remove();
  //   themeSelect.prepend(child);
  // });

  //передача в функцию установки выбранной темы аргумента с вэлью выбранной темы
  setTheme(selectedTheme);

  //lastSelectedTheme = selectedTheme;

  //запись в локал сторэдж ключа и значения текущей выбранной темы
  localStorage.setItem("app_theme", selectedTheme);
}

//функция установки выбранной темы
function setTheme(name) {
  //константа вбирающая в себя объект(выбранную тему) с ключами и значениями стилей
  const selectedThemeObj = themes[name];
  //перебор по ключам и значениям нашего объекта и назначение документу стилей из него
  Object.entries(selectedThemeObj).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}
