var weight = [35,38,42,45,43,34,36,41,48,32];
var sum;



function setup() {
  createCanvas(400,400);
  for(var i =0; i < weight.length; i++) {
    sum = sum+ weight[i];
  }
  var avg = sum/weight.lenght;
  console.log(sum);

}

function draw() 
{
  background(30);
}
