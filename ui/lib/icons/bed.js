
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M137.99862562 574.3335624h841.50309236c8.4773645 0 15.83272485 3.11667812 21.94141396 9.22536723s9.22536724 13.5887166 9.22536722 21.94141397v218.16746839H886.00137438V699.00068719H137.99862562v124.6671248H13.33150084V231.49896922c0-8.4773645 3.11667812-15.83272485 9.22536722-21.94141397 6.23335624-6.23335624 13.46404948-9.22536724 21.94141396-9.22536724h62.33356241c8.4773645 0 15.83272485 3.11667812 21.94141394 9.22536724 6.23335624 6.23335624 9.22536724 13.5887166 9.22536725 21.94141397v342.83459318z m243.97356321-67.69424875c24.31008934-24.31008934 36.52746757-53.73153079 36.52746757-88.26432436s-12.0927111-63.70490077-36.52746757-88.26432437c-24.43475647-24.43475647-53.73153079-36.52746757-88.26432435-36.52746754s-63.70490077 12.0927111-88.26432435 36.52746754c-24.43475647 24.43475647-36.52746757 53.73153079-36.52746756 88.26432437s12.0927111 63.70490077 36.52746756 88.26432436c24.31008934 24.31008934 53.73153079 36.52746757 88.26432435 36.52746755s63.95423502-12.0927111 88.26432435-36.52746755zM1010.66849916 543.1667812v-31.1667812c0-51.61218967-18.20140024-95.74435184-54.8535349-132.14715228-36.52746757-36.52746757-80.53496262-54.85353491-132.14715227-54.85353491H480.8332188c-8.4773645 0-15.83272485 3.11667812-21.94141397 9.22536724-6.23335624 6.23335624-9.22536724 13.5887166-9.22536723 21.94141397v187.00068718h561.00206156z"/>
    </svg>
  )
}

Vue.component('icon-bed', Icon)
export default Icon

