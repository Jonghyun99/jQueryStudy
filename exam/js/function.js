// console.log('1. -----------------')
$(function(){
    $('.button1').on('click', function(){
    
        let a1 = parseInt($('.number1-1').val());
        let b1 = parseInt($('.number1-2').val());
        
        $('.result1-1').val(a1 + b1);
        $('.result1-2').val(a1 - b1);
        $('.result1-3').val(a1 * b1);
        $('.result1-4').val(a1 / b1);
        $('.result1-5').val(a1 % b1);
        
    });


    //console.log('6. -----------------');

    $('.button6').on('click', function(){

        let a6 =  $('.number6-1').val();
        let number1 = 0;
        let number10 = 0;
        let clap = 0;
        let equal = false;

        $('.result-number6').empty();
        
        // document.querySelector('.result-number6').innerHTML = '';
       
        
        for(let i=1; i<a6; i++){
    
            number1 = i % 10;
            number10 = ( i - number1 ) / 10;
            //1의자리, 10의자리 분리
        
            if(number1 != 0 && number1 % 3 == 0){
                clap += 1

                //console.log(i);
                // document.querySelector('.result-number6').append(i);
                
                // let para = document.createElement('span');
                // let node = document.createTextNode(i)
                // para.appendChild(node);
                // document.querySelector('.result-number6').appendChild(para);

                $('.result-number6').append('<span> ' + i + '</span>')
                
                equal = true;
            }
            if(number10 != 0 && number10 % 3 == 0){
                clap += 1;

                //console.log(i);

                if(equal != true){

                    // document.querySelector('.result-number6').append(i);
                    // let para = document.createElement('span');
                    // let node = document.createTextNode(i)
                    // para.appendChild(node);
                    // document.querySelector('.result-number6').appendChild(para);

                    $('.result-number6').append('<span> ' + i + '</span>')
                }
            }
            equal = false;
        }
    
        //console.log(clap);
        $('.result6-1').val(clap);
        
    });
});


