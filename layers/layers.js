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
var format_Incidencias_3 = new ol.format.GeoJSON();
var features_Incidencias_3 = format_Incidencias_3.readFeatures(json_Incidencias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Incidencias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Incidencias_3.addFeatures(features_Incidencias_3);
var lyr_Incidencias_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Incidencias_3, 
                style: style_Incidencias_3,
                popuplayertitle: 'Incidencias',
                interactive: true,
    title: 'Incidencias<br />\
    <img src="styles/legend/Incidencias_3_0.png" /> Agua contaminada<br />\
    <img src="styles/legend/Incidencias_3_1.png" /> Coladera sin tapa<br />\
    <img src="styles/legend/Incidencias_3_2.png" /> Drenaje tapado / Coladrera tapada / Tuberia tapada<br />\
    <img src="styles/legend/Incidencias_3_3.png" /> Falta de agua<br />\
    <img src="styles/legend/Incidencias_3_4.png" /> Fuga de agua<br />\
    <img src="styles/legend/Incidencias_3_5.png" /> Socavon / Hundimiento<br />\
    <img src="styles/legend/Incidencias_3_6.png" /> Solicitud de pipa<br />\
    <img src="styles/legend/Incidencias_3_7.png" /> Inundacion / Encharcamiento<br />\
    <img src="styles/legend/Incidencias_3_8.png" /> Falta tapa en caja de valvula<br />'
        });

lyr_Positron_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_colonias_2.setVisible(true);lyr_Incidencias_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_municipios_1,lyr_colonias_2,lyr_Incidencias_3];
lyr_municipios_1.set('fieldAliases', {'id': 'id', 'cveigecem': 'cveigecem', 'cveinegi': 'cveinegi', 'nom_mun': 'nom_mun', 'iddeleg': 'iddeleg', 'area_km2_o': 'area_km2_o', 'area_km2': 'area_km2', 'deficit': 'deficit', 'Dispo': 'Dispo', });
lyr_colonias_2.set('fieldAliases', {'cve_igecem': 'cve_igecem', 'nom_mun': 'nom_mun', 'nom_col': 'nom_col', 'area_m': 'area_m', });
lyr_Incidencias_3.set('fieldAliases', {'Marca temp': 'Marca temp', 'Tipo de pr': 'Tipo de pr', 'Nombre(s)': 'Nombre(s)', 'Apellido(s': 'Apellido(s', 'Telefono a': 'Telefono a', 'Municipio': 'Municipio', 'Colonia/Ba': 'Colonia/Ba', 'Avenida/Bo': 'Avenida/Bo', 'Numero ext': 'Numero ext', 'Numero Int': 'Numero Int', 'Codigo Pos': 'Codigo Pos', 'Manzana/Lo': 'Manzana/Lo', 'Lugar de r': 'Lugar de r', 'Lat': 'Lat', 'Long': 'Long', 'Telefono': 'Telefono', });
lyr_municipios_1.set('fieldImages', {'id': 'TextEdit', 'cveigecem': 'TextEdit', 'cveinegi': 'TextEdit', 'nom_mun': 'TextEdit', 'iddeleg': 'TextEdit', 'area_km2_o': 'TextEdit', 'area_km2': 'TextEdit', 'deficit': 'TextEdit', 'Dispo': 'TextEdit', });
lyr_colonias_2.set('fieldImages', {'cve_igecem': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_col': 'TextEdit', 'area_m': 'TextEdit', });
lyr_Incidencias_3.set('fieldImages', {'Marca temp': 'TextEdit', 'Tipo de pr': 'TextEdit', 'Nombre(s)': 'TextEdit', 'Apellido(s': 'TextEdit', 'Telefono a': 'TextEdit', 'Municipio': 'TextEdit', 'Colonia/Ba': 'TextEdit', 'Avenida/Bo': 'TextEdit', 'Numero ext': 'TextEdit', 'Numero Int': 'TextEdit', 'Codigo Pos': 'TextEdit', 'Manzana/Lo': 'TextEdit', 'Lugar de r': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Telefono': 'TextEdit', });
lyr_municipios_1.set('fieldLabels', {'id': 'hidden field', 'cveigecem': 'hidden field', 'cveinegi': 'hidden field', 'nom_mun': 'hidden field', 'iddeleg': 'hidden field', 'area_km2_o': 'hidden field', 'area_km2': 'no label', 'deficit': 'no label', 'Dispo': 'no label', });
lyr_colonias_2.set('fieldLabels', {'cve_igecem': 'hidden field', 'nom_mun': 'hidden field', 'nom_col': 'hidden field', 'area_m': 'hidden field', });
lyr_Incidencias_3.set('fieldLabels', {'Marca temp': 'inline label - always visible', 'Tipo de pr': 'inline label - always visible', 'Nombre(s)': 'hidden field', 'Apellido(s': 'hidden field', 'Telefono a': 'hidden field', 'Municipio': 'hidden field', 'Colonia/Ba': 'hidden field', 'Avenida/Bo': 'hidden field', 'Numero ext': 'hidden field', 'Numero Int': 'hidden field', 'Codigo Pos': 'hidden field', 'Manzana/Lo': 'hidden field', 'Lugar de r': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'Telefono': 'hidden field', });
lyr_Incidencias_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});