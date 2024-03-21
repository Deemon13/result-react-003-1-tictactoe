import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'result-react-003-1-tictactoe',
	plugins: [react()],
	server: {
		open: true,
	},
});
