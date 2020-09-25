
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 58.8350014l498.66849916 199.46739966v66.57224463h-66.57224464c0 8.97603298-3.61534663 16.83006183-10.72137272 23.43741948-7.10602613 6.60735762-15.45872346 9.84870286-25.18275925 9.84870284H115.68321026c-9.84870286 0-18.07673309-3.24134525-25.18275918-9.84870284-7.10602613-6.60735762-10.72137273-14.33671934-10.72137271-23.43741948H13.33150084v-66.57224463l498.66849916-199.46739966z m462.76436724 831.03105384c9.84870286 0 18.07673309 3.24134525 25.1827592 9.84870287 7.10602613 6.60735762 10.72137273 14.33671934 10.72137272 23.43741944v66.57224464H13.33150084v-66.57224464c0-8.97603298 3.4906795-16.83006183 10.72137272-23.43741944 7.10602613-6.60735762 15.45872346-9.84870286 25.1827592-9.84870287h925.52873448z m-828.41304425-498.66849916h133.01982215v398.93479934h66.57224467v-398.93479934h132.89515501v398.93479934H545.66012368v-398.93479934h132.89515504v398.93479934h66.32291038v-398.93479934h132.89515505v398.93479934H908.44145684c9.84870286 0 18.07673309 3.24134525 25.18275922 9.84870285 7.10602613 6.60735762 10.72137273 14.46138647 10.72137271 23.43741945v33.16145522H79.90374548v-33.16145522c0-8.97603298 3.4906795-16.83006183 10.72137272-23.43741945 7.10602613-6.60735762 15.45872346-9.84870286 25.18275925-9.84870285h30.66811266l-0.12466712-398.93479934z"/>
    </svg>
  )
}

Vue.component('icon-university', Icon)
export default Icon

