                                              // Create outer function and pass inner function as argument

                                               function outer() {
    
                                                      function inner() {
         
                                                                         inner.x = "Hello World from Inner function";
        
                                                                         console.log(inner.x); 
       
                                                                       }
                                                                       
                                                                        inner();
                                                                
                                                                }
                                                                 
                                                                 outer();