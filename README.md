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

#  Results
Below you can consult the official data and rectified data. To do this, click on codeLink:

# 1.1 AGB 
[codeLink_EE_AGB.js👆](https://code.earthengine.google.com/f51fe42867d6ced16449d73a5980b816)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_AGB.jpg' height='auto' width='1380'/>
</div>

# 1.2 BGB 
[codeLink_EE_BGB.js👆](https://code.earthengine.google.com/324a81112fa6288265189661c19292ec)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_BGB.jpg' height='auto' width='1380'/>
</div>

# 1.3 CDW 
[codeLink_EE_CDW.js👆](https://code.earthengine.google.com/b4c6dfb49b31355d77957727a94634ad)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_CDW.jpg' height='auto' width='1380'/>
</div>

# 1.4 LIT 
[codeLink_EE_LIT.js👆](https://code.earthengine.google.com/fcf62c9a53ba1e88cbe80a67ab4f7307)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_LIT.jpg' height='auto' width='1380'/>
</div>

# 1.5 TOT 
[codeLink_EE_TOTAL.js👆](https://code.earthengine.google.com/932dcf5bc460e4f13a8ee6286309a50e)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_TOTAL.jpg' height='auto' width='1380'/>
</div>

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





