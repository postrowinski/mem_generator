document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    var mem = {
            container : document.querySelector('#mem'),
            topText : document.querySelector('.text-top'),
            bottomText : document.querySelector('.text-bottom')
        },
        inputs = {
            topText : document.querySelector('#change-top-text'),
            bottomText : document.querySelector('#change-bottom-text'),
            imageText : document.querySelector('#change-img-link')
        },
        button = {
            changeImg : document.querySelector('.btn-image'),
            clearText : document.querySelector('.btn-text')
        };
        
    function addTextTop() {
        var getInputText = inputs.topText.value;
        
        mem.topText.innerHTML = getInputText;
        return getInputText;
    }
    
    function addTextBottom() {
        var getInputText = inputs.bottomText.value;
        
        mem.bottomText.innerHTML = getInputText;
        return getInputText;
    }
    
    inputs.topText.addEventListener('keyup', addTextTop);
    inputs.bottomText.addEventListener('keyup', addTextBottom);
    button.changeImg.addEventListener('click', function () {
		
		var re = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
		if (re.test(inputs.imageText.value)) {
            
			mem.container.style.backgroundImage = "url(" + inputs.imageText.value + ")"; 
			inputs.imageText.value = '';
            inputs.imageText.placeholder = '';
		}
		else {
            inputs.imageText.value = '';
			inputs.imageText.placeholder = 'Incorrect link';
		}
    });
    button.clearText.addEventListener('click', function () {
        var getTopText = inputs.topText.value = '',
            getBottomText = inputs.bottomText.value = '';
        
        getTopText = '';
        mem.topText.innerHTML = '';
        getBottomText = '';
        mem.bottomText.innerHTML = '';
    });
});