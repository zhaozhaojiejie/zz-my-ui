
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M971.02435349 318.51662233c26.30476334 61.46089255 39.64414567 125.91379604 39.64414567 193.48337767 0 67.44491451-13.21471524 132.02248515-39.64414567 193.48337767-26.30476334 61.46089255-61.83489391 114.44442056-106.46572457 159.07525125s-97.6143587 80.03629412-159.07525125 106.46572457C644.02248515 997.32911683 579.56958162 1010.66849916 512 1010.66849916c-74.42627351 0-145.11253324-15.70805773-212.30811352-47.12417317-66.94624602-31.41611544-124.16845628-75.67294474-171.29262946-132.7704879-2.99201098-4.36334937-4.4880165-9.10070011-4.23868224-14.58605359s1.99467401-9.84870286 5.48535348-13.21471524l88.88765997-89.51099561c4.36334937-3.98934801 9.72403573-5.85935485 16.20672622-5.85935485 6.98135898 0.87266987 11.84337685 3.36601233 14.83538786 7.72936176 31.54078257 41.14015116 70.31225837 72.93026801 116.1897603 95.49501756s94.62234771 33.66012368 146.10987028 33.66012369c45.00483203 0 87.89032301-8.72669874 128.90580704-26.30476331 41.01548404-17.45339747 76.29628037-41.26481832 106.09172317-71.18492827 29.92010993-29.92010993 53.48219653-65.20090627 71.18492827-106.09172321 17.45339747-41.01548404 26.30476334-83.77630785 26.30476333-128.90580702s-8.72669874-87.89032301-26.30476333-128.90580702-41.26481832-76.29628037-71.18492827-106.09172321c-29.92010993-29.92010993-65.20090627-53.48219653-106.09172317-71.18492827-41.01548404-17.45339747-83.77630785-26.30476334-128.90580704-26.30476331-42.51148955 0-83.15297224 7.60469461-122.04911519 23.06341809-38.89614294 15.45872346-73.55360363 37.27547033-103.84771493 65.94890901l88.88765996 89.51099561c13.33938234 12.96538097 16.33139336 27.80076882 9.10070011 44.75549777-7.35536036 17.32873034-20.07140709 25.93076197-38.39747444 25.93076198H54.84565337c-11.22004121 0-21.06874408-4.11401514-29.17210718-12.34204535-8.22803022-8.22803022-12.34204536-17.82739884-12.34204535-29.17210721V96.48447309c0-18.20140024 8.60203161-31.04211408 25.93076195-38.39747446 16.95472896-7.35536036 31.79011683-4.36334937 44.75549781 9.10070012l84.3996435 83.65164071c46.2515033-43.63349368 99.23503132-77.54295162 158.82591695-101.6037067 59.46621852-24.06075508 121.05177818-36.02879907 184.75667895-36.02879905 67.44491451 0 132.02248515 13.21471524 193.48337767 39.64414566s114.44442056 61.83489391 159.07525125 106.4657246c44.50616358 44.63083067 80.03629412 97.6143587 106.46572457 159.19991836zM595.15297224 324.99931281v290.84840216c0 5.98402199-1.87000687 11.0953741-5.85935487 14.83538783-3.98934801 3.98934801-8.85136586 5.85935485-14.83538786 5.85935488H366.63813248c-5.98402199 0-11.0953741-1.87000687-14.83538782-5.85935488-3.98934801-3.98934801-5.85935485-8.85136586-5.85935485-14.83538783V574.3335624c0-5.98402199 1.87000687-11.0953741 5.85935485-14.83538785 3.98934801-3.98934801 8.85136586-5.85935485 14.83538782-5.85935486H512V324.99931281c0-5.98402199 1.87000687-11.0953741 5.85935485-14.83538786 3.98934801-3.98934801 8.85136586-5.85935485 14.83538788-5.85935484H574.3335624c5.98402199 0 11.0953741 1.87000687 14.83538783 5.85935484 3.98934801 3.74001377 5.98402199 8.72669874 5.98402201 14.83538786z"/>
    </svg>
  )
}

Vue.component('icon-history', Icon)
export default Icon

