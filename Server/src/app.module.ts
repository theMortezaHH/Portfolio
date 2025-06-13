import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ThrottlerModule } from "@nestjs/throttler"

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ".env",
			isGlobal: true,
		}),
		ThrottlerModule.forRoot({
			throttlers: [
				{
					limit: Number(process.env.THROTTLE_LIMIT),
					ttl: Number(process.env.THROTTLE_TTL),
				},
			],
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
