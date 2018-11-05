var dayFormatter = wNumb({
    edit: function( a ){
        if (a < 365) {
            return Math.round(a) + " Tage";  
        } 
        else {
            return Number.parseFloat(a / 365).toFixed(1) + " Jahre";
        }
    },
});

var timeFormatter = wNumb({
    edit: function( a ){
        if (a < 60) {
            return Math.round(a) + " min.";  
        } 
        else {
            return Number.parseFloat(a / 60).toFixed(0) + " h";
        }
    },
});

var distanceFormatter = wNumb({
  postfix: ' km',
  decimals:  0,
});


var timeRange = {
  'min': [  1 ],
  '30%': [  50 ],
  '70%': [  1008 ],
  'max': [  1440 ]
};

var dayRange = {
  'min': [  1 ],
  '30%': [  150 ],
  '70%': [  365 ],
  'max': [  3650 ]
};

var distanceRange = {
  'min': [  10 ],
  '30%': [  25 ],
  '70%': [  100 ],
  'max': [ 200 ]
};
    

window.onload = function(){
    
    var lesbosSlider = document.getElementById('lesbos');

    noUiSlider.create(lesbosSlider, {
        start: [1000],
        tooltips: dayFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: dayRange,
    });

    var boteSlider = document.getElementById('bote');
    //350.000
    noUiSlider.create(boteSlider, {
        start: [30],
        tooltips: distanceFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: distanceRange,
    });


    var kaiserSlider = document.getElementById('kaiser');
    //Der roemische Kaiser Augustinus wartete einst lange auf einen Brief. Wie lange musste er sich gedulden? (9 Jahre)
    noUiSlider.create(kaiserSlider, {
        start: [30],
        tooltips: dayFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: dayRange,
    });

    var sklaveSlider = document.getElementById('sklave');
    // Wie viele Kilometer musste ein römischer Skalve zum Überbringen einer Botschaft pro Tag zurücklegen? (bis zu 75 km)
    noUiSlider.create(sklaveSlider, {
        start: [30],
        tooltips: distanceFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: distanceRange
    });


    var taubeSlider = document.getElementById('taube');
    // Wie lange benötigt eine Brieftaube, um Nachrichten zwischen Aachen und Brüssel (ca. 150km) zu übermitteln? (2 Stunden)
    noUiSlider.create(taubeSlider, {
        start: [465],
        tooltips: timeFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: timeRange, 
    });


    var zugSlider = document.getElementById('zug');
    //Wie lange benötigt ein Zug, um Nachrichten zwischen Aachen und Brüssel (ca. 150km) zu übermitteln? (6 Stunden)
    noUiSlider.create(zugSlider, {
        start: [465],
        tooltips: timeFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: timeRange,
    });


    var londonSlider = document.getElementById('london');

    noUiSlider.create(londonSlider, {
        start: [465],
        tooltips: timeFormatter,
        connect: false,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: timeRange, 
    });

}



var eval = function(){
    document.getElementById('eval-btn').style.visibility='hidden';
    
    var lesbosSlider = document.getElementById('lesbos');
    var boteSlider = document.getElementById('bote');
    var kaiserSlider = document.getElementById('kaiser');
    var sklaveSlider = document.getElementById('sklave');
    var taubeSlider = document.getElementById('taube');
    var zugSlider = document.getElementById('zug');
    var londonSlider = document.getElementById('london');
    
    var sliders = [lesbosSlider,
                  boteSlider, 
                  kaiserSlider,
                  sklaveSlider,
                  taubeSlider,
                  zugSlider,
                  londonSlider
                 ];

    var lesbosValue = lesbosSlider.noUiSlider.get()//
    var boteValue = boteSlider.noUiSlider.get();
    var kaiserValue = kaiserSlider.noUiSlider.get();
    var sklaveValue = sklaveSlider.noUiSlider.get();
    var taubeValue = taubeSlider.noUiSlider.get();
    var zugValue = zugSlider.noUiSlider.get();
    var londonValue = londonSlider.noUiSlider.get();

    var lesbosValueDesired = 730; //2 Jahre
    var boteValueDesired = 160; //160km
    var kaiserValueDesired = 3285; // 9 Jahre
    var sklaveValueDesired = 75; // 75 km
    var taubeValueDesired = 120; // 2 h = 120 min
    var zugValueDesired = 360; // 6h = 360 min
    var londonValueDesired = 4; // 4 Minuten

    var solutions = [730, 160, 3285, 75, 120, 360, 4];

    sliders.forEach(function(slider){
        slider.noUiSlider.destroy();
    })


    noUiSlider.create(lesbosSlider, {
            start: [Math.min(lesbosValue, lesbosValueDesired),
										Math.max(lesbosValue, lesbosValueDesired)],
            tooltips: [dayFormatter, dayFormatter],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: dayRange 
        });

    noUiSlider.create(boteSlider, {
            start: [Math.min(boteValue, boteValueDesired),
										Math.max(boteValue, boteValueDesired)],
            tooltips: [distanceFormatter, distanceFormatter],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: distanceRange,
        });



    noUiSlider.create(kaiserSlider, {
            start: [Math.min(kaiserValue, kaiserValueDesired),
										Math.max(kaiserValue, kaiserValueDesired)],
            tooltips: [dayFormatter, dayFormatter],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: dayRange
        });


    noUiSlider.create(sklaveSlider, {
            start: [Math.min(sklaveValue, sklaveValueDesired),
										Math.max(sklaveValue, sklaveValueDesired)],
            tooltips: [distanceFormatter, distanceFormatter],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: distanceRange
        });


    noUiSlider.create(taubeSlider, {
            start: [Math.min(taubeValue, taubeValueDesired),
										Math.max(taubeValue, taubeValueDesired)],
            tooltips: [timeFormatter, timeFormatter],
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: timeRange
        });

    
    noUiSlider.create(zugSlider, {
        start: [Math.min(zugValue, zugValueDesired),
                                    Math.max(zugValue, zugValueDesired)],
        tooltips: [timeFormatter, timeFormatter],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: timeRange
    });
    
    noUiSlider.create(londonSlider, {
        start: [Math.min(londonValue, londonValueDesired),
                                    Math.max(londonValue, londonValueDesired)],
        tooltips: [timeFormatter, timeFormatter],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: timeRange
    });
    
    sliders.forEach(function(slider){
        slider.setAttribute('disabled', true);
    })
    
    //tooltips unten platzieren
    var tooltips = document.getElementsByClassName('noUi-handle')
    
    var i = 0;
    for (var tooltip of tooltips) {
        if (tooltip.getAttribute('aria-valuetext') == solutions[Math.floor(i/2)]){
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.top = "120%";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.bottom = "auto";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.backgroundColor = "#26a69a";
            tooltip.getElementsByClassName('noUi-tooltip')[0].style.color = "white";
        }
        i++;
    }

}