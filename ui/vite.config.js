/**
 * Copyright (c) 2023 Cisco Systems, Inc. and its affiliates All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,

    proxy: {
      '/api/users': {
        target: 'http://customer-auth:8000',
        changeOrigin: true,
      },

      '/api/atm': {
        target: 'http://atm-locator:8001',
        changeOrigin: true,
      },

      '/api/account': {
        target: 'http://dashboard:8080',
        changeOrigin: true,
      },

      '/api/transaction': {
        target: 'http://dashboard:8080',
        changeOrigin: true,
      },

      '/api/loan': {
        target: 'http://dashboard:8080',
        changeOrigin: true,
      },
    },

    watch: {
      usePolling: true,
    },

    host: true,
  },
});
