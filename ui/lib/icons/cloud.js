
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1012.21186126 678.69560276c0 55.27341067-19.50826258 102.29332562-58.64984075 141.43490378-39.14157816 39.14157816-86.28654608 58.52478777-141.43490375 58.52478777H245.26202498c-64.15217119 0-119.17547595-22.75963969-164.94486124-68.52902501C34.67283139 764.48193698 11.78813874 709.5836852 11.78813874 645.30646102c0-45.76938532 12.25519058-87.78718164 37.01567774-125.80328309 24.63543418-38.01610147 57.14920516-66.40312459 97.41625997-85.16106938-0.62526482-9.75413129-1.12547669-17.25730922-1.12547668-22.38448081 0-73.65619657 26.13606974-136.55783812 78.15810331-188.57987169s114.92367513-78.15810333 188.57987171-78.15810331c54.89825177 0 104.66933197 15.38151475 149.18818761 45.7693853 44.64390861 30.51292354 77.15767959 70.52987244 97.79141887 119.92579372 24.38532823-21.634163 53.14751026-32.26366507 86.41159904-32.26366504 36.76557181 0 68.27891906 13.00550839 94.28993584 39.14157815s39.14157816 57.52436405 39.14157816 94.28993585c0 26.13606974-7.12801903 50.02118612-21.38405707 71.90545505 44.76896158 10.37939611 81.78463933 33.76430063 111.0470332 70.15471354 29.26239387 36.01525401 43.89359083 77.65789145 43.89359082 124.55275345z"/>
    </svg>
  )
}

Vue.component('icon-cloud', Icon)
export default Icon

