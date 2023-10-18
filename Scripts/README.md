# Workflow ✨ Steps.R 

## Step_0: 


Pre-processing official data, adding columns, rasterizing, and uploading GCP to Earth Engine;


#  Step_1: 

```javascript   
   **0_1** - Generate asset ´0_pastVegetation_v0-1` join all the tiles, rasterize and export asset biome Amazon ()[]. 
   **0_2** - Blending and standardizing assets per biome QCN and generating asset ´1_Asset_v0-1`;
   **0_3** - Rectify pixels with Column MB_C8, we can check 2 situations, where: 
   -- ´H0` - Mapbiomas and QCN agree that they are the same class maintain the stocks;
   -- ´H1` - Mapbiomas and QCN disagree that they are the same class and assume values of the weighted average of phyto.
```

#  Results: 


# 1.1 AGB [AGB.js](https://code.earthengine.google.com/f51fe42867d6ced16449d73a5980b816)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_AGB.jpg' height='auto' width='1380'/>
</div>

# 1.2 BGB [BGB.js](https://code.earthengine.google.com/324a81112fa6288265189661c19292ec)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_BGB.jpg' height='auto' width='1380'/>
</div>

# 1.3 CDW [CDW.js](https://code.earthengine.google.com/b4c6dfb49b31355d77957727a94634ad)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_CDW.jpg' height='auto' width='1380'/>
</div>

# 1.4 LIT [LIT.js](https://code.earthengine.google.com/fcf62c9a53ba1e88cbe80a67ab4f7307)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_LIT.jpg' height='auto' width='1380'/>
</div>

# 1.5 TOT [TOTAL.js](https://code.earthengine.google.com/932dcf5bc460e4f13a8ee6286309a50e)
<div align = 'center'>
<img src='https://github.com/souza-eab/MCTI_QCN/blob/dev/aux/figures/QCN_vs_QCN_retificado_v2_TOTAL.jpg' height='auto' width='1380'/>
</div>


# - Notes: 

*All biomes except the Amazon were rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was reprocessed from 250 to 30m. 

** All biomes except the Amazon have been rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was kept at 250 and the other biomes were kept at 30m. 
*** In general, the v0-1 versions are in 30m, so v0-2 is a combination of 250m (AMZ) and 30m (all biomes). 
**** In general, the rectified assets total is eg. ´2_Asset_v0-1_rect` and depending on the compartment the desired is added. or +ADD compartments eg. ´3_Asset_v0-1_rect_AGB`.
