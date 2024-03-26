const btnFirst = document.getElementById("btn-first");
const btnSecond = document.getElementById("btn-second");

const promise = new Promise((resolve, reject) => {
  console.log("Create first promise");

  let count = 10;

  btnFirst.addEventListener("click", () => {
    resolve(count);
    clearInterval(timer);
  });

  let timer = setInterval(() => {
    count--;
    btnFirst.textContent = `Click (${count})`;

    if (count === 0) {
      reject();
      clearInterval(timer);
    }
  }, 1000);
});

promise
  .then((count) => {
    btnFirst.style.backgroundColor = "green";
    btnFirst.style.color = "white";
    console.log(
      "Promise succeeded from first promise with " + count + " seconds"
    );
  })
  .catch(() => {
    btnFirst.style.backgroundColor = "red";
    btnFirst.style.color = "white";
    console.log("Promise failed from first promise");
  });

const promiseTwo = new Promise((resolve, reject) => {
  console.log("Create second promise");

  let count = 10;

  btnSecond.addEventListener("click", () => {
    resolve(count);
    clearInterval(timer);
  });

  let timer = setInterval(() => {
    count--;
    btnSecond.textContent = `Click (${count})`;

    if (count === 0) {
      reject();
      clearInterval(timer);
    }
  }, 1000);
});

promiseTwo
  .then((count) => {
    btnSecond.style.backgroundColor = "green";
    btnSecond.style.color = "white";
    console.log(
      "Promise succeeded from second promise with " + count + " seconds"
    );
  })
  .catch(() => {
    btnSecond.style.backgroundColor = "red";
    btnSecond.style.color = "white";
    console.log("Promise failed from second promise");
  });

Promise.all([promise, promiseTwo])
  .then(() => {
    console.log("All promises succeeded");
  })
  .catch(() => {
    console.log("One of the promises failed");
  });
