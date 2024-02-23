# ListItem Model

This code defines an interface called `Item` and a class named `ListItem` that implements this interface. Let's break down the code step by step:

1. **Interface `Item`:**
   ```typescript
   export interface Item {
       id: string,
       item: string,
       checked: boolean
   }
   ```
   - This interface `Item` specifies a structure that any class implementing it must adhere to.
   - It has three properties:
     - `id`: a string representing the unique identifier of the item.
     - `item`: a string representing the name or description of the item.
     - `checked`: a boolean indicating whether the item is checked or not.

2. **Class `ListItem`:**
   ```typescript
   export default class ListItem implements Item {
       // ... constructor and private properties

       get id(): string {
           return this._id;
       }

       set id(id: string) {
           this._id = id;
       }

       get item(): string {
           return this._item;
       }

       set item(item: string) {
           this._item = item;
       }

       get checked(): boolean {
           return this._checked;
       }

       set checked(checked: boolean) {
           this._checked = checked;
       }
   }
   ```
   - This class `ListItem` implements the `Item` interface, which means it must have properties `id`, `item`, and `checked`.
   - It has a private constructor with default values for `_id`, `_item`, and `_checked` properties.
   - It provides getters and setters for each property. This is a common pattern in TypeScript to encapsulate private properties with controlled access.
   - The class can be used to create instances of items with unique identifiers, names, and a checked state.

Example of using `ListItem`:
```typescript
// Creating an instance of ListItem
const myItem = new ListItem();

// Setting properties
myItem.id = "123";
myItem.item = "Example Item";
myItem.checked = true;

// Getting properties
console.log(myItem.id);      // Output: 123
console.log(myItem.item);    // Output: Example Item
console.log(myItem.checked); // Output: true
```

---

### Important

In JavaScript, the usage of an underscore (_) before class properties or methods often indicates that these elements are intended to be considered internal or "private," rather than publicly accessible parts of the API. Since JavaScript does not inherently support privacy modifiers like private and protected fields in languages like C# or Java, developers rely on naming conventions to convey this intent. By prefacing a property or method with an underscore, developers signal to themselves and other developers that the element should generally not be altered or relied upon by external parties

# FullList Model


1. **Import Statement:**
   ```typescript
   import ListItem from "./ListItem"
   ```
   - This line imports the `ListItem` class from a file named "ListItem" in the same directory.

2. **Interface `List`:**
   ```typescript
   interface List {
       list: ListItem[],
       load(): void,
       save(): void,
       clearList(): void,
       addItem(itemObj: ListItem): void,
       removeItem(id: string): void,
   }
   ```
   - This block defines an interface named `List` that specifies the structure for a list, including properties and methods. It requires any implementing class to have a `list` property (an array of `ListItem` objects) and methods for loading, saving, clearing, adding, and removing items.

3. **Export Class `FullList` implementing `List`:**
   ```typescript
   export default class FullList implements List {
       // ...
   }
   ```
   - This line declares a class named `FullList` that implements the `List` interface. The class will have the required properties and methods specified in the interface.

4. **Static Instance Property:**
   ```typescript
   static instance: FullList = new FullList();
   ```
   - This line creates a static property named `instance` on the `FullList` class, initialized with a new instance of `FullList`. This follows the singleton pattern, ensuring there is only one instance of `FullList` in the application.

5. **Private Constructor:**
   ```typescript
   private constructor(private _list: ListItem[] = []) {}
   ```
   - This line defines a private constructor for the `FullList` class. It takes an optional parameter `_list` (defaulted to an empty array), indicating that instances of `FullList` should be created with an initial list of items.

6. **Getter and Setter for `list` Property:**
   ```typescript
   get list(): ListItem[] {
       return this._list;
   }

   set list(list: ListItem[]) {
       this._list = list;
   }
   ```
   - These lines define a getter and a setter for the `list` property. The getter allows external code to access the private `_list` property, and the setter allows external code to modify it. The use of getters and setters is a way to control access to the private property.

7. **`load()` Method:**
   ```typescript
   load(): void {
       // ...
   }
   ```
   - This method loads items from local storage, parses the stored data, and adds the items to the instance's list.

8. **`save()` Method:**
   ```typescript
   save(): void {
       // ...
   }
   ```
   - This method saves the current state of the list to local storage.

9. **`clearList()` Method:**
   ```typescript
   clearList(): void {
       // ...
   }
   ```
   - This method clears the list and then saves the empty list to local storage.

10. **`addItem()` Method:**
    ```typescript
    addItem(itemObj: ListItem): void { 
        // ...
    }
    ```
    - This method adds a new item to the list and then saves the updated list to local storage.

11. **`removeItem()` Method:**
    ```typescript
    removeItem(id: string): void {
        // ...
    }
    ```
    - This method removes an item from the list based on its ID and then saves the updated list to local storage.

Each method's implementation includes logic related to the manipulation of the list and storage operations. The class is designed to manage a list of `ListItem` objects with methods for common operations like adding, removing, saving, and loading items.

## Side note:

**Underscores in Property Names `(_list)`:**

The use of underscores (e.g., `_list`) in property names is a common convention in TypeScript and other languages to denote that a property is intended to be private or internal to the class. It's a way of indicating that external code should not directly access or modify these properties. Instead, external code should use getter and setter methods.

---

