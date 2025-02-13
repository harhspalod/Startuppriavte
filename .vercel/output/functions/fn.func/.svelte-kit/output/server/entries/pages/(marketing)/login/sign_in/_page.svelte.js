import { _ as head, V as store_get, W as unsubscribe_stores, T as pop, Q as push } from "../../../../../chunks/index.js";
import { A as Auth, o as oauthProviders, s as sharedAppearance } from "../../../../../chunks/login_config.js";
import "../../../../../chunks/client.js";
import { p as page } from "../../../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let { data } = $$props;
  let { supabase } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Sign in</title>`;
  });
  if (store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("verified") == "true") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div role="alert" class="alert alert-success mb-5"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Email verified! Please sign in.</span></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h1 class="text-2xl font-bold mb-6">Sign In</h1> `;
  Auth($$payload, {
    supabaseClient: data.supabase,
    view: "sign_in",
    redirectTo: `${data.url}/auth/callback`,
    providers: oauthProviders,
    socialLayout: "horizontal",
    showLinks: false,
    appearance: sharedAppearance,
    additionalData: void 0
  });
  $$payload.out += `<!----> <div class="text-l text-slate-800 mt-4"><a class="underline" href="/login/forgot_password">Forgot password?</a></div> <div class="text-l text-slate-800 mt-3">Don't have an account? <a class="underline" href="/login/sign_up">Sign up</a>.</div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
