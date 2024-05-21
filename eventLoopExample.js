// p1 s1 p2 s2
// Promise.resolve().then(() => {
//   console.log("p1");
//   setTimeout(() => {
//     console.log("s2");
//   }, 0);
// });
// setTimeout(() => {
//   console.log("s1");
//   Promise.resolve().then(() => {
//     console.log("p2");
//   });
// });
// p1 s1 p2-1  p2-2 s2-1 s2-2
Promise.resolve().then(() => {
  console.log("p1");
  setTimeout(() => {
    console.log("s2-1");
  }, 0);
  setTimeout(() => {
    console.log("s2-2");
  }, 0);
});
setTimeout(() => {
  console.log("s1");
  Promise.resolve()
    .then(() => {
      console.log("p2-1");
    })
    .then(() => {
      console.log("p2-2");
    });
});
