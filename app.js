let activeAlert = false;
const title = "404";
const msg = "Error";

const changeTitle = setInterval(() => {
  (document.title = activeAlert ? title : msg), (activeAlert = !activeAlert);
}, 1600);
