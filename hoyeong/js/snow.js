const body = document.querySelector(".workstyle");
const videoFile = document.querySelector(".video");

const MIN_DURATION = 10;

const makeSnowflake = () => {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random() * 10;
  const duration = Math.random() * 20 + MIN_DURATION;

  snowflake.classList.add("snowflake");
  snowflake.style.backgroundColor = "white";
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = initialOpacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);
  setTimeout(() => {
    body.removeChild(snowflake);
  }, (duration + delay) * 1000);
};

const handleMouseClick = () => {
  makeSnowflake();
  for (let index = 0; index < 50; index++) {
    setTimeout(makeSnowflake, 500 * index);
  }
};

videoFile.addEventListener("click", handleMouseClick);
