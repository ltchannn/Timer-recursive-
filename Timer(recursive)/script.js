const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

    var startTimer = null;

    function timer(){
        //Base Case = initialization
        if(daysEl.value == 0 && hoursEl.value == 0 && minsEl.value == 0 && secondsEl.value ==0){
            daysEl.value = 0;
            hoursEl.value = 0;
            minsEl.value = 0;
            secondsEl.value = 0;
        }
        //Recusive Case: Case study
        else{
            //Case 1: Check Day
            if(daysEl.value > 0 && hoursEl.value == 0 && minsEl.value == 0 && secondsEl.value ==0){
                daysEl.value --;
                hoursEl.value = 23;
                minsEl.value = 59;
                secondsEl.value = 59;
            }
            else if (hoursEl.value > 0 && minsEl.value == 0 && secondsEl.value ==0) {
                hoursEl.value --;
                minsEl.value = 59;
                secondsEl.value = 59;
            }
            else if (minsEl.value > 0 && secondsEl.value ==0) {
                minsEl.value --;
                secondsEl.value = 59;
            }
            else if (secondsEl.value > 0) {
                secondsEl.value --;
            }
        }
    }

    function stopTimer(){
        clearInterval(startTimer);
    }

    startButton.addEventListener('keyup', function(event){
        function startInterval(){
            startTimer = setInterval(timer,1000);
        }
        startInterval();   
    });
    
    resetButton.addEventListener('click', function(){
        daysEl.value = 0;
        hoursEl.value = 0;
        minsEl.value = 0;
        secondsEl.value = 0;
        stopTimer()
        })

        
         
 









