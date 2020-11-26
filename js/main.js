'use strict';

{
  const btn= document.getElementById('btn');

  btn.addEventListener('click',() => {
    //   const results =['大吉','中吉','小吉','末吉'];
    //   const results =['大吉','中吉','大吉','大吉'];
    //   const n = Math.floor(Math.random() * results.length);
    //   btn.textContent = results[n];
    //   btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n =Math.random();
   if (n < 0.15){
       btn.textContent='1-0'; // 15%
   } else if (n < 0.3) {
       btn.textContent='2-0'; // 15 %
   } else if (n < 0.45) {
       btn.textContent='2-1'; // 15%

   } else if (n < 0.55) { //10 %
       btn.textContent='0-0';

   } else if (n < 0.63) {  //8%
       btn.textContent='1-2'; 
   } else if (n < 0.7) { //7%
       btn.textContent='0-2'; 
   } else {
       btn.textContent="1-1"  //30%
   }


  });
}