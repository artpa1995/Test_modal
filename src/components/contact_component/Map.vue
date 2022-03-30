<template>
  <div class="_content">
      <div class="_content_head"  >
          
         	<!-- <div id="map" style="width: 100%; height: 658px"></div> -->
      </div>
  </div>

</template>

<script>
export default {
     props: {
        
    },
  data() {
    return {
      
    };
  },
  mounted () {
      this.map()
    
  },
      methods: {
       map: function () {

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
             // Своё изображение иконки метки.
            iconImageHref: 'https://goldfinchwoods.ru/wp-content/themes/salyut/img/logo-dark.png', // Адрес до картинки
            // Размеры метки.
             iconImageSize: [60, 84],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.283237, 43.995262],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        },{
            searchControlProvider: 'yandex#search'
        });
		var myGeoObject = new ymaps.GeoObject({
			geometry: {
				type: "Point", // тип геометрии - точка
				coordinates: [56.283237, 43.995262] // координаты точки
			}
		});

		// Размещение геообъекта на карте.
		myMap.geoObjects.add(myGeoObject); 
    }
       }
      
   },
};
</script>

<style scoped>
._content{
    background-color: var( --bg);
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 60px;
}
._content_head{
    display: flex;
    flex-direction: column;
    align-items: center;
}
._content_head>h1{
    font-family: var( --color-head_r1);
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    text-transform: uppercase;
    color: var( --color5);
}

</style>
