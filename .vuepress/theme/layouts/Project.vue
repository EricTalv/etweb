<template>
	<div class="container">
		<div class="row ">
			<div class="">
				<a href="/projectslist" type="button" class="customBackButton">Projects List</a>
				<a href="/" type="button" class="customBackButton">Home</a>
				<a href="/about" type="button" class="customBackButton">About</a>
				<a href="/contact" type="button" class="customBackButton ">Contact</a>       
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<h3 style="margin: 52px;">
					{{ $page.title }}
				</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<p style="margin: 52px;">
					<Content />
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

.customBackButton {
	margin: 5px;
	background-color: transparent;
	border:none;
	outline: none !important;
	font-size: 20px;
	color: black !important;
	text-decoration: none !important;
	transition: all .5s;

	border-left: 1px solid black;
	border-right: 1px solid black;
	padding-left: 15px;
	padding-right: 15px;
}


.customBackButton:hover {
	color: red !important;
}

</style>