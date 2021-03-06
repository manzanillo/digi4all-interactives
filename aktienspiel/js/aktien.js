var takt = 2500;

		var timeFormat = 'YYYY';

		yearOrigin = -50;
		year = 0;
		function newDate(years) {
			return moment().add(yearOrigin+ year++, 'year').toDate();
		}

		var active = false;
		var sharesBlue = 0, sharesRed = 0, sharesOrange = 0, sharesGreen = 0;
		var value = 0;
		var money = 50000;

		var blue = [1000,1100,1400,1800,2000,1800,1900,2100,2200,2300].concat(
							[2300,2100,2000, 1700, 1400, 1500, 1100, 1000,1400, 1700].concat(
							[1300, 1500, 1500, 2000, 1900, 1700, 1900, 2400, 3000, 5000].concat(
							[12000, 20*1000, 42*1000,62*1000, 70*1000, 95*1000, 105*1000, 95*1000, 106*1000, 100*1000].concat(
							[80*1000,41*1000,25*1000,24000,20000,18000,16000,16000,14000,12000]
							)))); //Compact Kamera

		var red = [2000,2200,2500,2400,2400,2500,2600,2600,3000,10000].concat(
							[12000,18*1000,19*1000, 18*1000, 17*1000, 19*1000, 20*1000, 21*1000,21*1000, 21*1000].concat(
							[23*1000, 28*1000, 32*1000, 27*1000, 24*1000, 24*1000, 30*1000, 30*1000, 38*1000, 38*1000].concat(
							[31*1000, 31*1000, 25*1000,21*1000, 18*1000, 10*1000, 0, 0, 0, 0].concat(
							[0,0,0,0,0,0,0,0,0,0]
							)))); //Analog Kamera

		var green = [1200,1300,1200,1500,1700,1600,2000,2200,2100,2200].concat(
							[1800,1600,1800, 1700, 1400, 1100, 1000,1500, 1400, 1700].concat(
							[1900, 1300, 1500, 1500, 2000, 1700, 1900, 2400, 2700, 2500].concat(
							[2900, 2500, 2000,1200, 1400, 1800, 1700, 1900, 1900, 2000].concat(
							[2200,2500,2800,2400,3000,3500,3800,4000,3100,3400]
						)))); //DSLR

	var orange = [300,100,400,600,700,400,500,300,600,400].concat(
												[1000,1200,1100, 700, 400, 1500, 1600, 1500, 1200, 1400].concat(
												[1700, 1300, 1500, 1500, 2000, 1200, 1100, 1400, 1700, 2000].concat(
												[2100, 2200, 2000,1800, 1700, 1800, 1700, 1400, 1200, 1300].concat(
												[30000,39000,90000,273*1000,304*1000,308*1000,310*1000,330*1000,320*1000,312*1000]
											)))); //Smartphone

		var color = Chart.helpers.color;

        var chartColors = {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)'
        };


		var basicNumberOfValuesDisplayed = 1;
		var config = {
			type: 'line',
			data: {
				labels: [
					newDate(),
					newDate()
				],
				datasets: [{
					label: 'Firma Rot',
					backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
					borderColor: chartColors.red,
					fill: false,
					data: red.splice(0, basicNumberOfValuesDisplayed),
				}, {
					label: 'Firma Blau',
					backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
					borderColor: chartColors.blue,
					fill: false,
					data: blue.splice(0, basicNumberOfValuesDisplayed),
				}, {
					label: 'Firma Grün',
					backgroundColor: color(chartColors.green).alpha(0.5).rgbString(),
					borderColor: chartColors.green,
					fill: false,
					data: green.splice(0, basicNumberOfValuesDisplayed),
				},
				{
					label: 'Firma Orange',
					backgroundColor: color(chartColors.orange).alpha(0.5).rgbString(),
					borderColor: chartColors.orange,
					fill: false,
					data: orange.splice(0, basicNumberOfValuesDisplayed),
				}
			]
			},
			options: {
				title: {
					text: 'Aktienkurs'
				},
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							format: timeFormat,
							// round: 'day'
							tooltipFormat: 'll'
						},
						scaleLabel: {
							display: true,
							labelString: 'Zeit'
						}
					}],
					yAxes: [{
						scaleLabel: {
							display: true,
							labelString: 'Wert'
						}
					}]
				},
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.sharesChart = new Chart(ctx, config);
		};



		var add = function() {
			if (active && config.data.datasets.length > 0) {
				config.data.labels.push(newDate(config.data.labels.length));

				for (var index = 0; index < config.data.datasets.length; ++index) {
                        switch (index){
                            case 0:
                    			config.data.datasets[index].data.push(red[year]);
                                break;

                            case 1:
                     			config.data.datasets[index].data.push(blue[year]);
                                break;

                            case 2:
                    			config.data.datasets[index].data.push(green[year]);
                                break;

                            case 3:
                                config.data.datasets[index].data.push(orange[year]);
                        }

				}

				updateStats();
				window.sharesChart.update();

				if (year <
						Math.min(blue.length, red.length, green.length, orange.length) - 1
						&& active){
					setTimeout(add,takt);
				}
			}
		}

		var sell = function(col){
			switch (col) {
  			case "orange":
						if (sharesOrange > 0){
							sharesOrange--;
							money += orange[year];
						}
      			break;
  			case "blue":
						if (sharesBlue > 0){
							sharesBlue--;
							money += blue[year];
						}
				    break;
  			case "green":
						if (sharesGreen > 0){
							sharesGreen--;
							money += green[year];
						}
						break;
				case "red":
						if (sharesRed > 0){
							sharesRed--;
							money += red[year];
						}
		}
		updateStats();
	}

		var buy = function(col){
			switch (col) {
				case "orange":
						if (money >= orange[year]){
							sharesOrange++;
							money -= orange[year];
						}
						break;
				case "blue":
						if (money >= blue[year]){
							sharesBlue++;
							money -= blue[year];
						}
						break;
				case "green":
						if (money >= green[year]){
							sharesGreen++;
							money -= green[year];
						}
						break;
				case "red":
						if (money >= red[year]){
							sharesRed++;
							money -= red[year];
						}
		}
		updateStats();
	}

		var updateStats = function(){
			document.getElementById('money').innerHTML = money;
			document.getElementById('shares-red').innerHTML = sharesRed;
			document.getElementById('shares-blue').innerHTML = sharesBlue;
			document.getElementById('shares-green').innerHTML = sharesGreen;
			document.getElementById('shares-orange').innerHTML = sharesOrange;

			var sharesValue =   sharesRed * red[year]
									+ sharesGreen  * green[year]
									+ sharesBlue   * blue[year]
									+ sharesOrange * orange[year];

			document.getElementById('shares-value').innerHTML = sharesValue;
		}

		document.getElementById('start').addEventListener('click', function(){
			if (document.getElementById('start').innerHTML == 'Los gehts!'){
				active = true;
				add();
				document.getElementById('start').innerHTML = 'Pause'
			}
			else {
				active = false;
				document.getElementById('start').innerHTML = 'Los gehts!'
			}

		});

		document.getElementById('buyBlue').addEventListener('click', function(){buy('blue')});
		document.getElementById('buyRed').addEventListener('click', function(){buy('red')});
		document.getElementById('buyGreen').addEventListener('click', function(){buy('green')});
		document.getElementById('buyOrange').addEventListener('click', function(){buy('orange')});

		document.getElementById('sellBlue').addEventListener('click', function(){sell('blue')});
		document.getElementById('sellRed').addEventListener('click', function(){sell('red')});
		document.getElementById('sellGreen').addEventListener('click', function(){sell('green')});
		document.getElementById('sellOrange').addEventListener('click', function(){sell('orange')});

