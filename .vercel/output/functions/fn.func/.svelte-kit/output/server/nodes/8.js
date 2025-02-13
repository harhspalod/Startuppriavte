import * as server from '../entries/pages/(admin)/account/(menu)/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/account/(menu)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/account/(menu)/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.SwMicBJT.js","_app/immutable/chunks/DKJ7Mg52.js","_app/immutable/chunks/AQxm7BEp.js","_app/immutable/chunks/BM8wr1QT.js","_app/immutable/chunks/BBvt7ttV.js","_app/immutable/chunks/CtRTYRN4.js"];
export const stylesheets = [];
export const fonts = [];
