

var Calculator = function (){

    var total= 0;
    var memory= 0;


    function calculateTotal(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      total = x;
      return total;
    }

    function getTotal(){
      return total;
    }

    function add(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      total += x;
      return total;
    }

    function subtract(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      total = total-x; 
      return total;
    }

    function multiply(x){
      if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      total= total * x;
      return total;
    }

    function divide(x){
       if( typeof x !== 'number'){
        throw new Error('not a number'); 
      }
      total= total/x;
      return total; 
    }

    function recallMemory(){
      return memory; 
    }

    function saveMemory(){
      memory = total;
      return memory;
    }

    function clearMemory(){
      memory = 0;
      return memory;
    }
    
    return{
      load: calculateTotal, 
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory

  };


};