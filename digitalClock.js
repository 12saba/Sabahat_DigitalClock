digitalClock(); //hoistig

function afterOneSec(ms) {
  return new Promise((accept) => setTimeout(accept, ms));
}

async function digitalClock() {
  console.clear();
  const time = new Date(); //the current time
  const hrs = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  const sec = String(time.getSeconds()).padStart(2, "0");

  console.log("Sabahat ceate this Digital Clock");
  console.log("hh:mm:ss");
  console.log(`${hrs}:${min}:${sec}`);

  return await afterOneSec(1000).then(digitalClock); //calling chain
}
