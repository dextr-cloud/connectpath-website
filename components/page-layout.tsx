import { ReactNode } from "react"

interface PageLayoutProps {
  children: ReactNode
}

// PageLayout is now a simple wrapper since Header/Footer are in the root ClientLayout
export function PageLayout({ children }: PageLayoutProps) {
  return <>{children}</>
}

export default PageLayout
