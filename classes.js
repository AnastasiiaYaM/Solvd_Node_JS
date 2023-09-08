/*
Classes
## Homework Assignment: Building an Online Bookstore

### Task

Your task is to design and implement an object-oriented program in JavaScript to simulate the functioning of an online bookstore. This assignment will test your understanding of classes, encapsulation, inheritance, and polymorphism.

### Instructions

### Part 1: Class Design

1. **Book Class**: Create a class called `Book` to represent individual books. Each book should have properties like title, author, ISBN, price, and availability.
2. **User Class**: Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID.
3. **Cart Class**: Design a class called `Cart` to simulate a shopping cart. It should have methods to add books, remove books, and calculate the total price of the books in the cart.
4. **Order Class**: Create an `Order` class to represent a user's order. It should include information about the user, the books ordered, and the total price.

### Part 2: Implementation

1. **Create Objects**: Instantiate multiple `Book` objects, representing different books available in the bookstore. Also, create a few `User` objects.
2. **Add Books to Cart**: Simulate users adding books to their cart by creating instances of the `Cart` class and using its methods.
3. **Place Orders**: Implement the process of placing an order. Users should be able to create instances of the `Order` class, specifying the books they want to purchase.

### Part 3: Demonstration

1. **Create a Scenario**: Design a scenario where users browse books, add them to their carts, and place orders. Simulate interactions between users, carts, and orders.
2. **Interaction**: Demonstrate how objects of different classes interact with each other. For example, a user interacts with a cart, and a cart interacts with orders.
3. **Polymorphism**: Utilize polymorphism by treating different types of books (e.g., fiction, non-fiction) uniformly when users add them to the cart.

### Part 4: Documentation

1. **Documentation**: Provide clear and concise comments and documentation for your code. Explain the purpose of each class, method, and property. Describe the interaction between different objects and how encapsulation is maintained.

### Submission

Submit your JavaScript program along with detailed documentation and comments that explain your code. Ensure that your code is well-structured and adheres to best practices in object-oriented programming.

### Bonus (Optional)

- Implement additional features such as searching for books, applying discounts, handling payments, or integrating a database to store book and user information.
*/

class Book {
  constructor(title, author, isbn, price, availability, quantity) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
    this.quantity =  quantity;
  }
  bookType() {
    console.log("It doesn't matter");  
  }
}

class User {
  #name;                                 // Encapsulation
  #email;
  #userId;
  constructor(name, email, userId) {
    this.#name = name;
    this.#email = email;
    this.#userId = userId;
  }
}

class CartItem extends Book{      // Inheritance
  constructor(genre, title, author, isbn, price, availability, quantity) {
    super(title, author, isbn, price, availability, quantity);
    this.genre = genre;
    this.updateQuantity.bind(this)
  }
  bookType() {
    console.log(`A ${this.genre} book`);   // Polymorphism
  }
  updateQuantity(quantity) { 
      this.quantity += quantity;
  }
}

class Cart {
  constructor(user) {
    this.user = user;
    this.cartItems = [];
    this.price = 0;
    this.addItem.bind(this);
    this.removeItem.bind(this);
    this.showcart.bind(this);
    this.checkIfItemExists.bind(this);
    this.totalPrice.bind(this);
  }
  addItem(cartItem) {
    if (cartItem.availability) {
      const alreadyInCart = myCart.checkIfItemExists(cartItem.title);
        if (alreadyInCart) {
             return cartItem.updateQuantity(cartItem.quantity);
        } else {
        this.cartItems.push(cartItem);
        }
      console.log(`You added the book "${cartItem.title}", author ${cartItem.author} to a shopping cart.`);
         
    } else {
      console.log(`So sorry, but the book "${cartItem.title}", author ${cartItem.author} is not available now. We will order it for you!`);
    }
  }
  checkIfItemExists(title) {
    return  this.cartItems.filter(item=> item.title == title)[0] != undefined;
  }
  removeItem(cartItem) {
    this.cartItems = [...this.cartItems].filter(item=>item.cartItem != cartItem );
    console.log(`You removed the book "${cartItem.title}", author ${cartItem.author} from a shopping cart`);
  }
  totalPrice() {
    this.price = this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
    console.log(`Your total price is ${this.price}`)
  }
  showcart() {
    console.log('In the cart now: ', this.cartItems);
 }
}

class Order extends Cart{
  constructor(user, cartItems, price) {
    super(cartItems, price);
    this.user = user;
  }

  finalOrder() {
    
    console.log(`${this.user.name} wants to purchase ${super.cartItems}. The total price is ${super.price}`);  
  }
}

const book1 = new CartItem('non-fiction', 'Never Enough', 'Jennifer Breheny Wallace', 0-321-54325-4, 29, true);
const book2 = new CartItem('fiction', 'Trust', 'Hernan Diaz', 0-456-54325-4, 32, true);
const book3 = new CartItem('non-fiction', 'The Snakehead','Patrick Radden Keefe', 0-768-54565-2, 30, true);
const book4 = new CartItem('non-fiction', 'The Psychology of Stupidity', 'Jean-Francois Marmion', 0-708-12567-2, 30, false);

const user1 = new User('Anna', 'ann@gmail.com', 123);
const user2 = new User('Dmytro', 'dmytro@gmail.com', 124);

const myCart = new Cart(user1);

const myOrder = new Order(user1, myCart.cartItems, myCart.price);

myCart.addItem(book1);
myCart.addItem(book2);
myCart.addItem(book3);
myCart.addItem(book4);

book1.bookType();   // Polymorphism
book2.bookType();   // Polymorphism

myCart.removeItem(book1);
myCart.removeItem(book2);

myCart.totalPrice();

myCart.cartItems;
myCart.price;

myOrder.finalOrder();   // Encapsulation. All user's properties are private ('name' also), so output will be  'undefined'.

