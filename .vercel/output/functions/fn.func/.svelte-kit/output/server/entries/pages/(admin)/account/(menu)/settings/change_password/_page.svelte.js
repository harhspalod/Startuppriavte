import { a0 as getContext, _ as head, X as attr, T as pop, Q as push, $ as stringify } from "../../../../../../../chunks/index.js";
import "../../../../../../../chunks/client.js";
import { S as Settings_module } from "../../../../../../../chunks/settings_module.js";
import { e as escape_html } from "../../../../../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let adminSection = getContext("adminSection");
  adminSection.set("settings");
  let { data } = $$props;
  let { user, supabase } = data;
  let hasPassword = user?.amr?.find((x) => x.method === "password") ? true : false;
  let usingOAuth = user?.amr?.find((x) => x.method === "oauth") ? true : false;
  let sendBtnDisabled = false;
  let sendBtnText = "Send Set Password Email";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Change Password</title>`;
  });
  $$payload.out += `<h1 class="text-2xl font-bold mb-6">Change Password</h1> `;
  if (hasPassword) {
    $$payload.out += "<!--[-->";
    Settings_module($$payload, {
      title: "Change Password",
      editable: true,
      saveButtonTitle: "Change Password",
      successTitle: "Password Changed",
      successBody: "On next sign in, use your new password.",
      formTarget: "/account/api?/updatePassword",
      fields: [
        {
          id: "newPassword1",
          label: "New Password",
          initialValue: "",
          inputType: "password"
        },
        {
          id: "newPassword2",
          label: "Confirm New Password",
          initialValue: "",
          inputType: "password"
        },
        {
          id: "currentPassword",
          label: "Current Password",
          initialValue: "",
          inputType: "password"
        }
      ]
    });
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="card p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row shadow max-w-md"><div class="flex flex-col gap-y-4">`;
    if (usingOAuth) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="font-bold">Set Password By Email</div> <div>You use oAuth to sign in ("Sign in with Github" or similar). You can
          continue to access your account using only oAuth if you like!</div>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="font-bold">Change Password By Email</div>`;
    }
    $$payload.out += `<!--]--> <div>The button below will send you an email at ${escape_html(user?.email)} which will allow
        you to set your password.</div> <button${attr("class", `btn btn-outline btn-wide ${stringify("")}`)}${attr("disabled", sendBtnDisabled, true)}>${escape_html(sendBtnText)}</button> <div${attr("class", `success alert alert-success ${stringify("hidden")}`)}>Sent email! Please check your inbox and use the link to set your
        password.</div></div></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  _page as default
};
