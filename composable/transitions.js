import { onBeforeRouteLeave } from 'vue-router'
import {
  enterPageWithBasicTransition,
  leavePageWithBasicTransition,
} from '@/utils/transitions.js'

export function useBasicPageTransitionEnter() {
setTimeout(() => {
  onMounted(() => {
    enterPageWithBasicTransition()
  })
}, 10000);
}

export function useBasicPageTransitionLeave() {
  onBeforeRouteLeave((_to, _from, next) => {
    leavePageWithBasicTransition(next)
  })
}
//-------------------------------------------------------------

export const onTransitionBefore = (root, callback) => {
  hook('transition-before-enter', root, callback);
}

export const onTransitionCompleted = (root, callback) => {
  hook('transition-completed', root, callback);
}

const getTransitionComponent = () => {
  let instance = getCurrentInstance().parent;
  do {
      if (!instance) {
          return null;
      }
      if ("mode" in instance.props) {
          return instance;
      }
      instance = instance.parent;
  } while(true);
}

const hook = (hookName, root, callback) => {
  const instance = getTransitionComponent();
  const transitionMounted = instance.isMounted;
  onMounted(() => {
      if (!transitionMounted) {
          callback();
      } else {
          root.value.addEventListener(hookName, (e) => {
              callback();
          })
      }
  })
}