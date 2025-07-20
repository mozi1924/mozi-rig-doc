import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mozi's Rig Documents",
  description: "Wiki & Documents for Mozi's Rig",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 1452 1452"><path d="M724.5 44.5a129855.6 129855.6 0 0 1 590 340c1.33 227.333 1.33 454.667 0 682a254760.687 254760.687 0 0 1-589 340 254760.687 254760.687 0 0 1-589-340 58155.539 58155.539 0 0 1 0-682 8945857.265 8945857.265 0 0 0 588-340Zm0 134c157.966 90.945 315.97 181.945 474 273 1.33 182.667 1.33 365.333 0 548a39453.1 39453.1 0 0 0-205.5 119 5038.73 5038.73 0 0 1 0-142c29.61-22.226 42.61-51.892 39-89-8.5-44.504-35.004-71.004-79.5-79.5-41.633-3.923-73.133 11.91-94.5 47.5-10.347 20.262-13.347 41.596-9 64 5.394 23.131 17.56 41.797 36.5 56 1.167 68 1.333 136 .5 204-35.667 20.67-71.333 41.33-107 62-.667-146.67-.667-293.333 0-440 34.805-27.081 46.472-62.081 35-105-15.684-40.273-45.184-61.607-88.5-64-49.574 3.079-80.074 28.745-91.5 77-5.265 38.233 7.402 68.9 38 92 .667 146.667.667 293.33 0 440-37-21.33-74-42.67-111-64-.667-68-.667-136 0-204 34.037-26.438 46.037-60.772 36-103-9.672-30.339-29.506-50.839-59.5-61.5-39.704-11.118-73.537-1.618-101.5 28.5-26.858 37.072-28.191 75.072-4 114 6.667 8 14 15.333 22 22 .833 47.34.667 94.67-.5 142a29689.678 29689.678 0 0 0-201-116 37547.887 37547.887 0 0 1 0-548 81361.738 81361.738 0 0 0 472-273Z" opacity=".99"/></svg>',
        },
        link: "https://mozi1924.com/mozi-rig",
      },
      { icon: "discord", link: "https://discord.gg/DHkCMFkpfr" },
      { icon: "github", link: "https://github.com/mozi1924/mozi-rig-doc" },
    ],
  },

  locales: {
    zh: {
      label: "中文",
      lang: "zh",
      themeConfig: {
        sidebar: [
          {
            text: "核心指南",
            items: [
              { text: "首页介绍", link: "/zh/" },
              { text: "快速入门", link: "/zh/core/quick-start" },
              { text: "基本控制器介绍", link: "/zh/core/basic-operations" },
            ],
          },
          {
            text: "IK/FK系统",
            items: [{ text: "四肢IK/FK切换", link: "/zh/ik-fk/limbs" }],
          },
          {
            text: "高级面部控制",
            items: [
              { text: "眼部控制", link: "/zh/face/eyes" },
              { text: "眉毛控制", link: "/zh/face/eyebrows" },
              { text: "嘴巴控制", link: "/zh/face/mouth" },
              { text: "眼皮闭合", link: "/zh/face/eyelids" },
              { text: "修改面部布局", link: "/zh/face/layout" },
            ],
          },
          {
            text: "属性面板详解",
            items: [
              { text: "属性介绍", link: "/zh/properties" },
              { text: "面部捕捉映射", link: "/zh/properties/face-capture" },
            ],
          },
          {
            text: "附录",
            items: [{ text: "难疑解答", link: "/zh/appendix/discuss" }],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        sidebar: [
          {
            text: "Core Guides",
            items: [
              { text: "Home Introduction", link: "/en/" },
              { text: "Quick Start", link: "/en/core/quick-start" },
              {
                text: "Basic Controller Overview",
                link: "/en/core/basic-operations",
              },
            ],
          },
          {
            text: "IK/FK System",
            items: [{ text: "Limb IK/FK Switching", link: "/en/ik-fk/limbs" }],
          },
          {
            text: "Advanced Facial Controls",
            items: [
              { text: "Eye Controls", link: "/en/face/eyes" },
              { text: "Eyebrow Controls", link: "/en/face/eyebrows" },
              { text: "Mouth Controls", link: "/en/face/mouth" },
              { text: "Eyelid Blinking", link: "/en/face/eyelids" },
              { text: "Modifying Facial Layout", link: "/en/face/layout" },
            ],
          },
          {
            text: "Properties Panel Reference",
            items: [
              { text: "Properties Overview", link: "/en/properties" },
              {
                text: "Face Capture Mapping",
                link: "/en/properties/face-capture",
              },
            ],
          },
          {
            text: "Appendix",
            items: [{ text: "Troubleshooting", link: "/en/appendix/discuss" }],
          },
        ],
      },
    },
  },
});
