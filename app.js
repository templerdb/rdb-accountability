const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5uBOqjvLI_1eT8GopC7NML0ZAo4KFBrRf-8hVhkzj3hMViCKnR-P75XvH2E6tvZkh2g/exec";

async function checkStatus() {
  const sessionType = document.getElementById("sessionType").value;
  const platoon = document.getElementById("platoon").value;

  if (!platoon) {
    alert("Enter platoon");
    return;
  }

  const url = `${SCRIPT_URL}?sessionType=${sessionType}&platoon=${encodeURIComponent(platoon)}`;
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}
