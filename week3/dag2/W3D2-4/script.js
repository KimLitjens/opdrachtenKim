const getSucceedingPromise = (message, ms) => {
    const succeedingPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(message), ms);
      });
      return succeedingPromise;
   };
   
   const getFailingPromise = (errorMessage, ms) => {
    const failingPromise = new Promise((resolve, reject) => {
        setTimeout(() => reject(errorMessage), ms);
      });
      return failingPromise;   
   };

   const getRandomSucceedingOrFailingPromise = id => {
     let promiseShouldSucceed = Math.random() >= 0.5;
     let randomMillisecond = Math.floor(Math.random() * (5000)) + 1;
    
     if (promiseShouldSucceed) {
       return getSucceedingPromise(
         `Promise ${id} succeeded in ${randomMillisecond} ms.`,
         randomMillisecond
       );
     } else {
       return getFailingPromise(
         `Promise ${id} failed in ${randomMillisecond} ms.`,
         randomMillisecond
       );
     }
   };

 console.log(Math.round(Math.random() * 5000));

   const createPromiseElement = promise => {
     const div = document.createElement("div");
     div.classList = promise.state;
     div.innerHTML = `Promise: ${promise.id}`;
     return div;
   };
   
   const showPromises = promises => {
     console.log("I get called every time a Promise rejects or resolves")
     const promisesDiv = document.querySelector(".promises");
     promisesDiv.innerHTML = "";
     const promisesElements = promises.map(createPromiseElement);
     promisesElements.forEach(element => promisesDiv.appendChild(element));
   };
   
 
   const consumePromise = function(allPromises, id) {
     const promise = getRandomSucceedingOrFailingPromise(id);
     console.log(promise);
  promise
    .then(resolved => {
      console.log(`msg: ${resolved}`);
      allPromises[id].state = "resolved";
      // To update the promises colors, call showPromises again
      showPromises(allPromises);
    })
    .catch(error => {
      console.log(`msg: ${error}`);

      allPromises[id].state = "errored";
      // To update the promises colors, call showPromises again
      showPromises(allPromises);
    });
   };
   
   const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    while (i <= 50) {
      let id = i;
      allPromises.push({
        id
      });
      consumePromise(allPromises, id);
      i++;
    }
  // Put the inital pending Promises in the DOM:
  showPromises(allPromises);
  };

   const registerEventHandlers = () => {
     document.querySelector("button").addEventListener("click", add50Promises);
   };
   
   document.addEventListener("DOMContentLoaded", () => {
     registerEventHandlers();
   });