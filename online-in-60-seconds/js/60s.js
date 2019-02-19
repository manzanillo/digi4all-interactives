window.onload = function(){
        var fbSlider = document.getElementById('facebook');

        noUiSlider.create(fbSlider, {
            start: [1000],
            tooltips: true,
            connect: false,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });

        var twSlider = document.getElementById('twitter');
        //350.000
        noUiSlider.create(twSlider, {
            start: [100],
            tooltips: true,
            connect: false,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  100 ],
		      '30%': [  25000 ],
		      '70%': [  1000000 ],
		      'max': [ 5000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });


        var wikiSlider = document.getElementById('wiki');
        //600
        noUiSlider.create(wikiSlider, {
            start: [1],
            tooltips: true,
            connect: false,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1 ],
		      '30%': [  25 ],
		      '70%': [  100 ],
		      'max': [ 1000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });

        var ytSlider = document.getElementById('youtube');
        // yt
        noUiSlider.create(ytSlider, {
            start: [1000],
            tooltips: true,
            connect: false,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });


        var glSlider = document.getElementById('google');

        noUiSlider.create(glSlider, {
            start: [1000],
            tooltips: true,
            connect: false,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });
    }



var eval = function(){
    document.getElementById('eval-btn').style.visibility='hidden';
    var fbSlider = document.getElementById('facebook');
    var twSlider = document.getElementById('twitter');
    var wikiSlider = document.getElementById('wiki');
    var ytSlider = document.getElementById('youtube');
    var glSlider = document.getElementById('google');
    
    var sliders = [fbSlider,
                  twSlider, 
                  wikiSlider,
                  ytSlider,
                  glSlider,
                 ];

    var facebookValue = fbSlider.noUiSlider.get().replace(".",'').replace(".",'');
    var twitterValue = twSlider.noUiSlider.get().replace(".",'').replace(".",'');
    var wikiValue = wikiSlider.noUiSlider.get().replace(".",'').replace(".",'');
    var ytValue = ytSlider.noUiSlider.get().replace(".",'').replace(".",'');
    var glValue = glSlider.noUiSlider.get().replace(".",'').replace(".",'');

    var facebookValueDesired = 300000;
	var twitterValueDesired = 350000;
    var wikiValueDesired = 600;
    var ytValueDesired = 4125000;
    var glValueDesired = 3500000;

    sliders.forEach(function(slider){
        slider.noUiSlider.destroy();
    })


    noUiSlider.create(fbSlider, {
            start: [Math.min(facebookValue, facebookValueDesired),
										Math.max(facebookValue, facebookValueDesired)],
            tooltips: true,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });

    noUiSlider.create(twSlider, {
            start: [Math.min(twitterValue, twitterValueDesired),
										Math.max(twitterValue, twitterValueDesired)],
            tooltips: true,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  100 ],
		      '30%': [  25000 ],
		      '70%': [  1000000 ],
		      'max': [ 5000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });



    noUiSlider.create(wikiSlider, {
            start: [Math.min(wikiValue, wikiValueDesired),
										Math.max(wikiValue, wikiValueDesired)],
            tooltips: true,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1 ],
		      '30%': [  25 ],
		      '70%': [  100 ],
		      'max': [ 1000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });


    noUiSlider.create(ytSlider, {
            start: [Math.min(ytValue, ytValueDesired),
										Math.max(ytValue, ytValueDesired)],
            tooltips: true,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });


    noUiSlider.create(glSlider, {
            start: [Math.min(glValue, glValueDesired),
										Math.max(glValue, glValueDesired)],
            tooltips: true,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
		      'min': [  1000 ],
		      '30%': [  100000 ],
		      '70%': [  1000000 ],
		      'max': [  10000000 ]
            }, format: wNumb({
		          thousand: '.',
                })
        });

    sliders.forEach(function(slider){
        slider.setAttribute('disabled', true);
    })
    
    
    var tooltips = document.getElementsByClassName('noUi-handle')
    
    var i = 0;
    for (var tooltip of tooltips) {
        if (i % 2 == 1){
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.top = "120%";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.bottom = "auto";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.backgroundColor = "#26a69a";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.color = "white";
        }
        i++;
    }

}