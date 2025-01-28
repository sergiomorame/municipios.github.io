var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_municipios_1 = new ol.format.GeoJSON();
var features_municipios_1 = format_municipios_1.readFeatures(json_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_1.addFeatures(features_municipios_1);
var lyr_municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_1, 
                style: style_municipios_1,
                popuplayertitle: 'municipios',
                interactive: false,
                title: '<img src="styles/legend/municipios_1.png" /> municipios'
            });
var format_colonias_2 = new ol.format.GeoJSON();
var features_colonias_2 = format_colonias_2.readFeatures(json_colonias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_2.addFeatures(features_colonias_2);
var lyr_colonias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_2, 
                style: style_colonias_2,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_2.png" /> colonias'
            });
var format_25_3 = new ol.format.GeoJSON();
var features_25_3 = format_25_3.readFeatures(json_25_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25_3.addFeatures(features_25_3);
var lyr_25_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25_3, 
                style: style_25_3,
                popuplayertitle: '25',
                interactive: true,
    title: '25<br />\
    <img src="styles/legend/25_3_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/25_3_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/25_3_2.png" /> Falta de agua<br />\
    <img src="styles/legend/25_3_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/25_3_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/25_3_5.png" /> Solicitud de pipa<br />'
        });
var format_24_4 = new ol.format.GeoJSON();
var features_24_4 = format_24_4.readFeatures(json_24_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24_4.addFeatures(features_24_4);
var lyr_24_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24_4, 
                style: style_24_4,
                popuplayertitle: '24',
                interactive: true,
    title: '24<br />\
    <img src="styles/legend/24_4_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/24_4_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/24_4_2.png" /> Falta de agua<br />\
    <img src="styles/legend/24_4_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/24_4_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/24_4_5.png" /> Solicitud de pipa<br />'
        });
var format_23_5 = new ol.format.GeoJSON();
var features_23_5 = format_23_5.readFeatures(json_23_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23_5.addFeatures(features_23_5);
var lyr_23_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23_5, 
                style: style_23_5,
                popuplayertitle: '23',
                interactive: true,
    title: '23<br />\
    <img src="styles/legend/23_5_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/23_5_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/23_5_2.png" /> Falta de agua<br />\
    <img src="styles/legend/23_5_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/23_5_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/23_5_5.png" /> Solicitud de pipa<br />'
        });
var format_22_6 = new ol.format.GeoJSON();
var features_22_6 = format_22_6.readFeatures(json_22_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_6.addFeatures(features_22_6);
var lyr_22_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22_6, 
                style: style_22_6,
                popuplayertitle: '22',
                interactive: true,
    title: '22<br />\
    <img src="styles/legend/22_6_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/22_6_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/22_6_2.png" /> Falta de agua<br />\
    <img src="styles/legend/22_6_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/22_6_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/22_6_5.png" /> Solicitud de pipa<br />'
        });
var format_21_7 = new ol.format.GeoJSON();
var features_21_7 = format_21_7.readFeatures(json_21_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21_7.addFeatures(features_21_7);
var lyr_21_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21_7, 
                style: style_21_7,
                popuplayertitle: '21',
                interactive: true,
    title: '21<br />\
    <img src="styles/legend/21_7_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/21_7_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/21_7_2.png" /> Falta de agua<br />\
    <img src="styles/legend/21_7_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/21_7_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/21_7_5.png" /> Solicitud de pipa<br />'
        });
var format_20_8 = new ol.format.GeoJSON();
var features_20_8 = format_20_8.readFeatures(json_20_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20_8.addFeatures(features_20_8);
var lyr_20_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20_8, 
                style: style_20_8,
                popuplayertitle: '20',
                interactive: true,
    title: '20<br />\
    <img src="styles/legend/20_8_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/20_8_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/20_8_2.png" /> Falta de agua<br />\
    <img src="styles/legend/20_8_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/20_8_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/20_8_5.png" /> Solicitud de pipa<br />'
        });
var format_18_9 = new ol.format.GeoJSON();
var features_18_9 = format_18_9.readFeatures(json_18_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18_9.addFeatures(features_18_9);
var lyr_18_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18_9, 
                style: style_18_9,
                popuplayertitle: '18',
                interactive: true,
    title: '18<br />\
    <img src="styles/legend/18_9_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/18_9_1.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/18_9_2.png" /> Falta de agua<br />\
    <img src="styles/legend/18_9_3.png" /> Fuga de agua<br />\
    <img src="styles/legend/18_9_4.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/18_9_5.png" /> Solicitud de pipa<br />'
        });
var format_17_10 = new ol.format.GeoJSON();
var features_17_10 = format_17_10.readFeatures(json_17_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_10.addFeatures(features_17_10);
var lyr_17_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17_10, 
                style: style_17_10,
                popuplayertitle: '17',
                interactive: true,
    title: '17<br />\
    <img src="styles/legend/17_10_0.png" /> Fuga de agua<br />\
    <img src="styles/legend/17_10_1.png" /> Solicitud de pipa<br />'
        });
var group_Dias = new ol.layer.Group({
                                layers: [lyr_25_3,lyr_24_4,lyr_23_5,lyr_22_6,lyr_21_7,lyr_20_8,lyr_18_9,lyr_17_10,],
                                fold: "open",
                                title: 'Dias'});

lyr_Positron_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_25_3.setVisible(true);lyr_24_4.setVisible(true);lyr_23_5.setVisible(true);lyr_22_6.setVisible(true);lyr_21_7.setVisible(true);lyr_20_8.setVisible(true);lyr_18_9.setVisible(true);lyr_17_10.setVisible(true);
var layersList = [lyr_Positron_0,lyr_municipios_1,lyr_colonias_2,group_Dias];
lyr_municipios_1.set('fieldAliases', {'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'deficit': 'deficit', 'Dispo': 'Dispo', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', 'area_m': 'area_m', });
lyr_25_3.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_24_4.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_23_5.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_22_6.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_21_7.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_20_8.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_18_9.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_17_10.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Lat': 'Lat', 'Long': 'Long', 'Lon': 'Lon', });
lyr_municipios_1.set('fieldImages', {'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'deficit': 'TextEdit', 'Dispo': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', 'area_m': 'TextEdit', });
lyr_25_3.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_24_4.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_23_5.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_22_6.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_21_7.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_20_8.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_18_9.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_17_10.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Lon': 'TextEdit', });
lyr_municipios_1.set('fieldLabels', {'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'deficit': 'no label', 'Dispo': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'inline label - always visible', 'area_m': 'hidden field', });
lyr_25_3.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_24_4.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_23_5.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_22_6.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_21_7.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_20_8.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_18_9.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_17_10.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Lon': 'hidden field', });
lyr_17_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});