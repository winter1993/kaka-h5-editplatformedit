import {reactive, nextTick} from 'vue';
function getElementTop(element:any){
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
  
    while (current !== null){
      actualTop += current.offsetTop;
      current = current.offsetParent;
    }
  
    return actualTop;
  }

  export const useEditor = () => {
    const state:any = reactive({
        toolStyle: {},
        activeStyle: {},
        hoverStyle: {},
        isBottom: false,
        isTop: false,
        current: 0,
        containerHeight: 667,
        dragableComponents: []
      });
      const restStyle = (height:any, top:any, type:any) => {
        state[type] = {
          height,
          top: `${top}px`,
        };
        nextTick(() => {
          if(type === 'activeStyle')
          {
            const toolND:any = document.getElementById('se-view-tools');
            const toolHeight = parseInt(getComputedStyle(toolND).height, 10);
  
            state.toolStyle = {
              top: `${top + 10 + toolHeight > state.containerHeight ? top - toolHeight + parseInt(height, 10) : top + 10}px`,
            };
          }
        });
      }

      //只需要我们对页面和编辑器设置相同主域，便可以进行跨域操作，获取子 iframe 的元素：
const eventInit = (selectCb:any) => {
    //获取子template iframe 的 dom
    const ele:any = document.getElementById('frame')
    console.log('eventInit:',ele.contentWindow.document)
    const componentsPND = ele.contentWindow.document.getElementById('slider-view');
    console.log('componentsPND:',componentsPND)
    // 为template页面组件绑定 click 事件
    componentsPND.addEventListener('click',(e:any)=>{
        let node = e.target;
        // 遍历元素，找到以 'coco-render-id-_component_'  作为 id 的组件元素，计算高度和位置
        while(node.tagName !== 'HTML') {
        let currentId = node?.getAttribute('id') || '';
        if (currentId.indexOf('coco-render-id-_component_') >= 0) {
          const top = getElementTop(node);
          //getComputedStyle获取元素样式
          const { height } = getComputedStyle(node,null);
          restStyle(height, top, 'activeStyle');
          console.log('childNodes:',Array.from(componentsPND.childNodes))
          const pids = Array.from(componentsPND.childNodes).map((nd:any) => nd.id&&nd.getAttribute('id'))
          pids.forEach((id, index) => {
            if (id === currentId) {
              state.isTop = index === 0;
              state.isBottom = index === pids.length - 1;
              state.current = index;
              selectCb(index);
            }
          });
        }
        node = node.parentNode;
      }
    })
    // 为页面组件绑定 mouseover 事件
    componentsPND.addEventListener('mouseover', (e:any) => {
        let node = e.target;
        while(node.tagName !== 'HTML') {
          let currentId = node?.getAttribute('id') || '';
          if (currentId.indexOf('coco-render-id-_component_') >= 0) {
            try {
              const top = getElementTop(node);
              const { height } = getComputedStyle(node,null);
              restStyle(height, top, 'hoverStyle');
              const pids = Array.from(componentsPND.childNodes).map((nd:any) => nd.getAttribute('id'))
              pids.forEach((id, index) => {
                if (id === currentId) {
                  state.isTop = index === 0;
                  state.isBottom = index === pids.length - 1;
                  state.current = index;
                }
              })
            } catch (e) {
              // ignore
            }
  
          }
          node = node.parentNode;
        }
      });
}
const getIndex = (y:any) => {
  const ele:any = document.getElementById('frame')
    console.log('eventInit:',ele.contentWindow.document)
    const componentsPND = ele.contentWindow.document.getElementById('slider-view');
  let total = 40;
  let index = 0;
  
  Array.from(componentsPND.childNodes).some((nd:any, i) => {
    try {
      total = total + parseInt(getComputedStyle(nd).height, 10);
      if (total > y) {
        index = i;
        return true;
      }
    } catch (e) {
      //
    }

    index = i;
    return false;
  });
  return index;
}
const init = (index:any) => {
  console.log('init============>')
  const ele:any = document.getElementById('frame')
    console.log('eventInit:',ele.contentWindow.document)
    const componentsPND = ele.contentWindow.document.getElementById('slider-view');
  if (!componentsPND) return;
  const container = ele.contentWindow.document.getElementsByTagName('html')[0]
  const containerHeight = Math.ceil(parseFloat(getComputedStyle(container).height) + componentsPND.offsetTop);
  state.containerHeight = containerHeight > 667 ? containerHeight : 667;
  if (index === -1) return;
  const node = componentsPND.childNodes[index];
  console.log('node:',index,componentsPND.childNodes)
  if(!node) return
  if (node?.nodeName === "#text"  ) return
  let currentId = node?.getAttribute('id') || '';
  const top = getElementTop(node);
  const { height } = getComputedStyle(node);
  restStyle(height, top, 'activeStyle');
  const pids = Array.from(componentsPND.childNodes).map((nd:any) =>{ 
    if (nd.nodeName === "#text"  ) return 
    return nd.getAttribute('id')
  })
  pids.forEach((id, index) => {
    if (id === currentId) {
      state.isTop = index === 0;
      state.isBottom = index === pids.length - 1;
      state.current = index;
    }
  })
}
  // 需要设置fixed布局的组件样式
  const setFixedStyle = (index:any) => {
    const ele:any = document.getElementById('frame')
    console.log('eventInit:',ele.contentWindow.document)
    const componentsPND = ele.contentWindow.document.getElementById('slider-view');
    state.dragableComponents = [];
    Array.from(componentsPND?.childNodes || []).forEach((nd:any) => {
      if(!nd) return
      if(nd?.nodeName === "#text" ) return
      if (nd?.getAttribute('data-layout') === 'fixed') {
        try {
          const el = nd.childNodes[0];
          const {left, top, width, height} = getComputedStyle(el);
          state.dragableComponents.push({
            x: parseInt(left),
            y: parseInt(top),
            width: parseInt(width, 10),
            height: parseInt(height, 10),
            index
          });
        } catch (e) {
          //
        }

      }
    });
  }
return {
    init,
    eventInit,
    getIndex,
    editorState: state,
    setFixedStyle
  }
}