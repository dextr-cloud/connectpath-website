import { redirect } from "next/navigation"

// Static export cannot use next.config redirects, so this page emits a redirect at build time.
export default function Page() {
  redirect("https://www.cloudhesive.com/privacy-policy/")
}
