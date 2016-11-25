<template>
    <div>
	    <home></home>
	    <h1 @click="getProducts">Home12123</h1>
	    <ul>
	     	<li v-for="p in productList" @click="showDetail(p)">
	     		{{ p.name }}
	     	</li>
	    </ul>
    </div>
</template>
<script>
	// import router from '../../router'
	import { mapGetters, mapActions } from 'vuex'
	import Home from './components/Home.vue'
	export default {
		components: { Home },
		computed: mapGetters({
			productList: 'productList'
		}),
		methods: {
			...mapActions([
			    'getProducts'
			]),
			showDetail:function(item){
				console.log( 'item', item.category_name );
			}
		},
		created (){
			this.$store.dispatch( 'getProducts' )
		},
		watch: {
		    '$route': 'getProducts'
		},
		beforeRouteEnter(to, from, next){
			next();
		}
	}
</script>




