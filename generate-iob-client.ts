import { env } from 'bun';
import { resolve } from 'path';
import { generateApi } from 'swagger-typescript-api';

const url = env.IOBROKER_SWAGGER_URL;

if (!url) {
	throw new Error('IOBROKER_SWAGGER_URL is not set');
}

await generateApi({
	patch: true,
	modular: true,
	url,
	output: resolve('./src/lib/server/iob/client', import.meta.dir)
});
