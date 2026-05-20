import json

PRODUCTS_FILE = "products.json"
CART_FILE = "cart.json"

def load_products():
    f = open(PRODUCTS_FILE, "r")
    products = json.load(f)
    f.close()
    return products

def load_cart():
    f = open(CART_FILE, "r")
    cart = json.load(f)
    f.close()
    return cart

def save_cart(cart):
    f = open(CART_FILE, "w")
    json.dump(cart, f)
    f.close()

def menu():
    print("===== menu ====")
    print("1. add to cart")
    print("2. wth in cart")
    print("3. checkout")
    print("0. exit")
 
def take_product(products, cart):
    print("our product")
    for product in products:
        print(f"name: {product['name']}, id: {product['id']}, price: {product['price']}")

    product_id = int(input("enter product id: "))
    quantity = int(input("enter quantity: "))

    selected_product = None
    found = False

    for product in products:
        if product["id"] == product_id:
            selected_product = product
            found = True
            break

    if not found:
        print("product not found")
        return

    if quantity <= 0:
        print("invalid quantity")
        return

    if quantity > selected_product["stock"]:
        print("quantity bigger than stock")
        return

    
    in_cart = False
    for item in cart:
        if item["product_id"] == product_id:
            item["quantity"] += quantity
            in_cart = True
            break

    if not in_cart:
        cart.append({
            "product_id": selected_product["id"],
            "name": selected_product["name"],
            "price": selected_product["price"],
            "quantity": quantity
        })

    print("product added to cart")

def wth_in_cart(cart):
    print("this your cart")
    if len(cart)==0:
        print("cart is empty")
        return
    
    total=0
    for item in cart:
        line_total= item["price"] * item["quantity"]
        total += line_total
        print(f"name: {item['name']}, quantity: {item['quantity']}, price: {item['price']}, line total: {line_total}")

    print("you should pay:", total, "dh")

def checkout(cart):
    if len(cart)==0 :
        print("cart is empty")
        return
    total=0
    for item in cart:
        total += item["price"] * item["quantity"]
    print("total to pay:", total, "dh")
    cart.clear()
    save_cart(cart)
    print("see you  checkout done  cart is now empty")
products = load_products()
cart = load_cart()

while True:
    menu()
    choice = input("choose an option : ")

    if choice == "1":
        take_product(products, cart)
        save_cart(cart)
    elif choice == "2":
        wth_in_cart(cart)
    elif choice == "3":
        checkout(cart)
    elif choice == "0":
        break
    else:
        print("unknown command")