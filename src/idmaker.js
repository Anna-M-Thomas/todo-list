//Closure that will give each to do item its own id
let idmaker = (function(n) {
  return function() {
    n += 1;
    return n+"-ID";
  }
}(-1));

export {idmaker};