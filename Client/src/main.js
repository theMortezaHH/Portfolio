import { createApp } from "vue"
import App from "./App.vue"
import router from "@/routes/routes.js"
import { createPinia } from "pinia"
import piniaPersist from "pinia-plugin-persistedstate"
import { createI18n } from "vue-i18n"
import "@/style.css"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)
app.use(pinia)

const messages = Object.fromEntries(
	Object.entries(import.meta.glob("../locales/*.yaml", { eager: true })).map(([key, value]) => {
		return [key.slice(11, -5), value.default]
	})
)
const i18n = createI18n({
	globalInjection: true,
	legacy: false,
	locale: "fa",
	messages
})

app.use(router)
app.use(i18n)
app.mount("#app")

