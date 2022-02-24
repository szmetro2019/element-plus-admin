import { createPinia } from 'pinia';
const pinia = createPinia();
import useMainStore from './modules/aaa/index';
export { useMainStore };
export default pinia;
