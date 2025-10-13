import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  publicDir: 'public',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Main aliases
      '@': path.resolve(__dirname, './src'),
      // Keep only one entry per package
      'vaul': 'vaul',
      'sonner': 'sonner',
      'recharts': 'recharts',
      'react-resizable-panels': 'react-resizable-panels',
      'react-hook-form': 'react-hook-form',
      'react-day-picker': 'react-day-picker',
      'next-themes': 'next-themes',
      'lucide-react': 'lucide-react',
      'input-otp': 'input-otp',
      'embla-carousel-react': 'embla-carousel-react',
      'cmdk': 'cmdk',
      'class-variance-authority': 'class-variance-authority',
      // Radix UI components
      ...Object.fromEntries(
        [
          'tooltip', 'toggle', 'toggle-group', 'tabs', 'switch', 'slot', 'slider',
          'separator', 'select', 'scroll-area', 'radio-group', 'progress', 'popover',
          'navigation-menu', 'menubar', 'label', 'hover-card', 'dropdown-menu',
          'dialog', 'context-menu', 'collapsible', 'checkbox', 'avatar', 'aspect-ratio',
          'alert-dialog', 'accordion'
        ].map(name => [`@radix-ui/react-${name}`, `@radix-ui/react-${name}`])
      ),
      // Image assets
      'figma:asset/f898f55183b72144cfe15c17f2685710a541ea20.png': path.resolve(__dirname, './src/assets/f898f55183b72144cfe15c17f2685710a541ea20.png'),
      'figma:asset/e2f1c1e2ca16483c814e6390e8cb07b34079ea1d.png': path.resolve(__dirname, './src/assets/e2f1c1e2ca16483c814e6390e8cb07b34079ea1d.png')
    }
  }
});