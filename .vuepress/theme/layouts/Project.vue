<template>
	<article>
		<div>
			<a href="/projectslist" type="button" class="customBackButton">Projects List</a>
			<a href="/" type="button" class="customBackButton">Home</a>
			<a href="/about" type="button" class="customBackButton">About</a>
			<a href="/contact" type="button" class="customBackButton ">Contact</a>       
		</div>
			<h1 style="font-size: 3rem;">
				{{ $frontmatter.pagetitle }}
			</h1>
			<p>
				<a :href="$frontmatter.github">Github</a>
			</p>
		<section>
			<Content />
		</section>
	</article>
</template>

<style scoped>

@import '../../styles/modest.css';

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