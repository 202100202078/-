const promise = new Promise((resolve, rejected) => {
  throw new Error('test');
});

//此时只有then的第二个参数可以捕获到错误信息
promise.then(res => {
  //
}, err => {
  console.log('第二个参数-',err);
}).catch(err1 => {
  console.log('catch',err1);
});

