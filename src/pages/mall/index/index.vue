<template>
  <div class="reservation">
    <div class="choose_detect_items" id="detectItems" >
	    <crowd></crowd>
    </div>
  </div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	import Crowd from './components/Crowd.vue'
	import './index.less'

	export default {
		components: { Crowd },
		computed: mapGetters({
			
		}),
		methods: {
			
		},
		created (){
			
		}
	}
</script>




