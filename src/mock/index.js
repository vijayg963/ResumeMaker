export const rowwData = [
  {
    Name: "Name 1",
    Email: "Email",
    Id: "User Id",
    Delete: `Delete`,
    View: "View All CV",
  },
  {
    Name: "Name 2",
    Email: "Email",
    Id: "User Id",
    Delete: `Delete`,
    View: "View All CV",
  },
  {
    Name: "Name 3",
    Email: "Email",
    Id: "User Id",
    Delete: `Delete`,
    View: "View All CV",
  },
];

export const colData = [
  { field: "Name" },
  { field: "Email" },
  { field: "Id" },
  { field: "Delete" },
  { field: "View" },
];

export const initialState = {
  isLogo: true,
  name: "Diksha Sharma",
  post: "WordPress Developer",
  summary:
    "Having 2.5 years of experience in all aspects of WordPress website creation, including design, plug ins, and implementation. Skilled in creating engaging and interactive websites. Excel at team projects and leadership. Detail oriented and knowledgeable in various programming languages.",
  education: [
    { qualification: "XII", fromWhere: "D.A.V School", when: "2020" },
  ],
  projects: [
    {
      projectName: "E-commarce website",
      description:
        " create this project in WordPres This website is used for selling Coffee and Tea. At J. Hornig, we only roast the highest quality beans from the best growing areas in the world.",
      role: "FrontEnd Developer",
      techTools: "git, vercel",
      teamSize: "2",
      url: "xuz.vercel.com",
    },
  ],
  skills: "Html, Css, Bootstrap, javaScript, wordpress, mysql ",
  tools: "jira, github, clickup",
  langaugeSkills: "English, Hindi",
  contactUs: [
    {
      companyName: "Technogetic pvt. ltd.",
      email: "business@technogetic.com",
      mobilenumber: "+91 9779992829",
      location: "mohali, punjab, india",
    },
  ],
};

export const allField = [
  "name",
  "post",
  "summary",
  "skills",
  "tools",
  "langaugeSkills",
];

export const contactField = [
  "companyName",
  "email",
  "mobilenumber",
  "location",
];

export const eduField = ["qualification", "fromWhere", "when"];

export const projects = [
  "projectName",
  "role",
  "techTools",
  "teamSize",
  "url",
  "description",
];

export const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

