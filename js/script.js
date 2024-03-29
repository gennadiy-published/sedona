(function () {
  var popapSearch = document.querySelector(".search-form");
  var popapBtn = document.querySelector(".map-and-search__btn");
  var dateIn = popapSearch.querySelector("input[name=date-in]");
  var dateOut = popapSearch.querySelector("input[name=date-out]");

  popapSearch.addEventListener("submit", function (evt) {
    if (!dateIn.value || !dateOut.value) {
      evt.preventDefault();
      popapSearch.classList.toggle("search-form--error", false);
      popapSearch.offsetWidth = popapSearch.offsetWidth;
      popapSearch.classList.add("search-form--error");
    }
  });

  function onClickPopapBtn(evt) {
    evt.preventDefault();
    popapSearch.classList.toggle("search-form--closed");
  }

  popapBtn.addEventListener("click", onClickPopapBtn);
})();

(function () {
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [34.90165716, -111.76700252],
    zoom: 10
  }, {
    searchControlProvider: 'yandex#search'
  });

  myMap.geoObjects
    .add(new ymaps.Placemark([34.90165716, -111.76700252],{}, {
        preset: 'islands#redDotIconWithCaption'
    }));
  }
})();
