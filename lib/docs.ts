// Single source of truth for the documentation site (hosted from the dextr-docs repo; see its CNAME).
export const DOCS_BASE_URL = "https://docs.connectpath.cx"

export function docsUrl(path = "/"): string {
  return `${DOCS_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

// Other off-site destinations. ConnectPath has no contact or legal pages of its own;
// those are handled by CloudHesive.
export const MARKETPLACE_URL =
  "https://aws.amazon.com/marketplace/pp/prodview-zdjgbrn7qdlg4?applicationId=AWSMPContessa&ref_=ucaf&sr=0-0"
export const LOGIN_URL = "https://go.connectpath.cx/"
export const CONTACT_URL = "https://www.cloudhesive.com/contact-us/"
export const PRIVACY_URL = "https://www.cloudhesive.com/privacy-policy/"
export const DEMO_URL = "https://www.cloudhesive.com/connectpath-powered-by-aws/#talk-to-an-expert"
