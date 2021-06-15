export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c89e09a022d5060512884a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-yo65n4p6",
                  apiId: "655634d4-1428-4188-b2dc-cd5b06ab829f",
                },
                {
                  buildHookId: "60c89e0a53caca01a4ab6876",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9twk4miy",
                  apiId: "3f8bfbad-708d-4070-83d3-f9e4ee52aec3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pk075/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9twk4miy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
