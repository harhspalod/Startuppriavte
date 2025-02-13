import { _ as head, T as pop, Q as push } from "../../../../../chunks/index.js";
import { A as Auth, o as oauthProviders, s as sharedAppearance } from "../../../../../chunks/login_config.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Sign up</title>`;
  });
  $$payload.out += `<h1 class="text-2xl font-bold mb-6">Sign Up</h1> `;
  Auth($$payload, {
    supabaseClient: data.supabase,
    view: "sign_up",
    redirectTo: `${data.url}/auth/callback`,
    showLinks: false,
    providers: oauthProviders,
    socialLayout: "horizontal",
    appearance: sharedAppearance,
    additionalData: void 0
  });
  $$payload.out += `<!----> <div class="text-l text-slate-800 mt-4 mb-2">Have an account? <a class="underline" href="/login/sign_in">Sign in</a>.</div>`;
  pop();
}
export {
  _page as default
};
