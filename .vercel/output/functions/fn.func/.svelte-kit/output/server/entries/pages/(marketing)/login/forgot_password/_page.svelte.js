import { _ as head, T as pop, Q as push } from "../../../../../chunks/index.js";
import { A as Auth, s as sharedAppearance, o as oauthProviders } from "../../../../../chunks/login_config.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Forgot Password</title>`;
  });
  $$payload.out += `<h1 class="text-2xl font-bold mb-6">Forgot Password</h1> `;
  Auth($$payload, {
    supabaseClient: data.supabase,
    view: "forgotten_password",
    redirectTo: `${data.url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`,
    providers: oauthProviders,
    socialLayout: "horizontal",
    showLinks: false,
    appearance: sharedAppearance,
    additionalData: void 0
  });
  $$payload.out += `<!----> <div class="text-l text-slate-800 mt-4">Remember your password? <a class="underline" href="/login/sign_in">Sign in</a>.</div>`;
  pop();
}
export {
  _page as default
};
