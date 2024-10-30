import { FederationRuntimePlugin } from '@module-federation/runtime/types';
import ErrorBoundary from '../components/ErrorBoundary';

export default function offLineRemotePlugin(): FederationRuntimePlugin {
  const getErrorMessage = (id: string, error: any) =>
    `remote ${id} is offline due to error: ${error}`;

  const getModule = (pg: any, from: string) => {
    if (from === 'build') {
      return () => ({
        __esModule: true,
        default: pg,
      });
    } else {
      return {
        default: pg,
      };
    }
  };

  return {
    name: 'offline-remote-plugin',
    errorLoadRemote(args) {
      const { id, error, from } = args;
      const pg = () => {
        // @ts-ignore
        return ErrorBoundary(getErrorMessage(id, error));
      };

      return getModule(pg, from);
    },
  };
}
