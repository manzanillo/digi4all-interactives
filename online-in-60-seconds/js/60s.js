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
    document.getElementById('eval-btn').style.visibility='hidden';;
    var fbSlider = document.getElementById('facebook');
    var twSlider = document.getElementById('twitter');
    var wikiSlider = document.getElementById('wiki');
    var ytSlider = document.getElementById('youtube');
    var glSlider = document.getElementById('google');

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


    fbSlider.noUiSlider.destroy();
    twSlider.noUiSlider.destroy();
    wikiSlider.noUiSlider.destroy();
    ytSlider.noUiSlider.destroy();
    glSlider.noUiSlider.destroy();


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

				fbSlider.setAttribute('disabled', true);
				twSlider.setAttribute('disabled', true);
				wikiSlider.setAttribute('disabled', true);
				ytSlider.setAttribute('disabled', true);
				glSlider.setAttribute('disabled', true);

				var connect = fbSlider.querySelectorAll('.noUi-connect');
				facebookValue < facebookValueDesired ? connect[0].classList.add('red-connect')
				  							: connect[0].classList.add('green-connect');

				connect = twSlider.querySelectorAll('.noUi-connect');
				twitterValue < twitterValueDesired ? connect[0].classList.add('red-connect')
											 : connect[0].classList.add('green-connect');

				connect = wikiSlider.querySelectorAll('.noUi-connect');
				wikiValue < wikiValueDesired ? connect[0].classList.add('red-connect')
										: connect[0].classList.add('green-connect');

				connect = ytSlider.querySelectorAll('.noUi-connect');
				ytValue < ytValueDesired ? connect[0].classList.add('red-connect')
									: connect[0].classList.add('green-connect');

				connect = glSlider.querySelectorAll('.noUi-connect');
				glValue < glValueDesired ? connect[0].classList.add('red-connect')
												: connect[0].classList.add('green-connect');

}