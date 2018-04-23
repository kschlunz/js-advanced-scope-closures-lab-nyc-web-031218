
function produceDrivingRange(blockRange){

  return function(blockStart, blockEnd){
    let start = parseInt(blockStart);
    let end = parseInt(blockEnd);
    let distanceToTravel = Math.abs(end - start);

    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }


  }
}

function produceTipCalculator(fare){
  return function(tip){
    let value = fare * tip
    return value;
  }
}


  function createDriver(){
      let driverId = 0
    return class{
      constructor(name){
        this.name = name
        this.id = ++driverId;
      }

    }
  }

  const Driver = createDriver();
