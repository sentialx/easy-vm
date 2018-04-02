import VMRequireOptions from './vm-require-options';

export default interface VMOptions {
  require?: VMRequireOptions | false;
  console?: boolean;
  sandbox?: object;
}; // eslint-disable-line
