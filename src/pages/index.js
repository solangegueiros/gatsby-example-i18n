import * as React from "react"
import { graphql } from "gatsby"
import { LocalizedLink, useLocalization } from "gatsby-theme-i18n"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data, pageContext }) => {
  const { locale } = useLocalization()

  return (
    <Layout pageContext={pageContext}>
      <Seo title="Home" />
      <h1>Hello World {locale}</h1>      
      <p>This is in the Index page for {locale} language.</p>

      <br/>
      <h2>Client page</h2>
      <p>
        <LocalizedLink to="/app/gatsby">Link to client-only page</LocalizedLink>
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
