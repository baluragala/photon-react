function forOf(iterable) {
  console.log(iterable[Symbol.iterator]);
  if (!iterable[Symbol.iterator]) {
    console.error("not an iterable");
    return;
  }
  let it = iterable[Symbol.iterator]();

  let result = it.next();
  while (!result.done) {
    console.log(result.value);
    result = it.next();
  }
}
