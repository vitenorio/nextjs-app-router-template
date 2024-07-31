/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },
  experimental: {
    swcPlugins: [
      [
        "@formatjs/swc-plugin-experimental",
        {
          ast: true,
        },
      ],
    ],
  },
};

export default nextConfig;
