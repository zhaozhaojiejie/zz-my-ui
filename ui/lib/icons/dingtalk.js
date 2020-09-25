
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M895.49750302 388.17632623c-1.71806884 7.11771366-5.89052165 17.67156493-11.78104329 30.31164261h0.12271921l-0.73631521 1.22719205c-34.23865707 73.38608216-123.57823538 217.21298572-123.57823539 217.2129857s-0.12271919-0.36815759-0.49087679-0.8590344L732.89456176 681.59793574h125.90990018L618.52026645 1001.64961185l54.6100444-217.8265817h-99.03439515l34.36137626-144.07234196c-27.85725863 6.74955604-60.74600447 15.95349615-99.77071035 28.47085464 0 0-52.76925639 30.92523864-151.92637085-59.51881246 0 0-66.88196453-59.02793567-28.10269702-73.75423978 16.44437294-6.25867925 80.01291903-14.23542731 130.08235306-20.98498336 67.61827973-9.20394007 109.22008886-13.98998892 109.22008884-13.98998891s-208.37720324 3.06798002-257.83304122-4.66332964c-49.45583799-7.73130965-112.16534969-90.44405111-125.54174261-163.0938181 0 0-20.61682577-39.88374031 44.42435075-20.98498339 65.0411765 18.89875693 334.53254185 73.50880138 334.53254186 73.50880141s-350.48603795-107.62473925-373.80268616-133.88664827c-23.31664818-26.261909-68.60003335-143.33602673-62.70951171-215.24947847 0 0 2.5771032-17.91700336 20.8622642-13.13095453 0 0 259.06023324 118.54674813 436.26675942 183.46520545 177.20652617 65.16389572 331.2191234 98.17536078 311.33861285 182.23801345z m0 0"/>
    </svg>
  )
}

Vue.component('icon-dingtalk', Icon)
export default Icon

