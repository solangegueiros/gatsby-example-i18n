import * as React from "react"
import { LocalizedLink } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = ({ pageContext }) => {
  const { t } = useTranslation("404")
  return (
    <Layout pageContext={pageContext}>
      <Seo title="404 - Page Not Found" />
      <h1>404</h1>
      <p>{t("notFound")}</p>
      <p>
        <LocalizedLink to="/">{t("index")}</LocalizedLink>
      </p>
    </Layout>
  )
}

export default NotFound
