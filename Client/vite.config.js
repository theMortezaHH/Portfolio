import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { URL, fileURLToPath } from "node:url"
import VueI18n from "@intlify/unplugin-vue-i18n/vite"
import path from "path"
import Components from "unplugin-vue-components/vite"
import { PrimeVueResolver } from "@primevue/auto-import-resolver"

export default defineConfig({
	server: {
		port: 3001,
		host: true,
		hmr: {
			host: "localhost",
		},
		proxy: {
			"/api": "http://localhost:3000",
		},
	},
	plugins: [
		vue(),
		VueI18n({
			// Components({
			// 	resolvers: [PrimeVueResolver()],
			// }),
			runtimeOnly: true,
			compositionOnly: true,
			fullInstall: true,
			include: [path.resolve(__dirname, "locales/**")],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})

