var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ERAsDistrict_2 = new ol.format.GeoJSON();
var features_ERAsDistrict_2 = format_ERAsDistrict_2.readFeatures(json_ERAsDistrict_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ERAsDistrict_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ERAsDistrict_2.addFeatures(features_ERAsDistrict_2);
var lyr_ERAsDistrict_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ERAsDistrict_2, 
                style: style_ERAsDistrict_2,
                popuplayertitle: "ERA's District",
                interactive: true,
                title: '<img src="styles/legend/ERAsDistrict_2.png" /> ERA\'s District'
            });
var format_Cindergravel_3 = new ol.format.GeoJSON();
var features_Cindergravel_3 = format_Cindergravel_3.readFeatures(json_Cindergravel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cindergravel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cindergravel_3.addFeatures(features_Cindergravel_3);
var lyr_Cindergravel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cindergravel_3, 
                style: style_Cindergravel_3,
                popuplayertitle: "Cinder gravel",
                interactive: true,
                title: '<img src="styles/legend/Cindergravel_3.png" /> Cinder gravel'
            });
var format_Lateriticsoil_4 = new ol.format.GeoJSON();
var features_Lateriticsoil_4 = format_Lateriticsoil_4.readFeatures(json_Lateriticsoil_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lateriticsoil_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lateriticsoil_4.addFeatures(features_Lateriticsoil_4);cluster_Lateriticsoil_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Lateriticsoil_4
});
var lyr_Lateriticsoil_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Lateriticsoil_4, 
                style: style_Lateriticsoil_4,
                popuplayertitle: "Lateritic soil",
                interactive: true,
                title: '<img src="styles/legend/Lateriticsoil_4.png" /> Lateritic soil'
            });
var group_CindergravelandLateriticsoilsamplelocation = new ol.layer.Group({
                                layers: [lyr_ERAsDistrict_2,lyr_Cindergravel_3,lyr_Lateriticsoil_4,],
                                fold: "open",
                                title: "Cinder gravel and  Lateritic soil sample location"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_ERAsDistrict_2.setVisible(true);lyr_Cindergravel_3.setVisible(true);lyr_Lateriticsoil_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_CindergravelandLateriticsoilsamplelocation];
lyr_ERAsDistrict_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DISTRICTS_': 'DISTRICTS_', 'Area_Km2': 'Area_Km2', 'Shape_Leng': 'Shape_Leng', 'Asphalt_Km': 'Asphalt_Km', 'Gravel_Km': 'Gravel_Km', 'Total': 'Total', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Cindergravel_3.set('fieldAliases', {'Location_n': 'Location_n', 'X': 'X', 'Y': 'Y', 'Material_T': 'Material_T', 'Location_R': 'Location_R', });
lyr_Lateriticsoil_4.set('fieldAliases', {'Location_n': 'Location_n', 'X': 'X', 'Y': 'Y', 'Material_T': 'Material_T', 'Location_R': 'Location_R', });
lyr_ERAsDistrict_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DISTRICTS_': 'TextEdit', 'Area_Km2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Asphalt_Km': 'TextEdit', 'Gravel_Km': 'TextEdit', 'Total': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cindergravel_3.set('fieldImages', {'Location_n': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Material_T': 'TextEdit', 'Location_R': 'TextEdit', });
lyr_Lateriticsoil_4.set('fieldImages', {'Location_n': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Material_T': 'TextEdit', 'Location_R': 'TextEdit', });
lyr_ERAsDistrict_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'DISTRICTS_': 'inline label - visible with data', 'Area_Km2': 'no label', 'Shape_Leng': 'no label', 'Asphalt_Km': 'no label', 'Gravel_Km': 'no label', 'Total': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Cindergravel_3.set('fieldLabels', {'Location_n': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Material_T': 'inline label - always visible', 'Location_R': 'inline label - always visible', });
lyr_Lateriticsoil_4.set('fieldLabels', {'Location_n': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Material_T': 'inline label - always visible', 'Location_R': 'inline label - always visible', });
lyr_Lateriticsoil_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});