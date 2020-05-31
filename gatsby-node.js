const path = require('path');

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions;

    const templates = {
        blog: path.resolve('./src/templates/blog.js'),
        podcast: path.resolve('./src/templates/podcast.js')
    }

    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        let slug = edge.node.slug;

        let slugkey = slug.split('/')[1];

        let template = templates[slugkey] || templates['journal'];

        createPage({
            component: template,
            path: `/${slugkey}/${slug}`,
            context: {
                slug: slug
            }
        })
    }) 
}