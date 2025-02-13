import "clsx";
import { T as pop, Q as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  let tmp = data;
  tmp.supabase;
  tmp.session;
  children?.($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
