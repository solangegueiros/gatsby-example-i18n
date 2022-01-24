import * as React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogTemplate = ({ data, pageContext }) => {
  const { t } = useTranslation("blog")

  return (
    <Layout pageContext={pageContext}>
      <h2>{t("content")}</h2>
      <div>
        {data.mdx ? (
          <>
            <Seo title={data.mdx.frontmatter.title} />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </>
        ) : (
          <div>{t("notTranslated")}</div>
        )}
      </div>

      <h2>{t("context")}</h2>
      <p>pageContext.originalPath: {pageContext.originalPath}</p>
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`
