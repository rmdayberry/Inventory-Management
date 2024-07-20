async function loadConfig() {
  const { setLightTheme, setDarkTheme } = await import("./theme.mjs");
  const currentHour = new Date().getHours();

  if (currentHour < 18) {
    setLightTheme();
  } else {
    setDarkTheme();
  }
}
