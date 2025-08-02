console.log("is cool site right?")
console.log("You can use some commands here!:")
console.log("/time.tokyo/time.london and more then")
const yes = "thank :D"
const no = "ok :/"
const time = {
  get tokyo() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Asia/Tokyo', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get london() {
    return new Date().toLocaleTimeString('en-GB', { 
      timeZone: 'Europe/London', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get newYork() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'America/New_York', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get losAngeles() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'America/Los_Angeles', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get paris() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Europe/Paris', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get sydney() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Australia/Sydney', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get moscow() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Europe/Moscow', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get dubai() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Asia/Dubai', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get hongKong() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Asia/Hong_Kong', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  },
  get singapore() {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: 'Asia/Singapore', 
      hour12: true,
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  }
};





//some NOdarkModekai
 const kaipaCheckbox = document.getElementById('kaipaToggle');

window.onload = () => {
  const kaipaIsLight = localStorage.getItem("lightMode") === "true";
  kaipaCheckbox.checked = kaipaIsLight;
  if (kaipaIsLight) {
    document.body.classList.add("light-mode");
  }
};

function toggleKaipa() {
  if (kaipaCheckbox.checked) {
    document.body.classList.add("light-mode");
    localStorage.setItem("lightMode", "true");
  } else {
    document.body.classList.remove("light-mode");
    localStorage.setItem("lightMode", "false");
  }
}

kaipaCheckbox.addEventListener("change", toggleKaipa);

