var calculator = {
  add : function(expression) { 
   
    if (expression === "") {
      return 0;
    }
      
   
        
    if (expression.indexOf("//") === 0) {
      var parseoutdelimter = expression[2];
      var row2 = expression.substr(3);
      return foo(parseoutdelimter, row2)
    }
    else
    {
      return foo(",",expression)
    }
  }
}

function foo(delimiter, s) {
      var arr = s.split([delimiter]);
    
      if(arr.length === 1)
         return parseInt(arr[0]);
  
      var negatives = [];    
      var sum = 0;
      arr.forEach(function(element) {
         var i = parseInt(element);
         if (i < 0)
               negatives.push(i);
         sum += i;
        }, this);
        
       if (negatives.length > 0)
          throw Error(negatives.join(" ")); 
        
      return sum;
    }
    
   