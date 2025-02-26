#!/bin/bash

# Obtener la fecha actual en formato YYYY-MM-DD
fecha=$(date +"%Y-%m-%d")

# Ruta de la carpeta de descargas y la carpeta de destino
carpeta_descarga="Descarga"
carpeta_destino="orden-$fecha"

# Crear la carpeta de destino si no existe
mkdir -p "$carpeta_destino"

# Declarar un arreglo asociativo para organizar las extensiones
# Las claves son las carpetas, y los valores son las extensiones correspondientes
declare -A categorias=(
    [ejecutables]="deb exe sh bin"
    [imagenes]="jpg jpeg png gif bmp svg"
    [documentos]="pdf doc docx xls xlsx ppt pptx txt"
    [musica]="mp3 wav flac m4a"
    [videos]="mp4 mkv avi mov"
    [archivos]="zip rar tar.gz 7z"
    [otros]="*"
)

# Función para mover archivos a sus carpetas
organizar_archivos() {
    local extension=$1
    local carpeta=$2

    # Crear la carpeta si no existe
    mkdir -p "$carpeta_destino/$carpeta"

    # Mover archivos con la extensión a la carpeta
    mv "$carpeta_descarga"/*."$extension" "$carpeta_destino/$carpeta" 2>/dev/null
}

# Recorrer las categorías y organizar archivos
for carpeta in "${!categorias[@]}"; do
    extensiones=${categorias[$carpeta]}
    
    for extension in $extensiones; do
        if [ "$extension" == "*" ]; then
            # Mover archivos restantes (sin extensión conocida) a "otros"
            mkdir -p "$carpeta_destino/$carpeta"
            mv "$carpeta_descarga"/* "$carpeta_destino/$carpeta" 2>/dev/null
        else
            organizar_archivos "$extension" "$carpeta"
        fi
    done

done

# Confirmación final
echo "Archivos organizados en la carpeta $carpeta_destino."