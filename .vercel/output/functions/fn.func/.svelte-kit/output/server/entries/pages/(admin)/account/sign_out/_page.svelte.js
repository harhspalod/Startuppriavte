import { e as escape_html } from "../../../../../chunks/escaping.js";
import "clsx";
import { T as pop, Q as push } from "../../../../../chunks/index.js";
import "../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let { supabase } = data;
  let message = "Signing out....";
  $$payload.out += `<h1 class="text-2xl font-bold m-6 mx-auto my-auto">${escape_html(message)}</h1>`;
  pop();
}
export {
  _page as default
};
