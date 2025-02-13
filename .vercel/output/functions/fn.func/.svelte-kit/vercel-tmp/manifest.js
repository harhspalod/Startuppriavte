export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/12","images/cm_logo.svg","images/example-home.png","images/rss.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B3DV3c4E.js",app:"_app/immutable/entry/app.DMckupsU.js",imports:["_app/immutable/entry/start.B3DV3c4E.js","_app/immutable/chunks/DEvjWbWR.js","_app/immutable/chunks/AQxm7BEp.js","_app/immutable/chunks/DsGMGXIE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DUkWVJk8.js","_app/immutable/entry/app.DMckupsU.js","_app/immutable/chunks/86e8shJ1.js","_app/immutable/chunks/AQxm7BEp.js","_app/immutable/chunks/C_FN1Gfx.js","_app/immutable/chunks/B5Im49L4.js","_app/immutable/chunks/BBvt7ttV.js","_app/immutable/chunks/DKJ7Mg52.js","_app/immutable/chunks/CcEstl9Z.js","_app/immutable/chunks/kBZY_V6L.js","_app/immutable/chunks/CDa51LHh.js","_app/immutable/chunks/DOAtbWT_.js","_app/immutable/chunks/DsGMGXIE.js","_app/immutable/chunks/DUkWVJk8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js'))
		],
		routes: [
			{
				id: "/(admin)/account/(menu)",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/account/api",
				pattern: /^\/account\/api\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing",
				pattern: /^\/account\/billing\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing/manage",
				pattern: /^\/account\/billing\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/account/create_profile",
				pattern: /^\/account\/create_profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(admin)/account/select_plan",
				pattern: /^\/account\/select_plan\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings",
				pattern: /^\/account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email_subscription",
				pattern: /^\/account\/settings\/change_email_subscription\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email",
				pattern: /^\/account\/settings\/change_email\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_password",
				pattern: /^\/account\/settings\/change_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/delete_account",
				pattern: /^\/account\/settings\/delete_account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/edit_profile",
				pattern: /^\/account\/settings\/edit_profile\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/reset_password",
				pattern: /^\/account\/settings\/reset_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(admin)/account/sign_out",
				pattern: /^\/account\/sign_out\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(admin)/account/subscribe/[slug]",
				pattern: /^\/account\/subscribe\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(marketing)/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/auth/callback/_server.js'))
			},
			{
				id: "/(marketing)/blog/rss.xml",
				pattern: /^\/blog\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/blog/rss.xml/_server.ts.js'))
			},
			{
				id: "/(marketing)/contact_us",
				pattern: /^\/contact_us\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(marketing)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/current_password_error",
				pattern: /^\/login\/current_password_error\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/forgot_password",
				pattern: /^\/login\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_in",
				pattern: /^\/login\/sign_in\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_up",
				pattern: /^\/login\/sign_up\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(marketing)/search/api.json",
				pattern: /^\/search\/api\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/search/api.json/_server.ts.js'))
			}
		],
		prerendered_routes: new Set(["/","/blog","/blog/awesome_post","/blog/example_blog_post","/blog/how_we_built_our_41kb_saas_website","/pricing","/search","/sitemap.xml"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
