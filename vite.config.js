import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5174,
  },
  define:{
    'process.env':{
      VITE_IP_ADDRESS:'http://192.168.68.199:5000'
    }
  }
})
