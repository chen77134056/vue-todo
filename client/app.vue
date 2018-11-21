<!--app.vue整个站模板页-->
<template>
    <div id="demo">
           <my-header></my-header>
           <my-todo></my-todo>
           <my-footer></my-footer>


    </div>
</template>

<script>
    import Header from './layout/header.vue'; //引入组件
    import Footer from './layout/footer.jsx'; //引入组件
    import Todo from './views/todo/todo.vue'; //引入组件

    export default {
        components:{
            'my-header' : Header,
            'my-todo' : Todo,
            'my-footer' : Footer,
        }
    }
</script>

<style scoped>
   #demo{background: #ccc}
</style>