function drawTree(h) {
  for(var i= 0; i<=h; i++){
    var star = '';
    for(var k= 1; k <= h - i; k++){
      star += " ";
    };
    for(var j= 0; j<= i*2; j++) {
        star += "*";
    };
    console.log(star);
  };
};

drawTree(5);
