# --- Workflow ✨ Steps.R 

##   --- Step_0: 

Pre-processing official data, adding columns, rasterizing, and uploading GCP to Earth Engine;


#   --- Step_1: 
                **0_1** - Generate asset ´0_pastVegetation_v0-1` join all the tiles, rasterize and export asset biome Amazon ()[]. 
                
                **0_2** - Blending and standardizing assets per biome QCN and generating asset ´1_Asset_v0-1`;
                
                **0_3** - Rectify pixels with Column MB_C8, we can check 2 situations, where: 
                -- ´H0` - Mapbiomas and QCN agree that they are the same class maintain the stocks;
                -- ´H1` - Mapbiomas and QCN disagree that they are the same class and assume values of the weighted average of phyto.



#  --- Notes: 

*All biomes except the Amazon were rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was reprocessed from 250 to 30m. 

** All biomes except the Amazon have been rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was kept at 250 and the other biomes were kept at 30m. 
#### Note: In general, the v0-1 versions are in 30m, so v0-2 is a combination of 250m (AMZ) and 30m (all biomes). 


#### Note: In general, the rectified assets total is eg. 

´2_Asset_v0-1_rect` and depending on the compartment the desired is added. or +ADD compartments eg. ´3_Asset_v0-1_rect_AGB`.
