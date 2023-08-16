var config = {
    style: 'mapbox://styles/acopod/cl9ugor6c002314qj6d9nxamy',
    accessToken: 'pk.eyJ1IjoiYWNvcG9kIiwiYSI6ImNsOHg1OG5ybjAxajIzb2s0OGgzbmIxbDAifQ.hdscZl9C1nd35pLqEB1xsg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'William Simms’ Route to Freedom',
    subtitle1: 'The Map of William Simms’ Journey',
    subtitle2: 'Designer: Tung Chen',
    subtitle3: 'Assistant Designers: Halle Mae Livermore and Alycia Basquiat',

    //byline: 'Map designer: ',
    footer: '<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
            {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            //image: 'images/Water1-superJumbo.jpg',
            description: 'This research is Mr. Simms’ escape route based on <a href="http://tompkins.nygenweb.net/tsimm.htm">Arthur Charles Howland’s interview with William Simms.</a> The transcript is the primary resource for estimating the route. This estimated route is conducted by using Google Earths and Navigation based on the content of the transcript. It is necessary to use the navigation function to roughly estimate the travel time between several essential locations, thereby inferring the rationality of its itinerary and the exact segment points of each day. The locations of segments were Chestnut Hill, Point of Rocks, Chambersburg, Carlisle, Wilkes-Barre, Archbald, Montrose, Binghamton, and Ithaca. The estimated navigation illustrates the geographic details of each segment, such as travel lengths, road names, terrains, and elevation changes. Then the estimated route could visualize the journey and further lead to the conjecture.',
            location: {
                center: [ -76.85630382708514, 41.14180696407619],
zoom: 6.35,
pitch: 0.00,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback:() => {
                document.getElementById("latin_index").style.visibility = "visible";
            },
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
            description: 'Three farms - <a href="http://www.novahistory.org/Chestnut_Hill.htm">Chestnut Hill</a>, Eagles’ Rest just below this, and a third farm near Alexandria, VA. The owner was Mrs. MASON (she was a PRICE). These farms formerly owned by an Englishman named CHAPHAM, who was humane, believed in treating slaves like men. Didn’t whip, etc. On this account the slaves on the Chestnut Hill farm would talk back at the overseer and wouldn’t submit quietly to being ill-treated. When CHAPHAM died, he left the three farms and the slaves to a distant relative, Mrs. MASON, who lived in Alexandria and whose husband was a lawyer there. The three farms were looked after by an overseer. The slaves of Chestnut Hill, when whipped by the overseer, would fight back and sometimes whip the overseer. “Very troublesome.” The slaves wouldn’t submit to harshness, having had a taste of good treatment under CHAPHAM’s mild rule. Many of the slaves at Chestnut Hill had already run away so that only seven were finally left on the farm, and man slaves were brought up from Eagle’s Rest at various times to help work the upper farm. During the winter of 1857-8, the overseer was overheard by an Englishman to say that he would well of “that breed o’dogs” down South when he got through with the spring’s work. The Englishman reported this to the slaves. So the seven Chestnut Hill negros made up their minds to run away to Canada. It was the custom in those parts to grant the slaves Easter Sunday and Easter Monday as holidays. Since the time SIMMS could remember they had also been given the next day, Tuesday, as a holiday. But in 1856 the overseer, in announcing, according to custom, on the Saturday before Easter, the work of the coming week, ordered the slaves to go back to work on Tuesday. Instead of appearing on that morning, however, they waited until the next day, Wednesday, before reporting for work. But the next year, 1857, they came back on Tuesday according to orders. “That breed of dogs,” as the overseer called the seven slaves on the Chestnut Hill farm (of whom SIMMS, about 20 years old was the youngest) decided however, to run away when the next Easter holiday came around.',
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
             callback:() => {
                document.getElementById("latin_index").style.visibility = "visible";
            },
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
            description: 'Between April 5th and April 7th, 1858, the journey continued from Points of Rock to the border of Pennsylvania, then passthrough Chambersburg.',
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
            description: 'The estimated walking time is 17hr 15min, which supports the fact that the journey could be divided into two days because they can only travel at night. The migration approximately went through Old Middletown Rd, Maryland Route 17, 64, and Pennsylvania Route 316, 997. Since the estimated route is based on current road conditions, some speculated routes are safer to travel through. Meanwhile, the established route north could be accessible for slave catchers to locate and ambush at those locations. The speculated routes bring up the dynamic possibility of routes. The speculations are the historical trails near the estimated route. The first route is the Appalachian National Scenic Trail, which is the brown line on the map. It might overlap with the journey between Point of Rocks and Carlise. The second is Captain John Smith Chesapeake NHT, which is the sky-blue line on the map. It might overlap with the route between Wilkes-Barre and Montrose. In addition, these trails are some distance away from the town where Mr. Simms stopped, so the yellow line marks the path connecting the trail with the town. In terms of walking time, it takes an average of around 3 hours to arrive at the town.',
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
            alignment: 'right',
            hidden: false,
            title: 'Chambersburg',
            //image: 'images/source.png',
            description: 'The third journey is from Chambersburg to Carlisle. The estimated walking time is 10hr 24min. The route mainly followed U.S. Route 11, Pennsylvania Route 174, and 465. ',
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
            alignment: 'left',
            hidden: false,
            title: 'from Chambersburg to Carlisle',
            image: 'images/from Chambersburg to Carlisle.png',
            //description: 'Copy these sections to add to your story.',
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
            description: 'At this point, the journey diverged into several segments, with Mr. Simms heading to Harrisburg. The next trip is from Carlisle to Harrisburg. ',
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
            image: 'images/from Carlisle to Harrisburg.png',
            description: 'The estimated walking time is 6hr 27min. The route mainly followed Pennsylvania Route 641 and Market St. It is worth noting that this is the second river crossing on the entire trip, and the river is the Susquehanna River.',
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
            alignment: 'right',
            hidden: false,
            title: 'Harrisburg',
            //image: 'images/source.png',
            description: 'Also, at this time, the journey changed from land to water. They followed the Susquehanna River to go north, which is more difficult to calculate the traveling time.',
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
            description: 'But the likely landing site is Millersburg, as a major arterial road connects the town to their next destination, Pottsville.',
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
            alignment: 'right',
            hidden: false,
            title: 'Millersburg',
            //image: 'images/source.png',
            description: 'The journey from Millersburg to Pottsville takes 14hr 39min by walking. The migration went approximately through U.S. Route 25 and 209. ',
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
            image: 'images/from Millersburg to Pottsville.png',
            //description: 'Copy these sections to add to your story.',
            location: {
center: [-76.593547, 40.634210],
zoom: 9,
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
            alignment: 'right',
            hidden: false,
            title: 'Pottsville',
            //image: 'images/source.png',
            description: 'The next trip goes from Pottsville to Wilkes-Barre, which is quite a long trip that needs 17hr 25min to finish by walking. In other words, it may take three days to complete the entire journey, especially considering that this is the latter part of the journey with low stamina.',
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
            title: 'from Pottsville to Wilkes-Barre',
            image: 'images/from Pottsville to Wilkes-Barre.png',
            //description: 'Copy these sections to add to your story.',
            location: {
center: [-76.0048, 41.0240],
zoom: 9,
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
            id: 'eighth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Wilkes-Barre',
            //image: 'images/source.png',
            description: 'Then the upcoming is the least documented segment of the journey, the mid-stops from Wilkes-Barre to Montrose. In general, the trip could take around 16 to 24 hours to finish, but since the middle stop needs to be clarified, the paper will propose two different routes to compare which one is more feasible.',
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
            title: 'from Wilkes-Barre to Montrose',
            image: 'images/from Wilkes-Barre to Montrose.png',
            description: 'The first route is the shortest route that goes through Tunkhannock, Lemon, Avery, Springville, and Dimock. None of these locations has a similar pronunciation to Abington or Avondale, which are the suggested stop in the transcript. But obviously, it is the most energy-saving route, and it only takes 15hr 43min to complete. The second route is the relatively long and energy-consuming route. The trip continues along the northwest, reaching Archbald and heading up the mountain road, passing Clarks Summit, Nicholson, and Hop Bottom along the way. The estimated walking time is 21hr 4min. However, the key to this route is the pronunciation of Archbald could be misleading. This may not be a highly feasible conjecture, but it also provides another perspective on this journey.',
            location: {
center: [-75.946468, 41.538235],
zoom: 9,
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
            id: 'ninth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Montrose',
            //image: 'images/source.png',
            description: 'The final leg of the journey is from Montrose to Binghamton, with a short stop before heading to Ithaca. The walking time from Montrose to Binghamton is about 7hr 31min.',
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
            title: 'from Montrose to Binghamton',
            image: 'images/from Montrose to Binghamton.png',
            //description: 'Copy these sections to add to your story.',
            location: {
center: [-75.956125, 41.966551],
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
            id: 'tenth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Binghamton',
            //image: 'images/source.png',
            description: 'The walking time from Binghamton to Ithaca is about 14hr 59min. Because of the two-week stay in Montrose, Mr. Simms can relatively get some rest. And this part could also be seen as a safer section of the journey if he could move not only on foot but other transportation.',
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
            title: 'from Binghamton to Ithaca',
            image: 'images/from Binghamton to Ithaca.png',
            //description: 'Copy these sections to add to your story.',
            location: {
center: [-76.190849, 42.307595],
zoom: 9,
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
            id: 'final-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Ithaca',
            //image: 'images/source.png',
            description: 'The report includes two kinds of maps as the visual outcomes. The <a href ="https://felt.com/map/Mr-Simms-Escape-Route-O9ATN9Cd6ASqOIQ3ZH4QzRQD">Flet map</a> is a collaborative map for the public to add resources on it. The storytelling map is an interactive document that better illustrates the whole journey. The complementarity of the two maps can provide alternative perspectives respectively. For example, although the Felt map provides more freedom to browse and edit, the content is limited to the visualization of the route and place itself. On the other hand , the Storytelling map is able to provide more detailed descriptions and narratives, such as the length and duration of each segment.',
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
