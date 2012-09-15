<!--
 Copyright (c) 2012. All Rights Reserved. The PlumTree Group
 Code is under development state at The PlumTree Group written by
 Hamza Waqas (Mobile Application Developer) at Karachi from MacOSX
-->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MasterUX with Gmap & Modals by ArkeologeN!</title>
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/blitzer/jquery-ui-1.8.23.custom.css" />
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="js/jquery-1.8.1.min.js"></script>
        <script type="text/javascript" src="js/jquery-ui-1.8.23.custom.min.js"></script>
        <script type="text/javascript" src="js/gmap3.min.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
    </head>
    <body>
        <div id="map-container"></div>
        <div style="display:  none;">
            <div id="locationto" title="Arrival Information">
            <input type="text" id="lt-checkin" placeholder="Choose Check-in" />
            <textarea placeholder="Would love to listen if you've description!"></textarea>
        </div>
        <div id="locationfrom" title="Departure Information">
            <input type="text" id="lt-checkin" placeholder="Choose Check-out" />
            <textarea placeholder="Would love to listen if you've description!"></textarea>
        </div>
        </div>
        <button style="position: absolute; right: 0px; bottom: 0px; padding: 5px; margin: 10px;" type="button" role="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only">Proceed</button>
        
    </body>
</html>
