import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    entries: ['src/index'],
    outDir: 'build',
    replace: {
        'import.meta.vitest': 'undefined',
    },
});
