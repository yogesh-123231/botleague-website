import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Helper to copy generated assets and sponsor logos on server launch
const assetsToCopy = [
  // Original page assets
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/544be135-423f-4f2c-bdc5-5524c07b91bb/hero_arena_battle_1781616614450.png',
    dest: './public/hero-bg.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/robo_race_1781618153051.png',
    dest: './public/images/robo-race.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/line_follower_1781618199065.png',
    dest: './public/images/line-follower.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/rc_racing_1781618217398.png',
    dest: './public/images/rc-racing.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/fpv_drone_1781618237928.png',
    dest: './public/images/fpv-drone.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/robo_hockey_1781618255075.png',
    dest: './public/images/robo-hockey.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/142082fc-7286-4bf5-ace6-c681ed528b11/robo_war_1781618272973.png',
    dest: './public/images/robo-war.png'
  },
  // Sponsor Logo Assets
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781621004814.jpg',
    dest: './src/assets/sponsors/nit-delhi.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781620378558.png',
    dest: './src/assets/sponsors/robo-company.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781620378585.png',
    dest: './src/assets/sponsors/indian-bit.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781620378579.png',
    dest: './src/assets/sponsors/nit-silchar.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781620378514.png',
    dest: './src/assets/sponsors/iit-bombay.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9a43e00-28f5-4d06-a735-03144647d860/media__1781620378498.png',
    dest: './src/assets/sponsors/general-robotics.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/be4d68fd-adf8-4c8f-860e-056a46049101/media__1781687566350.png',
    dest: './src/assets/logo.png'
  },
  {
    src: 'C:/Users/hp/.gemini/antigravity-ide/brain/be4d68fd-adf8-4c8f-860e-056a46049101/media__1781687560742.png',
    dest: './src/assets/schematic.png'
  }
];

// Clean sponsors directory of temporary files before copying
const sponsorsDir = './src/assets/sponsors';
try {
  if (fs.existsSync(sponsorsDir)) {
    const existingFiles = fs.readdirSync(sponsorsDir);
    existingFiles.forEach((file) => {
      fs.unlinkSync(path.join(sponsorsDir, file));
    });
  }
} catch (e) {
  console.error('Failed to clean sponsors directory:', e);
}

// Copy assets
assetsToCopy.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      const dir = dest.substring(0, dest.lastIndexOf('/'));
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.copyFileSync(src, dest);
      console.log(`>>> Automatically copied generated asset to ${dest}`);
    } else {
      console.warn(`Source asset does not exist: ${src}`);
    }
  } catch (err) {
    console.error(`Failed to copy asset to ${dest}:`, err);
  }
});

// Helper to recursively copy directories
function copyDirSync(srcDir: string, destDir: string) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      // Skip text files
      if (entry.name.endsWith('.txt')) continue;
      fs.copyFileSync(srcPath, destPath);
      console.log(`>>> Automatically copied ${srcPath} to ${destPath}`);
    }
  }
}

try {
  copyDirSync('./src/assets', './public/assets');
} catch (err) {
  console.error('Failed to copy src/assets to public/assets:', err);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
