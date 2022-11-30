// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }

//   function myfunction() {
//     document.getElementById('myImage').src='./images/download.jpg'
//   }

  var age = 21;
  var age2 = 22;

  age += 2

  // console.log(age); 

  // wednesday 11/16/2022
  // javascript lesson on loop

  let name= 'tomiwa';

  for (let alphabet = 0; alphabet < name.length; alphabet ++) {
    // console.log(name[alphabet])
  }

  let club = 'barca';

  for (let index = 0; index < club.length; index++) {
    // console.log(club[index]);
  }

  let shcool = 'rhema';

  for (let Alpha = 0; Alpha < shcool.length; Alpha++) {
    // console.log(shcool[Alpha]);
    
  }

  let age3 = 10;

  while (age3 < 20) { //condition always has to be true
    // console.log(age3);
    age3++
  }

  let x = 19 ;

  do{
    // console.log(x);
    x++;
  } while(x < 20)


  function fullname(firstname, lastname) {
    // console.log(`${firstname} ${lastname}`);
    return `${firstname} ${lastname}`

  }

  function logname() {
    fullname('tomiwa', 'bakare')
    fullname('tomiwa', 'bakare')
  }

  logname();

  function dateofbirth(day, month, year ) {
    // console.log(`${day}`, `${month}`, `${year}`);
    // return `${day}` `${month}` `${year}` 
  }

  function birthday() {
    dateofbirth('23', "march", '2005' )
  }

  birthday();



// function somearg(...arg) {
//   for (let ar = 0; ar < arg.length; ar++) {
//     console.log(arg);
//   }
  
// }

// someargs('tomiwa', 'pp')



  // function someargs(...arg) {
  //   for {let arg =0; arg arg.length: arg++ }{
  //     if (arg[arg] === 'tomiwa') {
  //       console.log(arg[arg])
  //     }
  //   }
  // }


  // function someargs(...arg) {
  //   for (let args = 0; args < arg.length; args++) {
  //     if (arg[args] === 'peter', 'tomiwa','prince',) {
  //       console.log(arg[args]); 
         
  //     }
      
  //   } 
 
  // }
  
  // someargs('tomiwa', 'peter', 'prince', ) 



  function sumup(...toadd) {
    // console.log(toadd);
    let result = 0 ;
  for (let i = 0; i < toadd.length; i++) {
    result += toadd[i];
    // console.log(toadd[i]);
    
  }
  return result ;
  }
  // console.log(sumup(10, 10, 10))

  function  someschools(...schools) {
    for (let school = 0; school < schools.length; school++) {
      if (schools[school] === 'rhema', 'clover','porter') {
        console.log(schools[school]);
        
      }
    }
    
  }
  // someschools('rhema');

  



  // wednesday 11/16/2022

  
  // thursday 11/24/2022

  // JAVASCRIPT OBJECT
  const bike = {
    name: 'toyota',
    color: 'red',
    model: 101
  }

  // console.log(bike);

  // #Example 2
  const table = new Object();
  table.name = 'furniture';
  table.color = 'red';
  table.price = 1000;

  // console.log(table);


  // #Example 3
  class car {
  constructor(name, color, model) {
    this.name = name;
    this.color = color;
    this.model = model;

  }
}

// console.log(new car);

// const yamaha = new car{'mmm'}

class cars {
  constructor(name, color, height) {
    this.name = name;
    this.color = color;
    this.height = height;
  }
}
 

const yamaha = new cars('yama','red',10)
const toyota = new cars('toyota','red',10)

console.log(cars); 
 


// console.log(yamaha);
// console.log(

// );


  // thursday 11/24/2022





  // friday 11/25/2022
// JAVASCRIPT ARRAY

let shoppingcart = ['oil', 22,]
// console.log(shoppingcart);

// const animal = new animal ('monkeyk', 'cow');
// console.log(animal);

  // friday 11/25/2022