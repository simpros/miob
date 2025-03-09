import { resolve } from 'node:path';
import { cwd, env } from 'node:process';
import { generateApi } from 'swagger-typescript-api';

const url = env.IOBROKER_SWAGGER_URL;

if (!url) {
	throw new Error('IOBROKER_SWAGGER_URL is not set');
}

await generateApi({
	patch: true,
	modular: true,
	url,
	output: resolve(cwd(), './src/lib/server/iob/client')
});
