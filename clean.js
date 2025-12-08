// 1. ESM 语法导入 fs 和 path（替换 require）
import fs from 'fs/promises'; // 用 fs/promises 更简洁（异步 API）
import path from 'path';
import { fileURLToPath } from 'url';

// 2. ESM 中获取 __dirname 的替代方案
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 要清理的目录（src目录）
const srcDir = path.resolve(__dirname, 'src');

// 递归遍历目录，删除 .vue.js 和 .vue.js.map 文件（异步版，更稳定）
async function deleteRedundantFiles(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    
    for (const file of files) {
      const filePath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        // 递归处理子目录
        await deleteRedundantFiles(filePath);
      } else if (file.name.endsWith('.vue.js') || file.name.endsWith('.vue.js.map') || file.name.endsWith('.js.map') || file.name.endsWith('router.js') || file.name.endsWith('main.js')) {
        // 删除冗余文件
        await fs.unlink(filePath);
        console.log(`已删除：${filePath}`);
      }
    }
  } catch (err) {
    console.error(`处理目录 ${dir} 时出错：`, err.message);
  }
}

// 执行清理
deleteRedundantFiles(srcDir).then(() => {
  console.log('✅ 冗余文件清理完成！');
});