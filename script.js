Vue.component('product', {

  props:{

  },

  template: `
  <div class="producto">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="detail in details"> {{detail}}</li>
    </ul>
    <button v-on:click="addToCart">Add to Cart</button>
    <p>Cart: {{cart}}</p>
    <button v-on:click="removeFromCart">Remove from Cart</button>

  </div>
  `,
  data(){
    return{
      brand: 'Superfly',
      product: 'Socks',
      details: ["1","2","3","4","5"],
      cart : 1,
    }
  },

  methods: {
     addToCart: function(){
       this.cart++;
     },
     removeFromCart: function(){
       this.cart--;
     }
   },
   computed: {
     title() {
       return this.brand + ' ' + this.product
     }
   }


 })


var app = new Vue({
  el: '#app'

  })
