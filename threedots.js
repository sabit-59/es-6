const ages =[10,11,12,13,14];
const ages2 = [15,16,17,18];
const ages3 = [19,20,21,22];

const allAges = ages.concat(ages2).concat(ages3).concat([23]);
console.log(allAges);

const allAges2 = [...ages,...ages2,5,...ages3]
console.log(allAges2);

const businessman =650;
const minister = 450;
const sochib = 250;
 const takaPoisa = [650,450,850,250,1000]
// const maximum = Math.max(businessman,minister,sochib);
const maximum = Math.max(...takaPoisa)
;console.log(maximum);