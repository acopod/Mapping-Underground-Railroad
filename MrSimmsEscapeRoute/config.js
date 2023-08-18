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
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'William Simms’ Route to Freedom',
    subtitle1: 'The Map of William Simms’ Journey',
    subtitle2: 'Designer: Tung Chen',
    subtitle3: 'Assistant Designers: Halle Mae Livermore and Alycia Basquiat',

    //byline: 'Map designer: ',
    footer: '',
    chapters: [

            {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image1: 'images/legend.jpg',
            image2: 'images/legend2.jpg',
            image3: 'images/legend3.jpg',
            image4: 'images/legend4.jpg',
            image6: 'images/legend5.jpg',
            image5: 'images/legend6.jpg',

            description: 'This research is Mr. Simms’ escape route based on <a href="http://tompkins.nygenweb.net/tsimm.htm">Arthur Charles Howland’s interview with William Simms.</a> The transcript is the primary resource for estimating the route. This estimated route is conducted by using Google Earths and Navigation based on the content of the transcript. It is necessary to use the navigation function to roughly estimate the travel time between several essential locations, thereby inferring the rationality of its itinerary and the exact segment points of each day. The locations of segments were Chestnut Hill, Point of Rocks, Chambersburg, Carlisle, Wilkes-Barre, Archbald, Montrose, Binghamton, and Ithaca. The estimated navigation illustrates the geographic details of each segment, such as travel lengths, road names, terrains, and elevation changes. Then the estimated route could visualize the journey and further lead to the conjecture, such as how known safehouses and geographic features played a role in defining Simms’ route.',
            description1:'We have researched information about each of the towns that Simms named in his journey. The goal of this preliminary research was to provide context about each town and its major characteristics during the 1800s (particularly in relation to slavery and abolition). Most of the research focused on gaining information about safe houses and known abolitionists and abolition organizations in each area– information that would help gauge the relative risk that was present while traveling through these towns. This preliminary information allows us to create a plan for what further research needs to be done and what information about these places would be most helpful in creating the full story of William Simms’ escape. Certain towns, such as Archbald, had little to no accessible information on their relevant history.',
            description2: 'The main route indicates the most probable route based on deductions from the transcript.',
            description3: 'The secondary route indicates a less probable route based on deductions from the transcript.',
            //description3: 'Optional routes indicate the possibility that the current road network might differ from the past. These optional routes highlight nearby trails, providing an imaginative alternative for the journey.',
            description4: 'Optional routes indicate the possibility that the current road network might differ from the past. These optional routes highlight nearby trails, providing an imaginative alternative for the journey.',
            description5: 'Speculative connections arise from the fact that the optional routes tend to be distant from the main stops. Mr. Simms might choose to travel this route to reach the town for a stay, and then return to the optional routes after resting.',
            description6: 'Main stops are the places mentioned in the transcript.',
            location: {
                center: [ -76.85630382708514, 41.14180696407619],
                zoom: 6.35,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
            
                  
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],

callback:() => {
                document.getElementById("refugees_legend").style.visibility = "hidden";
            },
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Chestnut Hill',
            image: 'images/ChestnutHill.jpg',
            description: 'Three farms - <a href="http://www.novahistory.org/Chestnut_Hill.htm">Chestnut Hill</a>, Eagles’ Rest just below this, and a third farm near Alexandria, VA. Mrs. MASON, formerly known as a PRICE, was the owner. The farms were previously under the ownership of an Englishman named CHAPHAM, known for his humane treatment of slaves as equals, refraining from whipping and such. This stance led the Chestnut Hill farm slaves to stand up to the overseer and resist mistreatment. Following CHAPHAM’s passing, the farms and slaves were inherited by a distant relative, Mrs. MASON, residing in Alexandria. Her husband was a lawyer there. The three farms were overseen by a supervisor. The Chestnut Hill slaves, having experienced benevolence under CHAPHAM’s gentle rule, would not tolerate cruelty. This defiance sometimes escalated into physical confrontations, even overpowering the overseer. This attitude posed a challenge. Due to this, just seven Chestnut Hill slaves remained, prompting the transfer of male slaves from Eagle’s Rest to assist with the upper farms work. During the winter of 1857-8, an Englishman overheard the overseer expressing intentions to exploit "that breed o’dogs" down South after the spring’s work. The Englishman relayed this to the slaves, prompting the seven Chestnut Hill individuals, including the youngest SIMMS at around 20 years old, to decide on fleeing to Canada. Traditionally, the slaves were granted Easter Sunday, Easter Monday, and even the subsequent Tuesday as holidays. However, in 1856, the overseer, during the customary Saturday announcement before Easter, instructed them to resume work on Tuesday. The slaves deferred to Wednesday instead. The following year, 1857, they adhered to Tuesday’s orders. The seven "breed of dogs," as termed by the overseer, planned to escape during the upcoming Easter holiday.',
            
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
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [    
                   
                 ],
            onChapterExit: []
        },
                {
            id: 'second-identifier-1',
            alignment: 'right',
            hidden: false,
            title: 'Point of Rocks',
            //image: 'images/ChestnutHill.jpg',
            description: 'Point of Rocks is located across the Potomac River, meaning Simms would have crossed the river to reach any of these confirmed safe houses. The route from Alexandria to Point of Rocks could also be traveled entirely on the Potomac River. There are a number of sites along the Potomac with confirmed significance on the Underground Railroad, and the National Park Service writes, “while researchers believe that the Trail corridor is rich in such historical information, attention to the use of the waterways as a means of escaping the oppression of slavery has received only minor attention. Research has shown, however, that the enslaved used absolutely any and all measures to free themselves, and the Potomac River was a part of such efforts: The Potomac is both deep enough for boats to ross and shallow enough, in places, for crossing on horseback or by wagon.” Between April 5th and April 7th, 1858, the journey continued from Points of Rock to the border of Pennsylvania, then passthrough Chambersburg.',
            description1:'The relevant information in this town includes:',
            description2:'1. Otho Thomas II farm at 5323 Tuscarora Road is a confirmed safe house/point on Underground Railroad.',
            description3:'2. Point of Rocks African Methodist Episcopal Church is a confirmed safe house/point on Underground Railroad.',
            description4:'St. Paul’s Episcopal Church is an unconfirmed Underground Railroad Site.',
            location: {
            center: [-77.53585, 39.27480],
            zoom: 15,
            pitch: 60.00,
            bearing: 0.00,
                    speed: 0.3,
                    curve: 1,
                        },
            mapAnimation: 'flyTo',
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            rotateAnimation: true,
            onChapterEnter: [    
                    
                 ],
            onChapterExit: []
        },
                {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'from Point of Rocks to Chambersburg',
            image: 'images/from Point of Rocks to Chambersburg.png',
            description: 'The estimated walking time is 17hr 15min, which supports the fact that the journey could be divided into two days because they can only travel at night. The migration approximately went through Old Middletown Rd, Maryland Route 17, 64, and Pennsylvania Route 316, 997. Since the estimated route is based on current road conditions, some speculated routes are safer to travel through. Meanwhile, the established route north could be accessible for slave catchers to locate and ambush at those locations. The speculated routes bring up the dynamic possibility of routes. The speculations are the historical trails near the estimated route. The first route is the Appalachian National Scenic Trail, which is the pink line on the map. It might overlap with the journey between Point of Rocks and Carlise. The second is Captain John Smith Chesapeake NHT, which is the orange line on the map. It might overlap with the route between Wilkes-Barre and Montrose. In addition, these trails are some distance away from the town where Mr. Simms stopped, so the yellow line marks the path connecting the trail with the town. In terms of walking time, it takes an average of around 3 hours to arrive at the town.',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier-1',
            alignment: 'right',
            hidden: false,
            title: 'Chambersburg',
            //image: 'images/source.png',
            description: 'The third journey is from Chambersburg to Carlisle. The estimated walking time is 10hr 24min. The route mainly followed U.S. Route 11, Pennsylvania Route 174, and 465.',
            description1:'The relevant information in this town includes:',
            description2:'1. Henry Watson, a free black barber that haled slaves escape, was located in Chambersburg.',
            description3:'2. It bordered Maryland, thus many slaves escaped through the town. They would often follow the Shenandoah Valley in Virginia to there.',
            description4:'3. Some freedom seekers, not assisted by the Underground Railroad, would follow the Appalachian mountains northward.',
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
            
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            description1:'The relevant information in this town includes:',
            description2:'1.There were many routes that the Underground Railroad ran on. A few even ran through Carlisle, Pennsylvania and Boiling Springs, Pennsylvania. These routes were led by Daniel Kaufman. He was only seventeen years old when he took over as conductor. He had the help of Stephen Weakley, Philip Brenbill, and Karl Griffith. Kaufman and his other conductors got these runaway slaves from a free lack man named Cole. Kaufman hid his slaves in safe houses all around Carlisle nd Boiling Springs, Pa. Kaufman’s passage started in Hagerstown, MD. It then ran to Chambersburg, Shippensburg, Millers Furnace in Huntzdale, Burkholder’s Cider-press at Walnut Bottom, Kaufman’s farm and then to Dr. William Rutherford in Harrisburg. Kaufman ran the Underground Railroad in Carlisle and Boiling Springs from 1835-1848.',
            description3:'2.The courthouse in Carlisle, “The Old Courthouse,” was associated with many successful journeys to freedom. For example, Daniel Kaufman of Carlisle faced trial in 1848 when Maryland slave owner Mary M. Oliver filed a lawsuit in Cumberland County Pennsylvania against him and two associates for helping thirteen fugitive slaves escape. Kaufman paid one of the largest fines ever assessed for violating fugitive slave laws.',
            
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            description1:'The relevant information in this town includes:',
            description2:'1. By 1850, Harrisburg had 900 free black people. Many lived in Tanner’s Alley within the town. This was home to the Wesley Union AME Zion Church.',
            description3:'2. Joseph Bustill, a black teacher, and William “Pap” Jones, a black doctor, lived here during the 1850s and assisted in the Underground Railroad. They hid freedom seekers in their homes and Jones also transported some in a covered wagon.',
            description4:'3. Bustill wrote letters to William Still describing the operations of the Harrisburg Fugitive Slave Society.',
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
           callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
           
            title: 'from Harrisburg to Millersburg',
            //image: 'images/source.png',
            description: 'The likely landing site is Millersburg, as a major arterial road connects the town to their next destination, Pottsville. However, one could conjecture that the intended landing point is at the entry point of the Appalachian National Scenic Trail. If Mr. Simms were to traverse this trail, it is possible that he could have a safer journey towards the north.',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            description1:'The relevant information in this town includes:',
            description2:'1. William Camp Gildersleeve operated a stop on the Underground Railroad where he shuttled escaped slaves north to their next stop in either Scranton, Abington, or Montrose. His efforts were aided by Lucy Washburn and Jacob Welcome, two fugitive slaves that he employed.',
            description3:'2. Wilkes-Barre was also home to Henry Brown, a free black man who is remembered by his daughter in the Aug. 23, 1884 US Census, 10 days after he died, who said that he “rendered able assistance by furnishing food and shelter for those who made their escape from bondage and came here via the U.G.R.R. (Underground Railroad).',
            
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'from Wilkes-Barre to Montrose',
            image: 'images/from Wilkes-Barre to Montrose.png',
            description: 'The first route, which is the dark gray soild line, is the shortest route that goes through Tunkhannock, Lemon, Avery, Springville, and Dimock. None of these locations has a similar pronunciation to Abington or Avondale, which are the suggested stop in the transcript. But obviously, it is the most energy-saving route, and it only takes 15hr 43min to complete. The second route, which is the dark gray dashed line, is the relatively long and energy-consuming route. The trip continues along the northwest, reaching Archbald and heading up the mountain road, passing Clarks Summit, Nicholson, and Hop Bottom along the way. The estimated walking time is 21hr 4min. However, the key to this route is the pronunciation of Archbald could be misleading. This may not be a highly feasible conjecture, but it also provides another perspective on this journey.',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'ninth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Montrose',
            //image: 'images/source.png',
            
            description: 'The final leg of the journey is from Montrose to Binghamton, with a short stop before heading to Ithaca. The walking time from Montrose to Binghamton is about 7hr 31min. Mr. Simms spent two weeks at Montrose, signifying both an opportunity for rest and the suggestion of a safer environment.',
            description1:'The relevant information in this town includes:',
            description2:'While it is difficult to determine the degree of involvement that Montrose and Susquehanna County played in assisting the enslaved to make their way to freedom, it cannot be doubted that the town and county did play a role. The Wikipedia account: “History of African Americans* in Montrose, PA and Susquehanna County,” states that Montrose played a significant role in assisting the enslaved but these historians have found little documentation to support the Underground Railroad claims. Other historians take an opposite view and see Susquehanna County as an active abolitionist area and say Montrose was central to the effort to help the enslaved make their way to freedom.',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },


                {
            id: 'tenth-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Binghamton',
            //image: 'images/source.png',
            description: 'The walking time from Binghamton to Ithaca is about 14hr 59min. Due to the planned two-week stay in Montrose, Mr. Simms will have the opportunity to get some well-deserved rest. Additionally, this portion of the journey could be considered safer if he utilizes various modes of transportation instead of just walking.',
            description1:'They are possible save houses in Binghamton:',
            description2:'1. Dr. Stephen Hand’s house on 42 Collier Street (Dr. Hand was head of the local medical society.)',
            description3:'2. A.M.E. Zion Church',
            description4:'3. A.M.E. Bethel Church',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },


                        {
            id: 'final-chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Ithaca',
            //image: 'images/source.png',
            description2: 'The report includes two kinds of maps as the visual outcomes. The <a href ="https://felt.com/map/Mr-Simms-Escape-Route-O9ATN9Cd6ASqOIQ3ZH4QzRQD">Flet map</a> is a collaborative map for the public to add resources on it. The storytelling map is an interactive document that better illustrates the whole journey. The complementarity of the two maps can provide alternative perspectives respectively. For example, although the Felt map provides more freedom to browse and edit, the content is limited to the visualization of the route and place itself. On the other hand , the Storytelling map is able to provide more detailed descriptions and narratives, such as the length and duration of each segment.',
            description:'Built in 1836, St. James AME Zion is believed to be the oldest church in Ithaca and one of the first of the AME Zion churches in the country. An Underground Railroad station, the church is located in a community that was an important transfer point for fugitive slaves en route to Canada. Many of these slaves, impressed by the support of the local community, decided to stay in Ithaca and constructed homes in the area surrounding St. James.',
            description1:'From Ithaca, freedom seekers could move northward to Sherwood and Auburn via Cayuga Lake to the Slocum Howland House and General Store and the Seward Family House in Auburn. Some settled in Ithaca, Sherwood, and Auburn as free people, and some also continued onto Canada for maximum guarantees of lifelong freedom. William Simms made a life as a farmer in East Hill, Ithaca as detailed in his provided journey.',
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
            callback:() => {
                document.getElementById("refugees_legend").style.visibility = "visible";
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
