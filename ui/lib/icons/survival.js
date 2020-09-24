
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M155.82602447 227.01095272v712.34795106H137.99862562c-34.15879219 0-63.45556654-12.34204536-87.89032296-36.77680183S13.33150084 848.85057119 13.33150084 814.81644611V351.67807753c0-34.15879219 12.34204536-63.45556654 36.77680182-87.89032299s53.85619791-36.77680182 87.89032296-36.77680182h17.82739885z m658.99042164 0v712.34795106H209.18355389V227.01095272h89.13699423v-89.1369942c0-14.83538786 5.11135212-27.42676745 15.58339057-37.77413883 10.47203848-10.47203848 23.06341809-15.58339061 37.77413884-15.58339059h320.64384494c14.83538786 0 27.42676745 5.11135212 37.77413884 15.58339059 10.47203848 10.47203848 15.58339061 23.06341809 15.58339057 37.77413883v89.1369942h89.13699423zM725.80411903 636.66712479v-106.71505883c0-5.11135212-1.62067262-9.47470148-4.98668501-12.7160467-3.36601233-3.24134525-7.60469461-4.98668499-12.71604671-4.98668502h-124.66712478V387.33287521c0-5.11135212-1.62067262-9.47470148-4.986685-12.71604674-3.36601233-3.36601233-7.60469461-4.98668499-12.71604674-4.98668497h-106.83972596c-5.11135212 0-9.47470148 1.62067262-12.71604675 4.98668497-3.36601233 3.36601233-4.98668499 7.60469461-4.98668497 12.71604674v124.66712479H316.14794695c-5.11135212 0-9.47470148 1.62067262-12.71604672 4.98668499-3.36601233 3.36601233-4.98668499 7.60469461-4.98668499 12.71604673V636.66712479c0 5.11135212 1.62067262 9.47470148 4.98668499 12.71604674 3.36601233 3.36601233 7.60469461 4.98668499 12.71604672 4.98668497h124.66712479v124.79179195c0 5.11135212 1.62067262 9.47470148 4.98668499 12.71604671 3.36601233 3.36601233 7.60469461 4.98668499 12.71604674 4.98668499h106.83972595c5.11135212 0 9.47470148-1.62067262 12.71604671-4.98668499 3.36601233-3.36601233 4.98668499-7.60469461 4.986685-12.71604671v-124.66712484h124.6671248c5.11135212 0 9.47470148-1.62067262 12.71604669-4.98668496 3.4906795-3.36601233 5.36068635-7.60469461 5.36068641-12.84071386zM369.6301435 227.01095272h284.98904729v-71.43426251H369.6301435v71.43426251z m641.03835566 124.66712481v463.13836858c0 34.15879219-12.34204536 63.45556654-36.77680182 87.89032299s-53.85619791 36.77680182-87.89032296 36.7768018h-17.70273171V227.01095272H886.00137438c34.15879219 0 63.45556654 12.34204536 87.89032296 36.77680182 24.6840907 24.43475647 36.77680182 53.73153079 36.77680182 87.89032299z"/>
    </svg>
  )
}

Vue.component('icon-survival', Icon)
export default Icon
