var config = {
    style: 'mapbox://styles/acopod/cl9ugor6c002314qj6d9nxamy',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOHg1OG5ybjAxajIzb2s0OGgzbmIxbDAifQ.hdscZl9C1nd35pLqEB1xsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'William Simms - Freedom Route',
    subtitle: 'The Map of William Simms’ Journey',
    //byline: 'By ',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
            {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            //image: 'images/Water1-superJumbo.jpg',
            description: '',
            location: {
                center: [ -76.85630382708514, 41.14180696407619],
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
            title: 'Chestnut Hill',
            image: 'images/ChestnutHill.jpg',
            description: 'Three farms - Chestnut Hill, Eagles’ Rest just below this, and a third farm near Alexandria, VA. The owner was Mrs. MASON (she was a PRICE). These farms formerly owned by an Englishman named CHAPHAM, who was humane, believed in treating slaves like men. Didn’t whip, etc. On this account the slaves on the Chestnut Hill farm would talk back at the overseer and wouldn’t submit quietly to being ill-treated. When CHAPHAM died, he left the three farms and the slaves to a distant relative, Mrs. MASON, who lived in Alexandria and whose husband was a lawyer there. The three farms were looked after by an overseer. The slaves of Chestnut Hill, when whipped by the overseer, would fight back and sometimes whip the overseer. “Very troublesome.” The slaves would not submit to harshness, having had a taste of good treatment under CHAPHAM’s mild rule. Many of the slaves at Chestnut Hill had already run away so that only seven were finally left on the farm, and man slaves were brought up from Eagle’s Rest at various times to help work the upper farm.',
            location: {
                    center: [-77.53852, 39.24846],
zoom: 16.47,
pitch: 70.00,
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
            id: 'second-identifier-1',
            alignment: 'right',
            hidden: false,
            title: 'Point of Rocks',
            //image: 'images/ChestnutHill.jpg',
            description: '(Near Point of Rocks) Otho Thomas II farm, 5323 Tuscarora Road (Route 28) Point of Rocks African Methodist Episcopal Church, confirmed underground railroad site St. Paul’s Episcopal Church, unconfirmed Underground Railroad Site',
            location: {
center: [-77.53585, 39.27480],
zoom: 15,
pitch: 60.00,
bearing: 0.00,
                    speed: 0.3,
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
            title: 'from Point of Rocks to Chambersburg',
            image: 'images/from Point of Rocks to Chambersburg.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-77.5590195524072, 39.62997995263127],
zoom: 9,
pitch: 45,
bearing: 0.00,
                    speed: 0.3,
                    curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier-1',
            alignment: 'left',
            hidden: false,
            title: 'Chambersburg',
            //image: 'images/source.png',
            description: 'CHenry Watson, free black barber that haled slaves escape, was located in Chambersburg <br>  http://littlebitsofhistory.blogspot.com/2012/02/underground-railroad-activity-in.html <br>  It bordered Maryland, thus many slaves escaped through the town. They would often follow the Shenandoah Valley in Virginia to here. Some freedom seekers, not assisted by the UR, would follow the Appalachian mountains northward. https://franklincountypa.gov/index.php?section=archives_blog/little_africa',
            location: {
center: [-77.66071, 39.94729],
zoom: 14,
pitch: 45,
bearing: 0.00,
                    speed: 0.5,
                    curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'from Chambersburg to Carlisle',
            image: 'images/from Chambersburg to Carlisle.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.40446, 40.08453],
zoom: 9.5,
pitch: 45.00,
bearing: 0.00,                    
speed: 0.5,
                    curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Carlisle',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.18563, 40.20027],
zoom: 14,
pitch: 45.00,
bearing: 0.00,                    
speed: 0.5,
                    curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

                {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'from Carlisle to Harrisburg',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-77.01788, 40.20974],
zoom: 10,
pitch: 45.00,   
bearing: 0.00,
speed: 0.3,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


                {
            id: 'fifth-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Harrisburg',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-76.88663, 40.26688],
zoom: 13.37,
pitch: 45.00,   
bearing: 0.00,
speed: 0.3,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'from Harrisburg to Millersburg',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-77.022177, 40.384463],
zoom: 10,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,
            },
                        mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'sixth-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Millersburg',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-76.96171, 40.54171],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'from Millersburg to Pottsville',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-76.593547, 40.634210],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'seventh-chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Pottsville',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-76.19563, 40.68742],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Wilkes-Barre',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-75.88293, 41.24969],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Montrose',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-75.87886, 41.83541],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

                {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Binghamton',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-75.91424, 42.09846],
zoom: 14,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

                        {
            id: 'final-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Ithaca',
            //image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
center: [-76.49734, 42.44204],
zoom: 12.87,
pitch: 45.00,
bearing: 0.00,
speed: 0.5,
                    curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
