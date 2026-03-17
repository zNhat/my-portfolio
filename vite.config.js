import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // THÊM DÒNG NÀY: Thay my-portfolio bằng tên repo của bạn
})