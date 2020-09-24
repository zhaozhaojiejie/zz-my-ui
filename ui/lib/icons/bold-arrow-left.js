
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M822.14726465 181.98658101L492.13384569 512l330.01341896 330.01341899c7.84190303 7.84190303 11.76285451 17.25218664 11.76285451 27.9694541s-3.92095154 20.12755108-11.76285451 27.96945412l-103.1210248 103.12102477c-7.84190303 7.84190303-17.25218664 11.76285451-27.96945413 11.76285454s-20.12755108-3.92095154-27.9694541-11.76285454L201.85273535 539.96945412c-7.84190303-7.84190303-11.76285451-17.12148828-11.76285451-27.96945412 0-10.71726747 3.92095154-20.12755108 11.76285451-27.96945412l461.10389784-461.10389786c7.84190303-7.84190303 17.25218664-11.76285451 27.96945416-11.76285454s20.12755108 3.92095154 27.96945412 11.76285454l103.12102478 103.12102477c7.84190303 7.84190303 11.76285451 17.25218664 11.76285454 27.96945412 0.13069836 10.84796586-3.79025314 20.12755108-11.63215614 27.9694541z"/>
    </svg>
  )
}

Vue.component('icon-bold-arrow-left', Icon)
export default Icon
