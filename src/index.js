/**
 * Welcome to Cloudflare Workers! Version improved.
 * 
 * - cd to /Workers
 * - Run "npm install -g wrangler" to install the wrangler CLI
 * - Run "wrangler login" to log in to your cloudflare account
 * - Run "wrangler deploy" to publish your new API or "wrangler dev" to preview locally
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {

		return new Response('Hello test!');

	},
};
