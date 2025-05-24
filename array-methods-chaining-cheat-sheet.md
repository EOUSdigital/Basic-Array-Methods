
# 🚀 Array Methods Chaining Cheat Sheet

Master essential JavaScript array methods and how to chain them effectively.

---

## 🔹 1. .filter()
- **Purpose:** Select items based on a condition.
- **Returns:** A **new array** (may be shorter or empty).

```js
const adults = people.filter(person => person.age >= 18);
```

---

## 🔹 2. .map()
- **Purpose:** Transform each item in an array.
- **Returns:** A **new array** (same length).

```js
const names = people.map(person => person.name.toUpperCase());
```

---

## 🔹 3. .find()
- **Purpose:** Find the **first** item matching a condition.
- **Returns:** A **single item** (or `undefined` if not found).

```js
const admin = users.find(user => user.role === 'admin');
```

---

## 🔹 4. .some()
- **Purpose:** Check if **any** item matches a condition.
- **Returns:** `true` or `false`.

```js
const hasPremium = products.some(p => p.price > 1000);
```

---

## 🔹 5. .every()
- **Purpose:** Check if **all** items match a condition.
- **Returns:** `true` or `false`.

```js
const allActive = users.every(user => user.active);
```

---

## ⭐ Common Chaining Patterns

### Filter + Map
```js
const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);
```

### Filter + Find
```js
const vipUser = users
  .filter(user => user.active)
  .find(user => user.role === 'vip');
```

### Defensive Check
```js
if (result.length === 0) {
  console.log('No items found!');
}
```

---

## ⚡ Best Practices
- Always **filter first**, then **map**.
- Use `.find()` **before** `.map()`, since `.find()` returns a single item.
- Use `.some()` for quick condition checks without needing a full `.filter()`.

---

## 🚨 Common Mistakes
- ❌ Trying to `.map()` after `.find()`.
- ❌ Forgetting that `.filter()` always returns an array, even if empty.
- ❌ Not handling `undefined` when using `.find()`.

---

## 🎯 Real-World Example

```js
const premiumProducts = products
  .filter(p => p.inStock && p.price > 500)
  .map(p => `${p.name} - $${p.price}`);

const firstLuxury = products.find(p => p.price > 2000);

if (firstLuxury) {
  console.log(`Featured: ${firstLuxury.name}`);
}
```

---

Happy Coding! 🚀
