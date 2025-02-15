// AUTOMATICALLY GENERATED: imported vars from saved link.
var CONVERT_TO_IMPORT = (
[{"type":"geometry","name":"geometry","record":{"geometries":[{"type":"Polygon","coordinates":[[[-43.77297980587366,-22.739091780613855],[-43.77297980587366,-23.09326433199526],[-43.09732062618616,-23.09326433199526],[-43.09732062618616,-22.739091780613855]]],"geodesic":false,"evenOdd":true}],"displayProperties":[{"type":"rectangle"}],"properties":{},"color":"#0b4a8b","mode":"Geometry","shown":true,"locked":false}}])

// AUTOMATICALLY GENERATED: location from saved link.
Map.setCenter(316.99606316287634, -23.185449608920415, 9)


var RGB_LAND=function(data_inicial,data_final,recort){
  var ima=ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  var fil=ima.filterDate(data_inicial,data_final).filterBounds(recort)
  var medi=fil.median()
  var rgb=medi.select(['B4','B3','B2'])
  print('existe no recorte',recort,'Foi encotrada um total de',fil.size(),'imagens de satelets')
  print('Fim do processo')
  Export.image.toDrive({
  image: rgb,
  description:'RGB_landsat_8'+'='+data_inicial+';'+data_final,
  folder: 'Baixar',
  scale: 10,
  region: recort,
  crs:"EPSG:4326",
  maxPixels: 1e13
  return Map.addLayer(rgb,{min:0,max:0.3},'RGB: '+data_inicial+' ate '+data_final);

};
  


//Coloque primeiro a data inicial, data final e o poligono da area desejada.

//A data deve ser Ano-Mes-dia
RGB_LAND('2023-06-1','2023-06-30',geometry)

//Você pode Chamar quantas vezes quiser basta chamar a função RGB_LAND e preencher de forma correta
RGB_LAND('2024-06-1','2024-06-30',geometry)
