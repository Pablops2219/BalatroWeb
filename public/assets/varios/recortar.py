from PIL import Image
import os

def cortar_imagen_en_cuadricula(ruta_imagen, filas, columnas, carpeta_salida):
    # Abrir la imagen
    imagen = Image.open(ruta_imagen)
    ancho, alto = imagen.size

    # Calcular el tamaño de cada celda
    celda_ancho = ancho // columnas
    celda_alto = alto // filas

    # Crear la carpeta de salida si no existe
    if not os.path.exists(carpeta_salida):
        os.makedirs(carpeta_salida)

    # Contador para los nombres de las imágenes
    contador = 1

    # Recortar y guardar cada celda
    for i in range(filas):
        for j in range(columnas):
            # Calcular las coordenadas de la celda
            izquierda = j * celda_ancho
            superior = i * celda_alto
            derecha = izquierda + celda_ancho
            inferior = superior + celda_alto

            # Recortar la celda
            celda = imagen.crop((izquierda, superior, derecha, inferior))

            # Guardar la celda como una imagen individual
            ruta_celda = os.path.join(carpeta_salida, f"tarot_{contador}.png")
            celda.save(ruta_celda)
            print(f"Guardada: {ruta_celda}")

            # Incrementar el contador
            contador += 1

    print("Proceso completado.")

# Ejemplo de uso
ruta_imagen = "222139.png"  # Cambia esto por la ruta de tu imagen
filas = 6  # Número de filas
columnas = 10  # Número de columnas
carpeta_salida = "output_tarot"  # Carpeta donde se guardarán las celdas

cortar_imagen_en_cuadricula(ruta_imagen, filas, columnas, carpeta_salida)
