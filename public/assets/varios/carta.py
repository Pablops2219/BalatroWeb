from PIL import Image
import random
import os

# Cargar las imágenes
numcards = Image.open('numcards.png')
backgroundcards = Image.open('backgroundcards.png')
seals = Image.open('backgroundcards.png')  # Usar la misma imagen para fondos y sellos

# Crear la carpeta de salida si no existe
output_folder = "../output_cards"
os.makedirs(output_folder, exist_ok=True)

# Diccionarios para asignar nombres a coordenadas
nombres_fondos = {
    (1, 0): "default",
    (5, 0): "stone",
    (6, 0): "gold",
    (1, 1): "bonus",
    (2, 1): "mult",
    (3, 1): "wild",
    (4, 1): "lucky",
    (5, 1): "glass",
    (6, 1): "steel"
}

nombres_sellos = {
    (2, 0): "gold_s",
    (4, 4): "purple_s",
    (5, 4): "red_s",
    (6, 4): "blue_s"
}

# Mapear las cartas (columna y fila) a sus valores y palos
valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
palos = ["H", "D", "C", "S"]  # Corazones, Diamantes, Tréboles, Picas

# Si no hay sello
sin_sello = "no_s"

# Tamaño de cada carta y sello
card_width = numcards.width // 13
card_height = numcards.height // 4
seal_width = backgroundcards.width // 7  # 7 columnas en backgroundcards.png
seal_height = backgroundcards.height // 5  # 5 filas en backgroundcards.png

# Pedir al usuario cuántas cartas generar
num_cartas = int(input("¿Cuántas cartas quieres generar? "))

for i in range(num_cartas):
    # Seleccionar una carta, un fondo y un sello al azar
    carta_x = random.randint(0, 12)  # Columna de la carta (0-12)
    carta_y = random.randint(0, 3)   # Fila de la carta (0-3)
    fondo_x, fondo_y = random.choice(list(nombres_fondos.keys()))  # Fondo válido aleatorio
    sello_x, sello_y = random.choice(list(nombres_sellos.keys()))  # Sello válido aleatorio

    # Determinar si el fondo o el sello deben estar presentes
    if random.randint(0, 1) != 0:
        fondo_x, fondo_y = 1, 0  # Fondo por defecto si no se modifica

    if random.randint(0, 3) != 0:
        sello_x, sello_y = -1, 0  # Sello no presente si no se modifica

    # Recortar la carta
    carta = numcards.crop((carta_x * card_width, carta_y * card_height, (carta_x + 1) * card_width, (carta_y + 1) * card_height))

    # Recortar el fondo
    fondo = backgroundcards.crop((fondo_x * card_width, fondo_y * card_height, (fondo_x + 1) * card_width, (fondo_y + 1) * card_height))

    # Recortar el sello solo si está presente
    if sello_x >= 0:
        sello = seals.crop((sello_x * seal_width, sello_y * seal_height, (sello_x + 1) * seal_width, (sello_y + 1) * seal_height))
    else:
        sello = None

    # Crear una nueva imagen con transparencia para la combinación
    resultado = Image.new("RGBA", fondo.size)
    resultado.paste(fondo, (0, 0))  # Pegar el fondo primero
    resultado.paste(carta, (0, 0), carta)  # Pegar la carta (respetando la transparencia)

    # Pegar el sello si existe
    if sello:
        resultado.paste(sello, (0, 0), sello)

    # Generar el nombre del archivo basado en los componentes
    nombre_carta = f"{valores[carta_x]}{palos[carta_y]}"  # Ejemplo: "10H" (10 de Corazones)
    nombre_fondo = nombres_fondos.get((fondo_x, fondo_y), f"unknown_{fondo_x}_{fondo_y}")
    nombre_sello = nombres_sellos.get((sello_x, sello_y), sin_sello)

    # Crear el nombre del archivo final
    nombre_archivo = f"{nombre_carta}_{nombre_fondo}_{nombre_sello}.png"

    # Guardar la imagen en la carpeta de salida
    ruta_completa = os.path.join(output_folder, nombre_archivo)
    resultado.save(ruta_completa)

    print(f"Imagen {i + 1} guardada como: {ruta_completa}")

print(f"Se han generado {num_cartas} cartas en la carpeta '{output_folder}'.")
input("----")