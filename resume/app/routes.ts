import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("resume", "routes/resume-react.tsx"),  route("contact", "routes/contact-form.tsx")] satisfies RouteConfig;
