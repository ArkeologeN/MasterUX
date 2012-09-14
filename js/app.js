/* 
 *  Copyright (c) 2012. All Rights Reserved. The PlumTree Group
 *  Code is under development state at The PlumTree Group written by
 *  Hamza Waqas (Mobile Application Developer) at Karachi from MacOSX
 */

var $ = jQuery;

$(document).ready(function() {
    $('#map-container').gmap3({
        action: 'init',
        options: {
            center: [49.00408,2.56228],
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            streetViewControl: true
        }
    },
    {
        action: 'addMarkers',
        radius:100,
        markers: [
            {lat:49.00408,lng:2.56228,data:{drive:false,zip:93290,city:"TREMBLAY-EN-FRANCE"}},
            {lat:48.93675,lng:2.35237,data:{drive:false,zip:93200,city:"SAINT-DENIS"}},
        ],
        marker: {
            options: {
                draggable: true,
                icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/icon_green.png')
            }
        }
    }
    );
});


