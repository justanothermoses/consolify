   /*

    This adds a fixed area to the bottom of your screen showing all console.logs, .debugs, .infos and .errors

    */
   
   let consoleHeight = 140;
   let consoleOutputVisible = true;

   const consoleOutput = document.createElement('div')
//    consoleOutput.id = 'consoleOutput'
  consoleOutput.style.cssText = 'position: fixed; box-sizing: border-box; width: 100%; height: ' + consoleHeight +'px;left: 0;bottom: 0;padding: 15px;overflow-y: scroll;background-color: #fffd;z-index: 100000; transition: .3s linear;'
  document.querySelector('html').appendChild(consoleOutput);
  
  const consoleCloseButton = document.createElement('div')
//    consoleCloseButton.id = 'consoleCloseButton';
  consoleCloseButton.style.cssText = 'position: fixed; width: 50px; height: 30px; right: 10px;bottom: ' + consoleHeight + 'px;background-color: #fffd;z-index: 100000; border-radius: 10px 10px 0 0; transition: .3s linear;'
   consoleOutput.appendChild(consoleCloseButton);

   const consoleCloseButtonArrow = document.createElement('div')
//    consoleCloseButtonArrow.id = 'consoleCloseButtonArrow';
  consoleCloseButtonArrow.style.cssText = 'position: absolute;z-index: 100000;width: 20px; height: 20px; border-left: 2px solid #000; border-bottom: 2px solid #000; margin-left: 15px; margin-top: 0px; transform: rotateZ(315deg);transition: .3s linear;'
   consoleCloseButton.appendChild(consoleCloseButtonArrow);
  
   consoleCloseButton.onclick = function () {
       if (consoleOutputVisible) {
           consoleOutput.style.bottom = '-' + consoleHeight + 'px';
           consoleCloseButton.style.bottom = '0px';
           consoleCloseButtonArrow.style.transform = 'rotateZ(135deg)';
           consoleCloseButtonArrow.style.marginTop = '13px';
           consoleOutputVisible = !consoleOutputVisible;
       } else {
           consoleOutput.style.bottom = '0px';
           consoleCloseButton.style.bottom = consoleHeight + 'px';
           consoleCloseButtonArrow.style.transform = 'rotateZ(315deg)';
           consoleCloseButtonArrow.style.marginTop = '0px';
           consoleOutputVisible = !consoleOutputVisible;
       }
   }

  if (typeof console  != "undefined") 
      if (typeof console.log != 'undefined')
          console.olog = console.log;
      else
          console.olog = function() {};

      console.log = function(message) {
          console.olog(message);
      let newP = document.createElement('P')
      newP.innerHTML =  typeof(message) !== 'object'? message : JSON.stringify(message);
      consoleOutput.appendChild(newP);
      consoleOutput.scrollTo(0, consoleOutput.scrollHeight) 
     
      };
  console.error = console.debug = console.info =  console.log;
