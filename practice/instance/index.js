
import Vue from 'vue';


Vue.component("com",{
    template:'<div> <input type="text" v-model="baba">  <p>{{baba}}</p> <button>点我</button></div>',
    data(){
        return{
            str:'xx'
        }
    },
    props:['baba']
});


new Vue({
    el:'#root',
    template:'<div> <com :baba="baba"></com>  <div>baba:<input type="text" v-model="baba"></div> </div>',
    data:{
        baba:'baba11'
    }
});





