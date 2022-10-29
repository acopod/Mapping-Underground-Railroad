var config = {
    style: 'mapbox://styles/acopod/cl9rz3rjj000s14qja3ea4y1x',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOXI4NHEzZTBkbWU0MHFtZGJuaGZkYWMifQ.sZmqyas3S7qPVHJO032xuA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'Do you still want to put your asset near waterfront after Hurricane Sandy?',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
            {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'Introduction',
            image: 'images/Water1-superJumbo.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this? </p>',
            location: {
                center: [-76.84464, 40.81432],
zoom: 6.35,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            
                    {
                     layer: 'pluto-hous-type',
                     opacity: 0,
                     duration: 5000 
                    }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Points of Rock',
            image: 'images/2362.webp',
            description: 'The city classifies Red Hook Houses as being in flood zone 1, indicating high flood risk. During Hurricane Sandy in 2012, the development was inundated with 6 feet (1.8 m) of flood water through sewer overflow and high tides.[16][2][17] The storm left residents without power and fresh water for months. This caused leaks, resulting in mold that affected many residents health. Prior to Sandy, various city reports outlined the need for increased flood protection projecting floods as high as 5 feet during storm surges yet NYCHA officials did not anticipate storm surges being that strong.',
            location: {
                    center: [-77.53627, 39.27532],
                    zoom: 12.58,
                    pitch: 60,
                    bearing: 0.00,
                    speed: 0.5,
                    curve: 1,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
                        },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [    
                    {
                     layer: 'pluto-hous-type',
                     opacity: 1,
                     duration: 5000
                    }
                 ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Chambersburg',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-77.66071, 39.94729],
zoom: 10.68,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.18563, 40.20027],
zoom: 10.70,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Carlisle',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.18563, 40.20027],
zoom: 10.70,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Carlisle',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.18937, 40.20227],
zoom: 13.84,
pitch: 45.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'six-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Harrisburg',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-76.88663, 40.26688],
zoom: 13.37,
pitch: 45.00,   
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
