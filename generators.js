let p10 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(20), 1000);
});

let p20 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 1000);
});

let p30 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(40), 1000);
});

function* generateNumbers() {
  try {
    console.log(10);
    let r1 = yield p10;
    console.log(r1);
    let r2 = yield p20;
    console.log(r2);
    let r3 = yield p30;
    console.log(r3);
    console.log(50);
  } catch (e) {}
}
