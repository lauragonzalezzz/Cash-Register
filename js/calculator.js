

function calcModule(){
  var total = 0;
  var memory = 0;


  function load(x){
    // if( typeof x !== 'number'){
    //   throw new Error('not a number'); 
    // }
      
    total = x;
    display.value = total;
    console.log('total = ', total);
    return display.value;
  }

  function getTotal(){
    if (typeof total !== 'number') {
      throw new Error('This is not a number');
    }
   return total;
  }

    function add(a, b){
      if( typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('not a number'); 
      }
      total = a + b;
      return total;
    }

    function subtract(a, b){
      if( typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('not a number'); 
      }
      total = a - b; 
      return total;
    }

    function multiply(a, b){
      if( typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('not a number'); 
      }
      total= a * b;
      return total;
    }

    function divide(a, b){
       if( typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('not a number'); 
      }
      total = a / b;
      return total; 
    }

    function recallMemory(){
      console.log('recallMemory is working', memory);
      return display.value = memory; 
    }

    function saveMemory(){
      return display.value += memory;
    }

    function clearMemory(){
      memory = 0;
      return memory;
    }
    

    return{
      load: load, 
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