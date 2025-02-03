import os
import json

def generate_cards_json(directory: str, output_file: str):
    try:
        # Filtrar archivos de imagen válidos
        image_files = [f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.webp'))]

        # Guardar en formato JSON
        with open(output_file, 'w', encoding='utf-8') as json_file:
            json.dump(image_files, json_file, indent=4, ensure_ascii=False)

        print(f"Archivo {output_file} generado con éxito.")

    except Exception as e:
        print(f"Error al generar el archivo JSON: {e}")

# Ejemplo de uso
generate_cards_json('./output_cards', './cards.json')
input("----")