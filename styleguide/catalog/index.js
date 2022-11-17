import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto-mono/400.css";

import "@fontsource/space-grotesk/400.css";

// see: https://docs.catalog.style/configuration/pages
const pages = [
  {
    path: "/",
    title: "Intro",
    content: pageLoader(() => import("./docs/WELCOME.md"))
  },
  {
    path: "/mockup",
    title: "Mockup",
    content: pageLoader(() => import("./docs/mockup.md"))
  },
  {
    path: "/design",
    title: "Design",
    pages: [
      {
        path: "/colors",
        title: "Farben",
        content: pageLoader(() => import("./docs/design/colors.md"))
      },
      {
        path: "/typography",
        title: "Typografie",
        content: pageLoader(() => import("./docs/design/typography.md"))
      },
      {
        path: "/logo",
        title: "Logo",
        content: pageLoader(() => import("./docs/design/logo.md"))
      }
    ]
  },
];

// see: https://docs.catalog.style/configuration/theming
const configuration = {
  logoSrc: "logo.svg",
  theme: {
    // Fonts
    fontFamily: "'Roboto', sans-serif",
    fontHeading: "'Roboto', sans-serif",
    fontMono: "'Roboto Mono', monospace",

    // Colors
    background: "#F9F9F9",
    textColor: "#333333",
    codeColor: "#00263E",
    linkColor: "#069748",
    // NavigationBar
    lightColor: "#D6D6D6",
    // PageHeader
    pageHeadingBackground: "#069748",
    pageHeadingTextColor: "#FFFFFF",
    // SideBar
    sidebarColorText: "#003B5C",
    sidebarColorTextActive: "#069748"
  }
};

ReactDOM.render(
  <Catalog title="Wil SG" pages={pages} {...configuration} />,
  document.getElementById("catalog")
);
