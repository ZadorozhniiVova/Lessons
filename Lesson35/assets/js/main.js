var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
      center: {
          lat: 50.442235272406336,
          lng: 30.575938465687347,
      },
      zoom: 15,
      styles: [
          {
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#212121',
                  },
              ],
          },
          {
              elementType: 'labels.icon',
              stylers: [
                  {
                      visibility: 'off',
                  },
              ],
          },
          {
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#757575',
                  },
              ],
          },
          {
              elementType: 'labels.text.stroke',
              stylers: [
                  {
                      color: '#212121',
                  },
              ],
          },
          {
              featureType: 'administrative',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#757575',
                  },
              ],
          },
          {
              featureType: 'administrative.country',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#9e9e9e',
                  },
              ],
          },
          {
              featureType: 'administrative.land_parcel',
              stylers: [
                  {
                      visibility: 'off',
                  },
              ],
          },
          {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#bdbdbd',
                  },
              ],
          },
          {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#757575',
                  },
              ],
          },
          {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#181818',
                  },
              ],
          },
          {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#616161',
                  },
              ],
          },
          {
              featureType: 'poi.park',
              elementType: 'labels.text.stroke',
              stylers: [
                  {
                      color: '#1b1b1b',
                  },
              ],
          },
          {
              featureType: 'road',
              elementType: 'geometry.fill',
              stylers: [
                  {
                      color: '#2c2c2c',
                  },
              ],
          },
          {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#8a8a8a',
                  },
              ],
          },
          {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#373737',
                  },
              ],
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#3c3c3c',
                  },
              ],
          },
          {
              featureType: 'road.highway.controlled_access',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#4e4e4e',
                  },
              ],
          },
          {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#616161',
                  },
              ],
          },
          {
              featureType: 'transit',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#757575',
                  },
              ],
          },
          {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [
                  {
                      color: '#000000',
                  },
              ],
          },
          {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [
                  {
                      color: '#3d3d3d',
                  },
              ],
          },
      ],
  });
  const menu = $("#menu")

  
  function addPoint(titleName,lat,long,infoImg,infoText){
    let infowindow = new google.maps.InfoWindow({
      content: `<div class="info__window">
      <img class="info__img" src="${infoImg}">
      <p class="info__text">${infoText}</p>
      </div>`,
    });
    console.log(infowindow);
    const marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map,
      title: `${titleName}`,
    });
    marker.addListener('click', () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    })
    const markerBlock = $(`<div>${titleName}</div>`)
    markerBlock.on('click', () => {
      console.log('ON CLICK')
      const coords = marker.getPosition()
      console.log('coords', coords)
      map.setCenter(coords, coords)
    })
    menu.append(markerBlock)
  };
  addPoint('Тёщин Мост',46.49100629525167,30.737342099981422,"https://lh5.googleusercontent.com/p/AF1QipO8ggKK7nzouBZk_prWf_WTBw1Q24hGC2Or_rXU=w408-h273-k-no","Мост был возведён в 1968—1969 гг. по проекту архитектора Рашель Аббовны Владимирской и инженера Кириенко над Военным спуском[1]. Его первоначальное и официальное название «Комсомольский», потому что он связывал между собой Приморский и Комсомольский бульвары (ныне — бульвар М. Жванецкого). Строили его к 50-летию Октябрьской революции 1917 г. и должны были открыть в 1967 году, но опоздали. Так что гулять по нему можно стало только с 1968-года . Интересно, что по проекту мост должен был быть в ретро-стиле, чтобы вписываться в классическую застройку. Но в ходе строительства весь декор решили убрать, мост получился в конструктивистском духе. Мост является точной копией моста герцогини Шарлотты в Люксембурге.")

  addPoint('Воронцовская колоннада',46.490959992406296,30.738442926912207,"https://lh5.googleusercontent.com/p/AF1QipMf0eLm4svQ7aE_mFQqPVkQMhbykJ855-39f2x4=w408-h272-k-no","Колоннада, она же ротонда и бельведер – один из символов Одессы, объект культурного наследия – является продолжением дворцовой усадьбы Воронцова, его составной частью и стоит на самом обрыве холма. Автором проекта был тот же архитектор - Ф.К.Боффо. Выполненная в стиле тосканского ордена, Воронцовская колоннада удивительно гармонирует с окружающими зданиями. Там два ряда, по десять стройных колонн в каждом, поставлены на высокий ступенчатый цоколь. Колоннада имеет изогнутый вид – внутренний ряд несколько сжат, а внешний, со стороны моря, растянут, что придает ей своеобразную красоту, строгость и величие.")

  addPoint('Дом с одной стеной',46.48907260783161, 30.73857635667456,"https://lh5.googleusercontent.com/p/AF1QipOOqU3CcAgVCJ4T4DPFZmVuMWbh4Hh1aFTVAPz0=w408-h305-k-no","Ведьмин дом (также известный как «дом без стены», «дом-стена», доходный дом Рафаловича) — достопримечательность в Одессе, жилой дом по адресу Воронцовский переулок, дом 4.")

  addPoint('Потёмкинская лестница',46.48871349627979, 30.74198488061013,"https://lh5.googleusercontent.com/p/AF1QipMSF1LZTTvHqR36M8QhH3jwbDXspk8J46_0kCHw=w408-h510-k-no",'Символический вход в город с моря, получивший известность благодаря немому фильму "Броненосец Потёмкин".')

  addPoint('Памятник дюку де Ришельё',46.48871349627979, 30.74198488061013,"https://lh4.googleusercontent.com/proxy/Rfb6R0V96jhdMjjsWhsbwYT4kCH24ZPsdcjIRr575_BlWvILwvD_m3sFogIEKCyWJF8bj5Qeme_L02oQEnZSJb7HEdv1eYDbDyJyOKZGX_bWRnjsghxg8IDlkTwShYFqvdjXKLUrBW9vOpkvv52eFL1F6zxNtg=w473-h240-k-no",'Памятник дюку (герцогу) де Ришельё в Одессе (также известен как бронзовый дюк) — бронзовый монумент в полный рост, посвящённый Арману Эмманюэлю дю Плесси, герцогу де Ришельё, открыт в 1828 году. Первый памятник, установленный в Одессе[1].')

  addPoint('Памятник Екатерине II',46.487497051125416, 30.739338197114282,"https://lh5.googleusercontent.com/p/AF1QipNxYLG_cZwoguLCRuWp00ROyzq1hPI8K0spBIZH=w408-h306-k-no","Па́мятник основа́телям Оде́ссы (Пам'ятник засновникам Одеси) — памятник Екатерине II и её сподвижникам — де Рибасу, де Волану, Потемкину и Зубову. Расположен в Одессе на Екатерининской площади. Воздвигнут в 1900 году по проекту одесского архитектора Юрия Мелетьевича Дмитренко. Скульптор Михаил Петрович Попов, при участии скульпторов Бориса Васильевича Эдуардса, Леопольда Менционе[1], инженер А. А. Сикорский. В 1920 году демонтирован. Восстановлен в 2007 году. Восстановление памятника вызвало политический конфликт — ряд общественных организаций (в том числе ВО «Свобода»), а также президент Украины Виктор Ющенко выступали против восстановления памятника, аргументируя свою позицию неуместностью монумента императрице, распустившей Запорожскую сечь и, по мнению некоторых, выступавшей «палачом украинского народа».")

  addPoint('Памятник А.С.Пушкину',46.486285201970254, 30.743586462496665,"https://lh5.googleusercontent.com/p/AF1QipPUm72KhAQUxul-DGnDhP86NGSh6jY7Sx8VwlqX=w408-h272-k-no","Бронзовый памятник 1959 года на гранитном пьедестале, посвященный знаменитому поэту и прозаику А. С. Пушкину.")

  addPoint('Одесский государственный академический театр оперы и балета',46.48562035834258, 30.741247576600813,"https://lh5.googleusercontent.com/p/AF1QipPJNoLpsrpL2xqsi3fkAtBGZysnnZuVzrYfRo2h=w408-h544-k-no","Театр с залом подковообразной формы в стиле рококо с уникальной акустикой, где ставят оперу и балет.")

  addPoint('Городской сад',46.485354418602356, 30.734595698853813,"https://lh5.googleusercontent.com/p/AF1QipNLDJEq8qszLr9q68ztCxXAJ9v1eWBczYtB6rXZ=w408-h306-k-no","Городской (Лассаля, Городской, Дерибаса[1]) сад — парк, расположенный в центре города Одесса, на улице Дерибасовской. Старейший общественный парк в городе. Сад был разбит Феликсом Де Рибасом (брат основателя Одессы Иосифа Де Рибаса) в 1803 году на ему принадлежащем участке городской земли прямо в центре молодого города. Из-за того, что для поддержания сада в порядке и ухода за растениями у Феликса не хватало средств, он принял решение подарить сад городу — это произошло 10 ноября 1806 года. Участок земли и находящийся на нём молодые насаждения были переданы в городскую собственность безвозмездно.")

  addPoint('Памятник Апельсину',46.49158888545943, 30.73356573052156,"https://lh5.googleusercontent.com/p/AF1QipORTnJuIk0hHjtVmOcVLA3ntZdwUzaqOr2xOcFD=w408-h271-k-no","Па́мятник Апельси́ну, кото́рый спас Оде́ссу, — установленный в Одессе бронзовый монумент, посвящённый историческому событию — доставке в феврале 1800 года 3000 свежих греческих апельсинов из Одесского порта в Санкт-Петербург в подарок от одесситов императору Павлу I. Памятник открыт в 2004 году, первоначально находился на улице Ланжероновской. В 2007 году перенесен на бульвар Искусств (ныне — бульвар Жванецкого).")

  addPoint('Одеський художній музей',46.4935536286287, 30.728523177243698,"https://lh5.googleusercontent.com/p/AF1QipOE0-ZHxTp-W_jwfjLk8UFjXyncrjat3sq0zCQ1=w408-h272-k-no","Музей шедевров украинских и русских мастеров в классическом дворце Потоцких.")

  addPoint('Дом Клоунов - Театр "Маски"',46.49046614330327, 30.722321909980522,"https://lh5.googleusercontent.com/p/AF1QipNARJBer-fV0zB3VD6BPwput57bXtTQg3ZpyqAP=w408-h306-k-no","Дом клоунов")

  addPoint('Памятник Стиву Джобсу',46.482251692587795, 30.72573367946574,"https://lh5.googleusercontent.com/p/AF1QipOiyebZnQc7hLBc3rjO2CkHjS2MnlII_54Gl8qo=w408-h545-k-no","Па́мятник Сти́ву Джо́бсу «Спасибо, Стив» (англ. Thanks, Steve) — скульптурная композиция, установленная в Одессе в память о Стиве Джобсе. Является первым памятником Стиву Джобсу в СНГ и вторым памятником в мире.")

  addPoint('Памятник Михаилу Воронцову',46.484069024975284, 30.731591624597396,"https://lh5.googleusercontent.com/p/AF1QipM9zgL8ttEgn6OgmOpeCWPi7_Y-Y_WVbRJgkEss=w408-h306-k-no","Па́мятник кня́зю Воронцо́ву — памятник М. С. Воронцову, Новороссийскому и Бессарабскому генерал-губернатору, воздвигнутый на Соборной площади в Одессе в 1863 году. Второй памятник Одессы")

  addPoint('Памятник Адаму Мицкевичу',46.48134796596056, 30.73533207245997,"Памятник Адаму Мицкевичу","Театр Национального одесского филармонического оркестра, построенный на 1000 мест в 1899 году в стиле венецианской готики.","Памятник Адаму Мицкевичу в Оде́ссе — бронзовая скульптура, польского поэта и основателя польского романтизма Адама Мицкевича, установленная в начале Александровского проспекта (при пересечении его с улицей Ивана Бунина).")

  addPoint('Одесская областная филармония',46.48076215884888, 30.74316005992588,"https://lh5.googleusercontent.com/p/AF1QipO1SZIP5gf-pQ2ITz3gW5a9dezJ2nuQ1gZ3KDEm=w408-h306-k-no","Театр Национального одесского филармонического оркестра, построенный на 1000 мест в 1899 году в стиле венецианской готики.")

  addPoint('Памятник Гоцману',46.47865663071889, 30.74363507379511,"https://lh5.googleusercontent.com/p/AF1QipO8DDiiwbdhbSlIYhy96795mli55Y1UlDyoKjqn=w408-h306-k-no","Па́мятник Дави́ду Го́цману — бронзовая скульптура, посвящённая собирательному образу одесского милиционера послевоенного времени, установленная в городе Одесса у центральных ворот здания регионального управления внутренних дел. Идея создания памятника родилась после показа по телевидению телесериала «Ликвидация», главный герой которого — Давид Гоцман — стал прототипом скульптуры.")

  
  addPoint('Памятник Тарасу Шевченко',46.4793721101123, 30.75072896500114,"Памятник Тарасу Шевченко (укр. Пам'ятник Тарасу Шевченку) — монумент, воздвигнутый в честь украинского поэта, прозаика, художника и этнографа Тараса Григорьевича Шевченко в парке им. Шевченко со стороны ул. Маразлиевской (угол Сабанского переулка) города Одесса (Украина)[1].")
}

