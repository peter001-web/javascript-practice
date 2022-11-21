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


  function someargs(...arg) {
    for (let args = 0; args < arg.length; args++) {
      if (arg[args] === 'peter', 'tomiwa','prince') {
        console.log(arg[args]);
        
      }
      
    } 

  }
  
  someargs('tomiwa', 'peter', 'prince')

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



  



  // wednesday 11/16/2022
