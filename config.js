var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5/draft',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: '#ff70ab'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Büyükdere Fidanlığı ve Meyveciliğin Gelişimi / Büyükdere Nursery and the Development of Fruit Growing',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '0',
            alignment: 'right',
            hidden: false,
            title: '',
             image: '',
            description: '',
            location: {
                center: [29.035021075569365,41.15493563639177],
                zoom: 11,
                pitch: 10,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nMd4dxcV/1.png',
            description: '',
            location: {
               center: [29.035021075569365,41.15493563639177],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/cc1zsNGd/2.png',
            description: '',
            location: {
              center: [29.035021075569365,41.15493563639177],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
          {
            id: '3',
            alignment: 'right',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/Y782HjYR/3.png',
            description: '',
            location: {
              center: [29.035021075569365,41.15493563639177],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4',
            alignment: 'centered',
            hidden: false,
            title: '',
             image: 'https://i.ibb.co/LdgZWnJG/4.png',
            description: '',
            location: {
                 center: [29.035021075569365,41.15493563639177],
                zoom: 17,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '4,5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/fYqkxNP8/45.png',
            description: '',
            location: {
                 center: [29.03106337251475,41.153899283541335],
                zoom: 17,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '5',
            alignment: 'full',
            hidden: false,
            title: 'Fidanlık alanı, zaman içinde bataklık ve sazlık arazilerin ıslahıyla genişletilmiş, su yönetimi ve altyapı çalışmalarıyla geliştirilmiş; sulama için bentler ve kuyu inşa edilmiştir. Bir başka deyişle bataklık ve sazlık ekosistemleri yerine daha "steril", bilimsel yöntemlerle disipline edilmiş bir kamusal yeşil alan (urban void/ free space) oluşturulmuştur.',
            image: 'https://i.ibb.co/rf5YLzvj/b-y-kdere-gif.gif',
            description: '(Büyükdere Fidanlığı’nın 1986 tarihli kaynaklarından yararlanılarak görselleştirilmiştir. / It has been visualized using sources from 1986 related to the Büyükdere Nursery.) The nursery area was expanded over time through the reclamation of swampy and marshy lands, improved with water management and infrastructure works; dams and a well were constructed for irrigation. In other words, instead of swamp and marsh ecosystems, a more "sterile," scientifically disciplined public green space (urban void/free space) was created.',
            location: {
                 center: [29.028030117107857,41.1547217188274],
                zoom: 18,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/b551DRyJ/6.png',
            description: '',
            location: {
                 center: [29.03106337251475,41.153899283541335],
                zoom: 15,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: '7',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/r2JhpKg2/7.png',
            description: '',
            location: {
                 center: [28.986970747515493,41.03896029082111],
                zoom: 17,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/mfjFJqY/8.png',
            description: '',
            location: {
                 center: [28.986970747515493,41.03896029082111],
                zoom: 12,
                pitch: 40,
                bearing: 0,
        
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 0, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
