--
Shopping Cart Resources
The following is a section of resources related to the shopping cart
--
List products added into your shopping-cart. (comment again in Markdown)
GET /shopping-cart
< 200
< Content-Type: application/json
{ "items": [
{ "url": "/shopping-cart/1", "product":"2ZY48XPZ", "quantity": 1, "name": "New socks", "price": 1.25 }
] }

Save new products in your shopping cart
POST /shopping-cart
> Content-Type: application/json
{ "product":"1AB23ORM", "quantity": 2 }
< 201
< Content-Type: application/json
{ "status": "created", "url": "/shopping-cart/2" }

