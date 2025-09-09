const args = process.argv.slice(2); 

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
// function argumentsCounter(...args){
//     if(args.length === 0) {
//         return 'No argument'
//     }else if(args.length === 1){
//         return 'Argument found'
//     }else{
//         return 'Arguments found'
//     }
// }
// console.log(argumentsCounter())
