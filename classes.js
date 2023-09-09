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
  #email;                             // Encapsulation
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }
  generateRandomUserId() {
    return  Math.random().toString(36).substring(2, 10);
  }
}

class CartItem extends Book{                                                // Inheritance
  constructor(genre, title, author, isbn, price, availability, quantity) {
    super(title, author, isbn, price, availability, quantity);              // Inheritance
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
    this.cartItems.pop(cartItem);
    console.log(`You removed the book "${cartItem.title}", author ${cartItem.author} from a shopping cart`);
  }
  totalPrice() {
    this.price = this.cartItems.reduce((acc, curr) => acc + curr.price, 0);
    console.log(`Your total price is ${this.price}`)
  }
  showcart() {
    console.log('books: ', this.cartItems);
 }
}

class Order {
  constructor(user, books, purchase) {
      this.user = user;
      this.books = books;
      this.purchase = purchase;
  }
  finalOrder() {
    console.log(`${this.user.name} wants to purchase books: `);
    Object.values(this.books.cartItems).forEach((value) => { console.log(value.title)});
    console.log(`The total price is ${this.purchase.price}`);
  }
}


const book1 = new CartItem('non-fiction', 'Never Enough', 'Jennifer Breheny Wallace', 0-321-54325-4, 29, true);
const book2 = new CartItem('fiction', 'Trust', 'Hernan Diaz', 0-456-54325-4, 32, true);
const book3 = new CartItem('non-fiction', 'The Snakehead','Patrick Radden Keefe', 0-768-54565-2, 30, true);
const book4 = new CartItem('non-fiction', 'The Psychology of Stupidity', 'Jean-Francois Marmion', 0-708-12567-2, 30, false);

const user1 = new User('Anna', 'ann@gmail.com');
const user2 = new User('Dmytro', 'dmytro@gmail.com');

const myCart = new Cart(user1);

const myOrder = new Order(user1, myCart, myCart);

myCart.addItem(book1);
myCart.addItem(book2);
myCart.addItem(book3);
myCart.addItem(book4);

book1.bookType();   // Polymorphism
book2.bookType();   // Polymorphism

console.log(user1.name);
console.log(user1.email);  // Encapsulation. "email" property is private, so output will be  'undefined'
console.log(user2.generateRandomUserId());  

myCart.removeItem(book3);

myCart.totalPrice();

myCart.cartItems;
myCart.price;

myOrder.finalOrder();

