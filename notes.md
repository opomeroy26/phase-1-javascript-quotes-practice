##Deliverables 
[] - fetch data from URL
   - append to DOM as li with structured HTML

[] - Submitting form creates a new quote and adds to list (w/o having to refresh page). e.preventDefault()
form.reset()

[] - Delete button, addEventListener for click, should delete respective quote 

[] - clicking like button will create like for the quote 


##Data
```JavaScript
 "quotes": [
    {
      "id": 1,
      "quote": "Expect nothing. Live frugally on surprise.",
      "author": "Alice Walker"
    },
 ```


##InnerHTML
```html
    <li class='quote-card'>
      <blockquote class="blockquote">
        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous</footer>
        <br>
        <button class='btn-success'>Likes: <span>0</span></button>
        <button class='btn-danger'>Delete</button>
      </blockquote>
    </li>
  ```

##URL
GET Quotes: http://localhost:3000/quotes
GET Likes: http://localhost:3000/likes
GET embedded: http://localhost:3000/quotes?_embed=likes    // do not use when creating or deleting a quote

