import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation} from "react-i18next"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data, pageContext }) => {
  const { t } = useTranslation()
  const { locale } = useLocalization()

  return (
    <Layout pageContext={pageContext}>
      <Seo title={t("home")} />
      <h1>{t("helloWorld")} {locale}</h1>      
      <p>{t("indexNote")}</p>
      <br/>
      <h2>{t("clientPage")}</h2>
      <p>
        <LocalizedLink to="/app/gatsby">{t("clientPageLink")}</LocalizedLink>
      </p>
      <h2>Blog</h2>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
