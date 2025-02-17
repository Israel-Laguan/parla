import esbuild from 'esbuild'

/**
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 */

const prodLikeEnvs = ['prod', 'production', 'staging', 'ci'];
const validEnvs = ['dev', 'development', 'test', ...prodLikeEnvs];
// Get environment from process.env.NODE_ENV or via --env= flag
let env = 'development'
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i].startsWith('--env=')) {
    const argEnv = process.argv[i].split('=')[1];
    if (validEnvs.includes(argEnv)) env = argEnv;
  }
}

if (process.env.NODE_ENV !== undefined) env = process.env.NODE_ENV;
const isProd = prodLikeEnvs.includes(env);

buildAll()

async function buildAll() {
  return Promise.all([
    build('script', {
      entryPoints: ['src/script.js'],
      platform: 'browser',
      target: ['es6']
    }),
    build('esm', {
      entryPoints: ['src/index.js'],
      platform: 'neutral'
    }),
    build('cjs', {
      entryPoints: ['src/index.js'],
      platform: 'node',
      target: ['node22']
    }),
  ])
}


/**
 * Builds the project using esbuild with the specified options.
 *
 * @param {string} [name='esm'] - The name of the output file.
 * @param {BuildOptions} [options={}] - Additional options to pass to esbuild.
 */
async function build(name = 'esm', options = {}) {
  const outfile = `./dist/${name}.js`
  console.log(`Building ${name} in ${env} mode...`)

  // Base options: if in production/staging, disable sourcemaps and enable minification.
  const baseOptions = {
    outfile,
    bundle: true,
    minify: isProd,
    sourcemap: !isProd,
    ...options
  }

  if (process.argv.includes('--watch')) {
    const ctx = await esbuild.context({
      ...baseOptions,
      // In watch mode, force non-minified output for easier debugging.
      minify: false
    })
    await ctx.watch()
  } else {
    return esbuild.build(baseOptions)
  }
}
