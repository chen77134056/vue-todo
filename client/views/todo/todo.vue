<template>

    <div id="inner">
           <div id="top-img"></div>
           <div>
               <input type="text" :placeholder="xx" v-model="input_value" v-on:keyup.enter="fn">
               <ul style="padding: 20px 0;">
                   <li v-for="(value,index) in arry" :key>
                       <input type="checkbox" :id="'c'+index" >
                        <span>{{value}}</span>
                       <button  @click="removebt(index,$event)">x</button>
                   </li>
               </ul>
           </div>
    </div>

</template>

<script>
    import Vue from 'vue';

    export default {
        name: "todo",
        data(){
            return{
                xx:'请输入内容',
                input_value:'',
                arry:[]
            }
        },
        methods:{
            fn:function(){
                Vue.set(this.arry, this.arry.length, this.input_value)
            },
            removebt:function (index,e) {


                if(document.getElementById('c'+index).checked){
                    this.arry.splice(index,1);
                }else{
                    alert('请打上勾')
                }


            },

        }
    }
</script>

<style scoped>

</style>