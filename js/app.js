/* 
 *  Copyright (c) 2012. All Rights Reserved. The PlumTree Group
 *  Code is under development state at The PlumTree Group written by
 *  Hamza Waqas (Mobile Application Developer) at Karachi from MacOSX
 */

var $ = jQuery;

$(document).ready(function() {
    var k1 = 'k1';
    var k2 = 'k2';
    var mMark1 = {lat:49.00408,lng:2.56228, data:k1, tag: k1}
    var mMark2 = {lat:48.93675,lng:2.35237, data: k1, tag: k2}
    
    $('#map-container').gmap3(
    {
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
            mMark1,
            mMark2,
        ],
        marker: {
            options: {
                draggable: true,
                icon: new google.maps.MarkerImage('http://maps.gstatic.com/mapfiles/icon_green.png')
            },
            events: {
                dragend: function(marker, evt, data) {
                    console.log(marker);
                    var _points = marker.getPosition();
                    switch(data) {
                        case k1:
                            mMark1.lat = _points.Xa;
                            mMark1.lng = _points.Ya;
                            $(this).gmap3({ action: 'clear', name: 'marker',tag: k1 });
                            $(this).gmap3({ action: 'clear',name: 'marker', tag: k2});
                            break;
                        case k2:
                            mMark2.lat = _points.Xa;
                            mMark2.lng = _points.Ya;
                            $(this).gmap3({ action: 'clear', name: 'marker',tag: k1 });
                            $(this).gmap3({ action: 'clear',name: 'marker', tag: k2});
                            break;
                            default:break;
                    }
                    $(this).gmap3(
                        {action:'getRoute',
                            options:{
                                origin:mMark1,
                                destination:mMark2,
                                travelMode: google.maps.DirectionsTravelMode.DRIVING
                            },
                            callback: function(results){                               
                                if (!results) return;
                                $(this).gmap3(
                                    {action:'init',
                                        zoom: 13,
                                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                                        streetViewControl: true,
                                        center: [49.00408,2.56228]
                                    },
                                    {action:'addDirectionsRenderer',
                                    //panelId: 'test-panel',
                                        options:{     
                                            preserveViewport: true,
                                            draggable: true,
                                            directions:results
                                        }
                                    }
                                );
                             }                                
                        }
                    );                   
                }
            }
        }
    }
    );
});


