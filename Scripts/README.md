# --- Workflow ✨ Steps.R 

## --- Step_0: 

### Pre-processing official data, adding columns, rasterizing and uploading GCP to Earth Engine;



# --- Step_1: 

## Step 0.1: 
Generate asset ´1_Asset_v0-1` join all the tiles, rasterize and export asset. Note: All biomes except the Amazon were rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was reprocessed from 250 to 30m. 



## Step 0.2: 

´´´
Generate asset ´2_Asset_v0-2` add all the tiles, rasterize and export asset. 
*All biomes except the Amazon have been rasterized to 30m. The Amazon Biome comes from the EBA (250m). To harmonize the asset, it was kept at 250 and the other biomes were kept at 30m. 

´´´
#### Note: In general, the v0-1 versions are in 30m, so v0-2 is a combination of 250m (AMZ) and 30m (all biomes). 



## Step 0.3: 

´´´
The rectification was made as follows:

3.1 Rectify pixels
With Column MB_C8, we can check 2 situations:
Where, 

´H0` - Mapbiomas and QCN agree that they are the same class maintains the stocks;

´H1` - Mapbiomas and QCN disagree that they are the same class assume values of the weighted average of phyto.

3.2 Harmonize and export;
After step 3.1, check the version condition and carry out the exports;

´´´

#### Note: In general, the rectified assets total is eg. 
´2_Asset_v0-1_rect` and depending on the compartment the desired is added. 

or +ADD compartments eg.
´3_Asset_v0-1_rect_AGB`.
