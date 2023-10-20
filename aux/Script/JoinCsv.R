# Lib
library(dplyr)
library(readr)

# Lista de arquivos CSV na pasta
csv_files <- list.files(pattern = ".csv")

# Lista para armazenar os DataFrames
data_frames <- list()

# Loop para ler e processar cada arquivo
for (csv_file in csv_files) {
  # Ler o arquivo CSV
  data <- read_csv(csv_file)
  
  # Extrair o número da classe do nome do arquivo
  classe <- sub(".*_(\\d+)\\.csv", "\\1", csv_file)
  classe <- as.numeric(classe)
  
  # Extrair o bioma do nome do arquivo
  bioma <- sub(".*_(.*?)_\\d+\\.csv", "\\1", csv_file)
  
  # Adicionar as colunas Classe e Bioma ao DataFrame
  data <- data %>%
    mutate(Classe = classe, Bioma = bioma)
  
  # Adicionar o DataFrame processado à lista
  data_frames[[csv_file]] <- data
}

# Combinar todos os DataFrames em um único DataFrame
merged_data <- bind_rows(data_frames)
df<- as.data.frame(merged_data)
colnames(df)

newNames <- c("system:index", "area_ha", "c_qcn_rectify", ".geo",        
              "Classe_MB_C8", "Bioma")
names(df) <- newNames

# Selecionar apenas algumas colunas
df_write <- df[, c("Classe_MB_C8", "Bioma", "c_qcn_rectify", "area_ha")]


# Salvar o DataFrame combinado em um novo arquivo CSV
write_csv(df_write, "df_area_qcn.csv")

#Eg. summarise
df_amz <- df %>% 
  filter(Bioma == 'amz') %>% # Biome Name
  group_by(Classe) %>%
  summarise(mean_carbon = mean(carbono_qcn, na.rm = TRUE),
            sum_areaHA = sum(area_km, na.rm = TRUE))
