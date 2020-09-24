
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 262.41641616v76.79494887c0 28.29943734-8.35269735 56.97287603-24.80875784 85.64631474-16.58072759 28.79810581-38.89614294 54.7288678-67.19558024 77.91695299-28.05010309 23.18808522-62.70756377 42.6361567-103.72304784 58.46888155-41.01548404 15.70805773-83.90097498 24.6840907-129.15514128 26.67876469-16.70539473 21.56741259-35.77946482 40.64148268-56.97287602 56.97287601-15.08472209 13.5887166-25.68142771 28.05010309-31.54078258 43.50882656-5.85935485 15.33405633-8.72669874 33.28612231-8.72669874 53.73153079 0 21.56741259 6.10868914 39.64414567 18.32606734 54.60420068 12.21737821 14.71072073 31.6654497 22.1907482 58.46888153 22.1907482 30.04477705 0 56.59887468 9.10070011 80.03629411 27.17743321 23.31275235 18.20140024 35.03146207 41.14015116 35.03146207 68.56691862v38.27280731c0 5.48535348-1.74533977 10.22270424-5.36068636 13.71338374-3.61534663 3.4906795-8.22803022 5.36068635-13.71338374 5.36068636H262.66575043c-5.48535348 0-10.22270424-1.74533977-13.71338374-5.36068636-3.61534663-3.61534663-5.36068635-8.22803022-5.36068636-13.71338374V914.67481307c0-27.55143457 11.71870973-50.36551842 35.03146207-68.56691862s49.99151705-27.17743319 80.03629411-27.17743321c26.6787647 0 46.2515033-7.48002749 58.46888153-22.1907482 12.21737821-14.71072073 18.32606734-33.03678807 18.32606734-54.60420068 0-20.44540846-2.8673439-38.14814019-8.72669874-53.73153079-5.85935485-15.33405633-16.20672625-29.92010993-31.54078258-43.50882656-21.19341122-16.33139336-40.26748132-35.40546344-56.97287602-56.97287601-45.12949917-1.99467401-88.26432437-10.84603987-129.15514128-26.67876469-41.01548404-15.70805773-75.54827763-35.28079631-103.72304784-58.46888155-28.05010309-23.18808522-50.49018554-49.11884718-67.19558024-77.91695299-16.58072759-28.79810581-24.80875785-57.34687741-24.80875784-85.64631474v-76.79494887c0-15.95739198 5.48535348-29.6707757 16.70539472-40.7661498 11.22004121-11.22004121 24.80875785-16.70539473 40.76614979-16.70539471h172.78863498v-57.47154452c0-26.30476334 9.35003436-48.86951291 28.05010308-67.69424876s41.38948542-28.05010309 67.69424874-28.05010309h345.20326855c26.30476334 0 48.86951291 9.47470148 67.69424876 28.05010309 18.82473584 18.82473584 28.05010309 41.38948542 28.05010309 67.69424876v57.47154452h172.53930069c15.95739198 0 29.6707757 5.48535348 40.76614983 16.70539471 11.34470836 11.34470836 17.07939611 24.93342495 17.07939609 40.7661498zM287.84850962 504.02130403c-29.6707757-64.70223779-44.38149645-138.87917701-44.38149643-222.15681639h-153.34056347v57.47154451c0 31.1667812 18.94940295 63.58023364 56.59887464 96.99102311 37.77413882 33.53545658 84.89831197 56.10020614 141.12318526 67.69424877z m646.02504066-164.809939v-57.47154452h-153.34056347c0 83.52697362-14.71072073 157.57924575-44.38149643 222.28148352 56.34954041-11.59404262 103.34904645-34.15879219 141.12318526-67.69424877 37.77413882-33.53545658 56.59887468-65.948909 56.59887464-97.11569023z"/>
    </svg>
  )
}

Vue.component('icon-trophy', Icon)
export default Icon
