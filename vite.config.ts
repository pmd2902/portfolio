import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.pdf')) {
            res.setHeader(
              'Content-Disposition',
              'inline; filename="Phan_Minh_Duc_CV_Frontend_Developer.pdf"'
            )
            res.setHeader('Content-Type', 'application/pdf')
          }
          next()
        })
      },
    },
  ],
})
