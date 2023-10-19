# Workflow ✨ 

## Step_0: 

Pre-processing official data, adding columns [`0_1_addColumn.R`](https://github.com/souza-eab/MCTI_QCN/blob/main/Scripts/Step_0/0_1_addColumn.r), rasterizing [`0_2_Rasterize.R`](https://github.com/souza-eab/MCTI_QCN/blob/main/Scripts/Step_0/0_2_Rasterize.r), and uploading GCP to Earth Engine [`0_3_GCP_to_GEE.py`](https://github.com/souza-eab/MCTI_QCN/blob/main/Scripts/Step_0/0_3_GCP_to_GEE.py);

| script             | Description
| ----               | ----- 
| `0_1_addColumn`    | Add column from class Mapbiomas_C8
| `0_2_Rasterize`    | Rasterize all biomes in 30m (raster/gdal)
| `0_3_GCP_to_GEE`   | After upgrading to GCP, all the bricks are rasterized. Import and export in Earth Engine 


##  Step_1:

Steps to rasterize, blend, rectify and export

| script                                 | Description
| ----                                   | ----- 
| `0_1_joinTiles_Rasterize_Amazon.js`    | Generate asset `0_pastVegetation_v0-1` join all the tiles, rasterize and export asset biome Amazon
| `0_2_BlendBiomes.js`                   | Blending and standardizing assets per biome QCN and generating asset `1_Asset_v0-1`;
| `0_3_rectQCN_eg_compart,js`            | Rectify pixels with Column MB_C8, we can check 2 situations, where: 
|                                        | `H0` - Mapbiomas and QCN agree that they are the same class maintain the stocks;
|                                        | `H1` - Mapbiomas and QCN disagree that they are the same class and assume values of the weighted average of phyto.


#  Results: 

# Results [Assets](https://github.com/souza-eab/MCTI_QCN/tree/main/Scripts)

Once the data has been processed and is available in .EE, the path to accessing are:

###  ---> 📂Folder QCN - root path: 
```javascript
var path = 'projects/mapbiomas-workspace/SEEG/2023/QCN'
```

| Asset | Description | Scale | format | Complete path | 
| ----- | ----------- |-------|--------|---------------------------------------------|
| `0_Data_Official_tiles`       | tile files from all biomes raster (GDAL)*                         | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/0_Data_Official_tiles' 
| `0_pastVegetation_v0-1`       | tile files from biome Amazon for rasterize (.EE)                  | 30m          | 'ee.Img'  | 'projects/mapbiomas-workspace/SEEG/2023/QCN/0_pastVegetation_v0-1' 
| `0_pastVegetation_v0-2`       | tile files from biome Amazon for rasterize (.EE)                  | 250m         | 'ee.Img'  | 'projects/mapbiomas-workspace/SEEG/2023/QCN/0_pastVegetation_v0-2' 
| `1_Asset_v0-1`                | Official data QCN - BR                                            | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/1_Asset_v0-1' 
| `1_Asset_v0-2`                | Official data QCN - BR                                            | 250m & 30m   | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/1_Asset_v0-2' 
| `2_Asset_v0-1_rect`           | Official data ('QCN-BR') rectified by weighted average ´FITO´     | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/2_Asset_v0-1_rect' 
| `2_Asset_v0-2_rect`           | Official data ('QCN-BR') rectified by weighted average ´FITO´     | 250m & 30m   | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/2_Asset_v0-2_rect' 
| `3_Asset_v0-1_rect_AGB`       | .........                rectified AGB by weighted average ´FITO´ | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/3_Asset_v0-1_rect_AGB' 
| `3_Asset_v0-1_rect_BGB`       | .........                rectified BGB by weighted average ´FITO´ | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/3_Asset_v0-1_rect_BGB'
| `3_Asset_v0-1_rect_CDW`       | .........                rectified CDW by weighted average ´FITO´ | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/3_Asset_v0-1_rect_CDW'
| `3_Asset_v0-1_rect_LIT`       | .........                rectified LIT by weighted average ´FITO´ | 30m          | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/3_Asset_v0-1_rect_LIT'
| `4_Asset_v0-2_rect_AGB`       | .........                rectified AGB by weighted average ´FITO´ | 250 & 30m    | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/4_Asset_v0-2_rect_AGB' 
| `4_Asset_v0-2_rect_BGB`       | .........                rectified BGB by weighted average ´FITO´ | 250 & 30m    | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/4_Asset_v0-2_rect_BGB'
| `4_Asset_v0-2_rect_CDW`       | .........                rectified CDW by weighted average ´FITO´ | 250 & 30m    | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/4_Asset_v0-2_rect_CDW'
| `4_Asset_v0-2_rect_LIT`       | .........                rectified LIT by weighted average ´FITO´ | 250 & 30m    | 'ee.ImgC' | 'projects/mapbiomas-workspace/SEEG/2023/QCN/4_Asset_v0-2_rect_LIT'

```javascript
// *Expect biome AMZ
```

# - Notes: 
All biomes except the Amazon were rasterized to 30m [`0_2_Rasterize`](https://github.com/souza-eab/MCTI_QCN/blob/main/Scripts/Step_0/0_2_Rasterize.r). The Amazon Biome from data the EBA (250m). 

 In general, the v0-1 versions are in 30m, so v0-2 is a combination of 250m (AMZ) and 30m (all biomes).

In general, the rectified assets total is eg. `2_Asset_v0-1_rect`, and depending on the compartment the desired is added. or +ADD compartments eg. `3_Asset_v0-1_rect_AGB`. For more details, verify the top table (path).
