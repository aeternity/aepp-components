<template>
	<div :class="thisclass">
		<header>
			<div class="action left">
				<button v-show='showBurger' @click='toggleopen'>
					<svg class='burger' width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
						<path fill="#4A4A4A" fill-rule="evenodd" d="M0 0h20v2H0zM0 6h20v2H0zM0 12h20v2H0z"/>
					</svg>
				</button>
				<slot name='left-action'></slot>
			</div>

			<div class="title center">
				<slot name='title'></slot>
			</div>

			<div class="action right">
				<slot name='right-action'></slot>
			</div>
		</header>
		<slot>
		</slot>
		<nav>
			<div class="inner">
				<div class="center">
					<ae-identity-avatar v-if='identity' :address='identity.address'></ae-identity-avatar>
					<div class="name">
						{{identity.name}}
					</div>
				</div>
				<ae-menu-entry v-for='entry in entries' :link='entry.link' :label='entry.label'></ae-menu-entry>
			</div>
		</nav>
	</div>
</template>

<script src='./aeMenu.js'/>
<style src='./aeMenu.css'/>
