<template>
	<div >
		<div >
			<div >
				<a href="/projectslist" type="button" class="customBackButton">Projects List</a>
				<a href="/" type="button" class="customBackButton">Home</a>
				<a href="/about" type="button" class="customBackButton">About</a>
				<a href="/contact" type="button" class="customBackButton ">Contact</a>       
			</div>
		</div>
		<div >
			<div >
				<h1 style="font-size: 3rem;">
					{{ $frontmatter.pagetitle }}
				</h1>
			</div>
		</div>
		<div >
			<div >
				<p>
					<Content />
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

@import '../../styles/modest.css';

</style>