
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

const customers = 1
const location = 'RSA'
let currency = null

if (location === RSA ) { 
 shipping = 400 ;
 currency = 'R'; }

if (location === NAM){
  shipping = 600 ;
  currency= "$"; 
 }
  else {shipping = 800;
  currency= "$" ;
}


shoes = 300 * 1
toys - 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

//shipping = null
//currency = $

cost = shoes + batteries + pens + shirts

console.log(cost)

if ((cost > 1000 && location === 'RSA') ||(cost > 60 && location ==='NAM') && customers === 1 ) {
 shipping = 0  /*|| calcShipping;*/ 
}

// if (customers !==1 ) {
//   console.log (FREE_WARNING);
// }


if (shipping === 0 && customers !== 1) { 
  console.log(FREE_WARNING) 
}

location === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

