from flask import Flask, request, jsonify
from menu_item import MenuItem
from menu_manager import MenuManager

app = Flask(__name__)

# Route pour récupérer tous les articles du menu
@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuManager.all_items()
    if items:
        return jsonify([{"id": item[0], "name": item[1], "price": item[2]} for item in items]), 200
    else:
        return jsonify({"message": "Aucun article trouvé"}), 404

# Route pour récupérer un article par son nom
@app.route('/menu/<string:name>', methods=['GET'])
def get_item_by_name(name):
    item = MenuManager.get_by_name(name)
    if item:
        return jsonify({"id": item[0], "name": item[1], "price": item[2]}), 200
    else:
        return jsonify({"message": "Article non trouvé"}), 404

# Route pour ajouter un nouvel article
@app.route('/menu', methods=['POST'])
def add_item():
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')

    if not name or not price:
        return jsonify({"message": "Nom et prix sont requis"}), 400

    item = MenuItem(name, price)
    item.save()
    return jsonify({"message": f"Article '{name}' ajouté avec succès"}), 201

# Route pour mettre à jour un article
@app.route('/menu/<string:name>', methods=['PUT'])
def update_item(name):
    data = request.get_json()
    new_name = data.get('new_name')
    new_price = data.get('new_price')

    if not new_name or not new_price:
        return jsonify({"message": "Nouveau nom et nouveau prix sont requis"}), 400

    item = MenuItem(name, None)
    item.update(new_name, new_price)
    return jsonify({"message": f"Article '{name}' mis à jour avec succès"}), 200

# Route pour supprimer un article
@app.route('/menu/<string:name>', methods=['DELETE'])
def delete_item(name):
    item = MenuItem(name, None)
    item.delete()
    return jsonify({"message": f"Article '{name}' supprimé avec succès"}), 200

# Point d'entrée de l'application
if __name__ == '__main__':
    app.run(debug=True)