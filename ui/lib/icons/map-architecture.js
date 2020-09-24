
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.04516354 241.97100769c0-112.2004123-90.6329997-202.83341205-202.83341203-202.833412s-202.83341205 90.6329997-202.83341203 202.833412c0 12.96538097 0 21.56741259 4.36334936 30.16944422L371.37548323 401.66959457c-38.89614294-43.13482517-94.99634911-73.30426938-155.33523749-73.3042694-112.2004123 0-202.83341205 90.6329997-202.83341203 198.47006269s90.6329997 198.47006267 202.83341203 198.47006267c64.70223779 0 120.80244392-30.16944422 155.33523749-73.30426938l233.00285625 133.76782489c0 112.2004123 90.6329997 198.47006267 202.83341203 198.47006267s202.83341205-90.6329997 202.83341203-202.83341204-90.6329997-202.83341205-202.83341203-202.83341203c-82.03096811 0-155.3352375 47.49817455-185.50468169 120.80244393l-215.79879303-120.80244393c4.36334937-17.20406323 8.60203161-34.53279357 8.60203161-56.10020616 0-17.20406323-4.36334937-34.53279357-8.60203161-51.7368568l228.76417398-125.16579328c34.53279357 56.10020614 99.23503132 94.99634911 172.66396785 94.99634907 112.0757452-0.12466711 202.70874491-90.75766684 202.70874492-198.59472978zM324.00197584 526.83538786c0 60.46355553-51.7368568 112.2004123-112.20041234 112.20041232-64.70223779 0-112.2004123-51.7368568-112.20041229-112.20041232s51.7368568-112.2004123 112.20041229-112.20041232c60.3388884 0 112.2004123 51.7368568 112.20041234 112.20041232z m0 0"/>
    </svg>
  )
}

Vue.component('icon-map-architecture', Icon)
export default Icon
