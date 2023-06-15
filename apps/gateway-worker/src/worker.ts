export interface Env {
	NODE_APP_BASE_URL: string;
	NEXT_ON_PAGES_BASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const nextOnPagesResponse = await redirectRequest(request, env.NEXT_ON_PAGES_BASE_URL);
		if (nextOnPagesResponse.status !== 404) {
			console.log(`${new URL(request.url).pathname} - Request handled at the edge`);
			return nextOnPagesResponse;
		}

		console.log(`${new URL(request.url).pathname} - Request handled by node app`);
		return redirectRequest(request, env.NODE_APP_BASE_URL);
	},
};

async function redirectRequest(request: Request, targetBaseUrl: string): Promise<Response> {
	const url = new URL(request.url);
	const nextOnPagesUrl = new URL(`${targetBaseUrl}${url.pathname}`);

	return fetch(new Request(nextOnPagesUrl, request));
}