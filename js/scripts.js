function updateMonthYear() {				
	$month.html( cal.getMonthName() );
	$year.html( cal.getYear() );
}
function showEvents( $contentEl, dateProperties ) {

	hideEvents();
	
	var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
		$close = $( '<span class="custom-content-close"></span>' ).on( 'click', hideEvents );

	$events.append( $contentEl.html() , $close ).insertAfter( $wrapper );
	
	setTimeout( function() {
		$events.css( 'top', '0%' );
	}, 25 );

}
function hideEvents() {

	var $events = $( '#custom-content-reveal' );
	if( $events.length > 0 ) {
		
		$events.css( 'top', '100%' );
	}

}


$(document).on('pageshow', '#banner', function(){
	$("#owl-demo").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 600,
		singleItem : true,
		autoPlay: true,
		lazyLoad : true,
		transitionStyle : "backSlide",
		itemsMobile : true,
		itemsDesktopSmall : true,
	});
});

$(document).on('pageshow', '#grafico', function(){
	$('#container').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, {
			name: 'John',
			data: [5, 7, 3]
		}]
	});
});

$(document).on('pageshow', '#calendario', function(){
	$wrapper = $( '#custom-inner' ),
	$calendar = $( '#calendar' ),
	cal = $calendar.calendario( {
	onDayClick : function( $el, $contentEl, dateProperties ) {
		var data_selecionada;
		var dia = dateProperties['day'];
		var mes = dateProperties['month'];
		var ano = dateProperties['year'];
						
		if (mes.length == 1){
			mes = "0" + mes;
		}
						
		if (dia.length == 1){
			dia = "0" + dia;
		}
						
		data_selecionada = dia + "/" + mes + "/" + ano;
		//document.location = "tela6.htm?data=" + data_selecionada;
						
	},
	caldata : codropsEvents,
	displayWeekAbbr : true
	} ),
	$month = $( '#custom-month' ).html( cal.getMonthName() ),
	$year = $( '#custom-year' ).html( cal.getYear() );

	$( '#custom-next' ).on( 'click', function() {
		cal.gotoNextMonth( updateMonthYear );
	} );
	
	$( '#custom-prev' ).on( 'click', function() {
		cal.gotoPreviousMonth( updateMonthYear );
	});
});


$(document).on('pageshow', '#banner2', function(){
	$('#container2').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, {
			name: 'John',
			data: [5, 7, 3]
		}]
	});
	
	$('#container3').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
					text: 'Browser market shares at a specific website, 2008'
				},
				plotArea: {
					shadow: null,
					borderWidth: null,
					backgroundColor: null
				},
				tooltip: {
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						dataLabels: {
							enabled: true,
							formatter: function() {
								if (this.y > 5) return this.point.name;
							},
							color: 'white',
							style: {
								font: '13px Trebuchet MS, Verdana, sans-serif'
							}
						}
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '50px',
						top: '100px'
					}
				},
			        series: [{
					type: 'pie',
					name: 'Browser share',
					data: [
						['Firefox',   44.2],
						['IE7',       26.6],
						{
							name: 'IE6',
							y: 20,
							sliced: true,
							selected: true
						},
						['Chrome',    3.1],
						['Safari',    2.7],
						['Opera',     2.3],
						['Mozilla',   0.4]
					]
					//data: [3.40, 1.05, 2.90, 1.65, 1.35, 2.59, 1.39, 3.07, 2.82]
				}]
	});
	
	$('#container4').highcharts({
		chart: {
			type: 'line'
		},
	title: {
					text: 'Monthly Average Temperature',
					style: {
						margin: '10px 100px 0 0' // center it
					}
				},
				subtitle: {
					text: 'Source: WorldClimate.com',
					style: {
						margin: '0 100px 0 0' // center it
					}
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
						'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					title: {
						text: 'Month'
					}
				},
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					formatter: function() {
			                return '<b>'+ this.series.name +'</b><br/>'+
							this.x +': '+ this.y +'°C';
					}
				},
				legend: {
					layout: 'vertical',
					style: {
						left: 'auto',
						bottom: 'auto',
						right: '10px',
						top: '100px'
					}
				},
				series: [{
					name: 'Tokyo',
					data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
				}, {
					name: 'New York',
					data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
				}, {
					name: 'Berlin',
					data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
				}, {
					name: 'London',
					data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
				}]
	});
	
	$("#owl-demo2").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 600,
		singleItem : true,
		autoPlay: true,
		lazyLoad : true,
		transitionStyle : "backSlide",
		itemsMobile : true,
		itemsDesktopSmall : true,
	});
});

$(document).on('pageshow', '#grafico2', function(){
	$('#container5').highcharts({
		chart: {
			//Pie, bar, line, area
            type: 'column'
        },
        title: {
            text: 'Basic drilldown'
        },
        xAxis: {
            type: 'category'
        },

        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
				cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            //alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                },
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: 'animals'
            }, {
                name: 'Fruits',
                y: 2,
                drilldown: 'fruits'
            }, {
                name: 'Cars',
                y: 4,
                drilldown: 'cars'
            }]
        }],
        drilldown: {
            series: [{
                id: 'animals',
                data: [
                    ['Cats', 4],
                    ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {
                id: 'fruits',
                data: [
                    ['Apples', 4],
                    ['Oranges', 2]
                ]
            }, {
                id: 'cars',
                data: [
                    {
					name: 'Toyota',
					y: 5,
					drilldown: 'toyota_cars'
					},{
					name: 'Opel',
					y: 2,
					drilldown: 'opel_cars'
					},{
					name: 'Volkswagen',
					y: 8,
					drilldown: 'vw_cars'
					}
                ]
            },
				{
                id: 'vw_cars',
                data: [
                    ['Fusca', 4],
                    ['Santana', 2],
                    ['Voyage', 2],
					['Gol', 6]
                ]
				},
				{
                id: 'opel_cars',
                data: [
                    ['Carro1', 4],
                    ['Carro2', 2],
                    ['Carro3', 2],
					['Carro4', 6]
                ]
				},
				{
                id: 'toyota_cars',
                data: [
                    ['Bandeirante', 4],
                    ['Etios', 2],
                    ['Highlux', 2],
					['Carro4', 6]
                ]
				}
			]
        }	
	
	});
});

$(document).on('pageinit', '#menu_responsivo', function(){
	$('#dl-menu' ).dlmenu();
});