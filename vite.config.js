import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
//node.js自带的路径模块
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  //设置src别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), WindiCSS()],
});
