const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

setInterval(() => {
  const time = new Date();

  hrs.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();

  min.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + + time.getSeconds();

})


