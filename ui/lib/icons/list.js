
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M195.84417153 151.33800799c20.69474273 20.81940983 31.1667812 46.00216905 31.16678119 75.79761186 0 29.6707757-10.47203848 54.85353491-31.16678119 75.79761187-20.81940983 20.81940983-46.00216905 31.1667812-75.79761188 31.16678121s-54.85353491-10.47203848-75.79761187-31.16678121c-20.69474273-20.81940983-31.04211408-46.00216905-31.04211407-75.79761187 0-29.6707757 10.47203848-54.85353491 31.16678119-75.79761186 20.69474273-20.69474273 46.00216905-31.1667812 75.79761185-31.16678124 29.6707757 0 54.97820203 10.34737136 75.67294478 31.16678124z m0 284.98904727c20.69474273 20.81940983 31.1667812 46.00216905 31.16678119 75.79761185 0 29.6707757-10.47203848 54.85353491-31.16678119 75.79761189-20.81940983 20.81940983-46.00216905 31.1667812-75.79761188 31.16678122s-54.85353491-10.47203848-75.79761187-31.16678122c-20.69474273-20.81940983-31.04211408-46.12683615-31.04211407-75.79761189 0-29.6707757 10.47203848-54.85353491 31.16678119-75.79761185 20.69474273-20.69474273 46.00216905-31.1667812 75.79761185-31.1667812 29.6707757 0 54.97820203 10.34737136 75.67294478 31.1667812z m0 284.86438013c20.69474273 20.81940983 31.1667812 46.00216905 31.16678119 75.79761189s-10.47203848 54.85353491-31.16678119 75.79761187c-20.81940983 20.69474273-46.00216905 31.1667812-75.79761188 31.1667812s-54.85353491-10.47203848-75.79761187-31.1667812c-20.69474273-20.81940983-31.04211408-46.12683615-31.04211407-75.79761187 0-29.6707757 10.47203848-54.85353491 31.16678119-75.79761189 20.69474273-20.69474273 46.00216905-31.1667812 75.79761185-31.1667812 29.6707757 0.12466711 54.97820203 10.47203848 75.67294478 31.1667812zM1010.66849916 173.6534233v106.83972594c0 4.73735075-1.74533977 8.97603298-5.23601924 12.4667125s-7.72936175 5.23601926-12.46671247 5.23601923h-676.94248764c-4.73735075 0-8.97603298-1.74533977-12.46671243-5.23601923-3.4906795-3.4906795-5.23601926-7.72936175-5.23601926-12.4667125v-106.83972594c0-4.73735075 1.74533977-8.97603298 5.23601926-12.4667125 3.4906795-3.4906795 7.72936175-5.23601926 12.46671243-5.23601919h676.81782051c4.73735075 0 8.97603298 1.74533977 12.4667125 5.23601919 3.61534663 3.4906795 5.36068635 7.48002749 5.36068634 12.4667125z m0 284.86438017v106.83972595c0 4.73735075-1.74533977 8.97603298-5.23601924 12.4667125s-7.72936175 5.23601926-12.46671247 5.23601921h-676.94248764c-4.73735075 0-8.97603298-1.74533977-12.46671243-5.23601921-3.4906795-3.4906795-5.23601926-7.72936175-5.23601926-12.4667125v-106.83972595c0-4.73735075 1.74533977-8.97603298 5.23601926-12.46671247 3.4906795-3.4906795 7.72936175-5.23601926 12.46671243-5.23601926h676.81782051c4.73735075 0 8.97603298 1.74533977 12.4667125 5.23601926 3.61534663 3.4906795 5.36068635 7.72936175 5.36068634 12.46671247z m0 284.98904729v106.83972594c0 4.73735075-1.74533977 8.97603298-5.23601924 12.4667125s-7.72936175 5.23601926-12.46671247 5.23601919h-676.94248764c-4.73735075 0-8.97603298-1.74533977-12.46671243-5.23601919-3.4906795-3.4906795-5.23601926-7.72936175-5.23601926-12.4667125v-106.83972594c0-4.73735075 1.74533977-8.97603298 5.23601926-12.4667125 3.4906795-3.4906795 7.72936175-5.23601926 12.46671243-5.23601923h676.81782051c4.73735075 0 8.97603298 1.74533977 12.4667125 5.23601923 3.61534663 3.4906795 5.36068635 7.60469461 5.36068634 12.4667125z"/>
    </svg>
  )
}

Vue.component('icon-list', Icon)
export default Icon
