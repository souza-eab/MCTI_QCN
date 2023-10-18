# QCN

The data from BRAZIL'S `Fourth National Communication - (QCN) ` and Biannual Update Reports to the UNFCC has been made available by the MCTI in GEOPACKAGE format. 

In this repository you can find: 

`(1)` How we added, rasterized and exported the official data from GCP to Earth Engine;
`(2)` The pixel-by-pixel rectification process by the weighted averages of the same document;  


# QCN_spatial

Based on the data available  `1_Asset_v0-1` (MCTI, 2020), only one column was included. 
This column is obtained by relating the **IBGE FITO** to the **LULC classes (Mapbiomas-C8, 2023)** and generating the *'MB_C8'* column.  
`**IBGE FITO** to the **LULC classes (Mapbiomas-C8, 2023)`

### Eg. Amazon - `1_Asset_v0-1`

| fito   | c_abg | c_bgb | c_dw | c_litter | total |  MB_C8
| ----   | ----- | ----- | ---- | -------- | ------ | ------
| `Aa`   | 117.3 | 11.7  | 9.5  | 6.8      | ..... |   3     
| `Ab`   | 133.9 | 13.4  | 10.9 | 7.7      | ..... |   3           
| `..`   | ..... | ..... | .... | ........ | ..... | ......
| `Pa`   |  43.9 | 16.2  |  4.8 | 1.6      | ..... |   11     

The original data are geopackages. To ingest assets tile it into Earth Engine (.EE), all the biomes had to be divided into tiles. Well, like the Amazon process, it was also done using tiles.


### +INFO Assets QCN [+i👆](https://github.com/souza-eab/MCTI_QCN/tree/main/Scripts)

[Link to script - 'total👆' ](https://code.earthengine.google.com/e76bbf6452f9ac4f647af3db75d3173e) | [Link to script - 'c_agb👆'](https://code.earthengine.google.com/0656bcd6a1bfc6ae3b3ea36a16b4671c)

```javascript
// Data official (total)
var data_Total_carbon = ee.ImageCollection('projects/mapbiomas-workspace/SEEG/2023/QCN/1_Asset_v0-1')
  .select('total') //.select('c_agb'; 'c_bgb'; 'c_dw'; 'c_litter'; '...'; 'total')
  .filterMetadata('biome', 'equals', 'amazonia')
  .mosaic();
  //.clip(AOI);
// MapaddLayer
var visFlo = {min: 0,max: 200,
  palette:["#fde725","#a0da39","#4ac16d","#1fa187","#277f8e","#365c8d","#46327e","#440154"]};
Map.addLayer(data_Total_carbon, visFlo,"data_Total_carbon");
```



## Workflow ✨ [+i👆](https://github.com/souza-eab/MCTI_QCN/tree/main/Scripts) 
   
   Folders 📂 are organized by key-steps  ✨ and contain a set of codes {} following the *QCN && QCN_rectify* classification scheme:

1. ✨ Scripts [+i👆 GEE.js](https://github.com/souza-eab/MCTI_QCN)





