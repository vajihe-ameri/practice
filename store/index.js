import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import camelCase from 'camelcase';

Vue.use(Vuex);

// خواندن تمام فایل های .js در پوشه modules
const modulesFiles = require.context('./modules', false, /\.js$/);

// دسترسی به تمام ماژول های vuex در پوشه modules
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = camelCase(modulePath.replace(/^\.\/(.*)\.\w+$/, '$1'));
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default () => {
  return new Vuex.Store({
    modules,
    getters,
  });
}
