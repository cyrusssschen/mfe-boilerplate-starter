
    export type RemoteKeys = 'provider/button';
    type PackageType<T> = T extends 'provider/button' ? typeof import('provider/button') :any;