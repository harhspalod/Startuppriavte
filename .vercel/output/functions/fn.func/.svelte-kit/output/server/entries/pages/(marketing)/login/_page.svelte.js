import { _ as head } from "../../../../chunks/index.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Log In</title>`;
  });
  $$payload.out += `<div><h1 class="text-xl font-bold">Get Started</h1> <a href="/contact_us"><button class="btn btn-primary mt-3 btn-wide">Contact us</button></a></div>`;
}
export {
  _page as default
};
