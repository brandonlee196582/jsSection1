const apartments = [ ["001", "002", "003", "004", "005"], ["101", "102", "103", "104", "105"], ["201", "202", "203", '204', "205"], ["301", "302", "303", "304", "305"] ];

let myApt = "301";

for(let index = 0; index < apartments.length; index++){
  if (Array.isArray(apartments[index])){
  	let subArray = apartments[index];
    for(let subIndex = 0; subIndex < subArray.length; subIndex++){
    	if(subArray[subIndex] == myApt){
        console.log("procede to floor " + (index + 1));
      }
    }
  }
}