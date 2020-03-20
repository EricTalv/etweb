<template>
	<div class="container-fluid">
		<div class="row text-center">
			<div class="mx-auto">
				<a href="/" type="button" class="customBackButton">Home</a>
				<a href="/about" type="button" class="customBackButton specialBtn">About</a>
				<a href="/contact" type="button" class="customBackButton">Contact</a>       
			</div>
		</div>

		
		<div class="row text-center m-5">
			<div class="col-sm-12 d-flex flex-column">
				<LogoVertical  />
				<a class="mt-2 gitHub" target="_blank" href="https://github.com/EricTalv">Github</a>
			</div>

		</div>

		<div class="row no-gutters">
			<div class="col-sm-12 d-flex flex-wrap justify-content-center">

				<div v-for="item in projectsList" class="li" >
					<div :style="{ 'background-image': `url(${item.frontmatter.image})`}">
						<a :href="item.path" class="li">
							<span>{{ item.title }}</span>						
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import LogoVertical from '../../components/LogoVertical.vue'
	export default {
		components: {
			LogoVertical
		},

		data: function () {
			return {

			}
		},


		computed: {
			projectsList() {				
				return this.$site.pages.filter(page => page.path.includes('projectslist/'));
			}	
		}
	}
</script>

<style scoped>

.gitHub {
	color: gray;
}

.customBackButton {
	margin: 5px;
	background-color: transparent;
	border:none;
	outline: none !important;
	font-size: 20px;
	color: black !important;
	text-decoration: none !important;
	transition: all .5s;
}

.specialBtn {
	border-left: 1px solid black;
	border-right: 1px solid black;
	padding-left: 15px;
	padding-right: 15px;

}

.customBackButton:hover {
	color: red !important;
}

div.li, .li div {
	position: relative;
	float: left;
	width: 350px;
	max-width: 100%;
	min-height: 200px;
	margin: 0.3rem 0.6rem;
	margin-left: 0;
	padding: 0;
	background-color: #f0f0f0;
	background-size: cover;
	background-position: center;
}



a.li  {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	color: #fafafa;
	text-decoration: none;
}

.li span {
	position: absolute;
	margin: 10px;
	max-width: 92%;
	font-weight: 100;
	font-size: 1.6rem;
	background-color: #000;
	padding: 0.2rem 0.4rem;
}

.removeLinkDecore {
	text-decoration: none !important;
	outline: none !important;


}

.customTitle{
	background-color: black;
	color: white;
	width: 100% !important;
	padding: .5rem;
}
</style>