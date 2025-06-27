// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    // Allow external access (Replit requirement)
    port: 4173,
    // Used for development server
    strictPort: true,
    allowedHosts: [
      "f95f1770-9ca7-46e3-9f0c-7a4bae927a21-00-tvcq79d42rol.picard.replit.dev"
    ]
  },
  preview: {
    host: "0.0.0.0",
    // ✅ Allow Replit preview to bind to container IP
    port: 4175
    // ✅ Use a different port since 4173 is busy
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIFZpdGUgY29uZmlndXJhdGlvbiBmb3IgUmVhY3QgYXBwIG9uIFJlcGxpdFxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnMC4wLjAuMCcsIC8vIEFsbG93IGV4dGVybmFsIGFjY2VzcyAoUmVwbGl0IHJlcXVpcmVtZW50KVxuICAgIHBvcnQ6IDQxNzMsICAgICAgLy8gVXNlZCBmb3IgZGV2ZWxvcG1lbnQgc2VydmVyXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBhbGxvd2VkSG9zdHM6IFtcbiAgICAgICdmOTVmMTc3MC05Y2E3LTQ2ZTMtOWYwYy03YTRiYWU5MjdhMjEtMDAtdHZjcTc5ZDQycm9sLnBpY2FyZC5yZXBsaXQuZGV2J1xuICAgIF1cbiAgfSxcbiAgcHJldmlldzoge1xuICAgIGhvc3Q6ICcwLjAuMC4wJywgLy8gXHUyNzA1IEFsbG93IFJlcGxpdCBwcmV2aWV3IHRvIGJpbmQgdG8gY29udGFpbmVyIElQXG4gICAgcG9ydDogNDE3NSAgICAgICAvLyBcdTI3MDUgVXNlIGEgZGlmZmVyZW50IHBvcnQgc2luY2UgNDE3MyBpcyBidXN5XG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixjQUFjO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
