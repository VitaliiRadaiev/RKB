{


	let isMap = document.getElementById("map1");
	if(isMap) {
		var map1;

		var center1 = {
			lat: 50.015204932900744,
			lng: 36.223057456609766,
		}

		var markerPosition1 = {
			lat: 50.015204932900744,
			lng: 36.223057456609766,
		}

		var map2;

		var center2 = {
			lat: 45.8433757333933,
			lng: 9.009282499254253,
		}

		var markerPosition2 = {
			lat: 45.8433757333933,
			lng: 9.009282499254253,
		}

		function initMap() {

		
			map1 = new google.maps.Map(document.getElementById('map1'), {

				center: {lat: center1.lat, lng: center1.lng},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 16,


				//styles: 
			});

			map2 = new google.maps.Map(document.getElementById('map2'), {

				center: {lat: center2.lat, lng: center2.lng},
		
				panControl: false,
				mapTypeControl: false,
				zoom: 16,


				//styles: 
			});


			var marker1 = new google.maps.Marker({

			
			    position: {lat: markerPosition1.lat, lng: markerPosition1.lng},

		
			    map: map1,

			
			    title: '',
			    label: '',

		
			   // icon: 'img/contact/googlMarker.svg',
			});

			var marker2 = new google.maps.Marker({

			
			    position: {lat: markerPosition2.lat, lng: markerPosition2.lng},

		
			    map: map2,

			
			    title: '',
			    label: '',

		
			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}
}