import * as React from "react"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Page3 = ({ pageContext }) => {
  const { t } = useTranslation()
  const { locale } = useLocalization()

  return (
    <Layout pageContext={pageContext}>
      <Seo title={t("thirdPage")} />
      <h1>{t("thirdPage")}</h1>
      <p>{t("thirdNote")}</p>
      <p>Locale: {locale}</p>
      <p>
        <LocalizedLink to="/page-2/">{t("secondPageLink")}</LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/">{t("indexPageLink")}</LocalizedLink>
      </p>
    </Layout>
  )
}

export default Page3
