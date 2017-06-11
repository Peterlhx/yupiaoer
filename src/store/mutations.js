import {setStore, getStore} from '@/utils/utils'

export default {
  saveViewIndex (state, viewIndex) {
    state.viewIndex = viewIndex;
    setStore('viewIndex', state.viewIndex);
  },
  initViewIndex (state) {
    let viewIndex = getStore('viewIndex');
    if(viewIndex) {
      state.viewIndex = viewIndex;
    }
  },
  saveScrollStatus (state, isScroll) {
    state.isScroll = isScroll;
    setStore('isScroll', state.isScroll);
  }
}