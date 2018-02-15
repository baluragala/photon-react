let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(20), 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(30), 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(40), 1000);
});

// p1.then(d => {
//   console.log(d);
//   p2.then(d => {
//     console.log(d);
//     p3.then(d => {
//       console.log(d);
//       console.log(50);
//     });
//   });
// });

// p1
//   .then(d => {
//     console.log(d);
//     return p2;
//   })
//   .then(d => {
//     console.log(d);
//     return p3;
//   })
//   .then(d => {
//     console.log(d);
//     console.log(50);
//   });

async function print() {
  console.log(10);
  await p1.then(d => console.log(d));
  await p2.then(d => console.log(d));
  await p3.then(d => console.log(d));
  console.log(50);
}

print();
