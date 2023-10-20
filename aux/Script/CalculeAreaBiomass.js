/*
   Quantificar a área total e média de Biomassa por Biomas no BR de |n| classes de LULC do Mapbiomas - C8;
   Realizar DataVis dos dados 
   Linhas para alterar: 14-19 select your Biome interess |
                        25-30 select your Biome interess | 
                        35 select classMB-8 interess     | 
                        74 e 76 (Name da csv | Depending on the class selected, change the name of the cvs so that it has the same id as the class selected |
*/


// --- Assets
// --- Asset - Biomassa
var qcn = ee.ImageCollection('projects/mapbiomas-workspace/SEEG/2023/QCN/2_Asset_v0-2_rect').select('total_1985')
                        .filterMetadata('biome', 'equals', 'amazonia')
                        //.filterMetadata('biome', 'equals', 'cerrado')
                        //.filterMetadata('biome', 'equals', 'caatinga')
                        //.filterMetadata('biome', 'equals', 'mata_atlantica')
                        //.filterMetadata('biome', 'equals', 'pantanal')
                        //.filterMetadata('biome', 'equals', 'pampa')
                        .mosaic();
//Map.addLayer(qcn, {}, 'QCN_FULL')

// --- Asset - AOI
var geometry = ee.FeatureCollection("projects/mapbiomas-workspace/AUXILIAR/biomas-2019")
                  .filterMetadata('Bioma', 'equals', 'Amazônia')  // Select Biome j interest
                  //.filterMetadata('Bioma', 'equals', 'Cerrado')
                  //.filterMetadata('Bioma', 'equals', 'Caatinga')
                  //.filterMetadata('Bioma', 'equals', 'Mata Atlântica')
                  //.filterMetadata('Bioma', 'equals', 'Pantanal')
                  //.filterMetadata('Bioma', 'equals', 'Pampa')
                  .geometry();

// --- Asset - LULC (Mapbiomas)
var forest_1985= ee.Image('projects/mapbiomas-workspace/public/collection8/mapbiomas_collection80_integration_v1')
  .eq(4)                          // Select class i (3-Forest; .... )
  .select('classification_1985')  // Select year of interest
  .updateMask(qcn)
  .selfMask();


// Dado Oficial da QCN
var qcn_total = qcn.updateMask(forest_1985);

// Calculate area and Biomasss with QCN-Official
var area = ee.FeatureCollection(
  ee.List(
    ee.Dictionary(
      ee.Image.pixelArea()
      .divide(1e4) // em Hectares
      .updateMask(qcn_total)
      .addBands(qcn_total)
      .reduceRegion({
        reducer:ee.Reducer.sum().group(1,'qcn'),
        geometry:qcn_total.geometry(),
        scale:30,
        maxPixels:1e13,
      })
    ).get('groups')
  )
  .map(function(obj){
    return ee.Feature(null)
      .set({
        'area_ha':ee.Dictionary(obj).get('sum'),
        'carbono_qcn':ee.Dictionary(obj).get('qcn'),
      });
  })
);

print('area_ha',area.aggregate_sum('area_ha'), 'mean_carbono_qcn_rectify-t/C', area.aggregate_mean('carbono_qcn'))

// Export
Export.table.toDrive({
  collection: area,
  description: 'area_and_biomass_amazonia_3', //a cada rodada alterar o Bioma e numero da classe
  folder: 'area_and_biomass', // Substitua por um nome de pasta desejado
  fileNamePrefix: 'area_and_biomass_amazonia_3',
  fileFormat: 'CSV',
});

// Request the "Mapp" package to define map styles
var Mapp = require('users/joaovsiqueira1/packages:Mapp.js'); 

// Set the available map style options
Map.setOptions({
  'styles': {
    'Dark': Mapp.getStyle('Dark'),
    'Dark2':Mapp.getStyle('Dark2'),
    'Aubergine':Mapp.getStyle('Aubergine'),
    'Silver':Mapp.getStyle('Silver'),
    'Night':Mapp.getStyle('Night'),
  }
});

//  Set the default map style to "Satellite
Map.setOptions('Dark2');

