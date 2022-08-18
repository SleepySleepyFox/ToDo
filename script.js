let count = 0;
let stateCount = 0;
let indxState = 0;
let clickCount = 0;

let deleted = 0;
let done = 0;
let = def = 0;

var onlongtouch; 
var timer;
var touchduration = 500;



var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


let blockFunc = {
    addElement: function(parentId, elementTag, elementId, html, addFunc) {
        let parentElement = document.getElementById(parentId);
        let elementToAdd = document.createElement(elementTag);
        // elementToAdd.setAttribute('id', elementId);
        parentElement.appendChild(elementToAdd);
        elementToAdd.setAttribute('id', count);
        var el_indx = elementToAdd.classList.add(count);
        

        elementToAdd.setAttribute("onclick", addFunc);
        let text = document.createElement("h3");
        text.innerHTML = html;
        elementToAdd.appendChild(text);
        elementToAdd.classList.add('box', 'new-box', 'taskBlock', 'none');
        
    },

    removerElement: function(){
        $('div').on('contextmenu', function(e){
            e.preventDefault(); 
            var removingEl = document.getElementById(this.id);
            removingEl.classList.add('remove_block')
            setTimeout(() =>{removingEl.remove();}, 500); 
            
        })

        },
    }

    function tClass(){
        $('.taskBlock').on('click', function() {
            $(document.getElementById(this.id)).toggleClass('done');
        });
    }





document.getElementById("inpt").addEventListener('keypress',
function(e){
    if(e.key === 'Enter'){
        let inpt = document.getElementById("inpt").value;
        blockFunc.addElement('bd', 'div', 'taskBlock', inpt, tClass());
        count++;
        blockFunc.removerElement();
    }
    tClass()
    $('.taskBlock').on("tap",function(){
        tClass() 
    });

    $('div').on("taphold",function(e){
        e.blockFunc.removerElement();
        console.log('long tap')
    })
    
})















