<template>
 <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" :class="activeClass('home')">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/user" class="nav-link" :class="activeClass('user')">User</router-link>
                </li>
                
            </ul>
</template>
<script>
export default {
  data(){
    return {

    };
  },
   methods: {
	  activeClass(...names) {
        for (let name of names) {
    		if (name === this.$route.name)
    			return 'active';
        }
    }    
  }
}
</script>

