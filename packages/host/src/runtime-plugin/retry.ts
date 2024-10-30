import { RetryPlugin } from '@module-federation/retry-plugin';

const retryPlugin = () =>
  RetryPlugin({
    fetch: {
      url: 'http://localhost:3094/mf-manifest.json',
      fallback: () => 'http://localhost:3093/mf-manifest.json',
      retryTimes: 0,
    },
    script: {
      url: 'http://localhost:3099/static/js/async/__federation_expose_button.js',
      customCreateScript: (url: string, attrs: Record<string, string>) => {
        let script = document.createElement('script');
        script.src =
          'http://localhost:3099/static/js/async/__federation_expose_button.js';
        script.setAttribute('loader-hoos', 'isTrue');
        script.setAttribute('crossorigin', 'anonymous');
        return script;
      },
    },
  });

export default retryPlugin;
