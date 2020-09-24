
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.16983066 294.95453575l-32.28878531 129.27980839c-2.6180096 9.22536724-8.60203161 13.83805085-17.82739884 13.83805085H771.18295242l-36.90146891 147.73054289h179.52065971c5.85935485 0 10.59670559 2.36867538 14.46138646 6.981359 3.86468087 5.36068635 4.98668499 10.84603987 3.49067948 16.2067262l-32.53811956 129.27980838c-1.99467401 9.22536724-7.85402885 13.83805085-17.82739884 13.83805089H692.64266382l-46.7501718 189.36936256c-2.6180096 9.22536724-8.60203161 13.83805085-17.82739883 13.83805083H498.78528476c-6.23335624 0-11.22004121-2.36867538-15.0847221-6.98135897-3.4906795-4.61268362-4.61268362-9.97336998-3.49067949-16.20672623l45.00483207-180.01932819H378.7308436l-46.75017177 189.36936256c-2.6180096 9.22536724-8.60203161 13.83805085-17.82739888 13.83805083H184.12546181c-5.85935485 0-10.59670559-2.36867538-14.46138649-6.98135897-3.4906795-4.61268362-4.61268362-9.97336998-3.4906795-16.20672623l45.00483207-179.89466108h-179.52065974c-5.85935485 0-10.59670559-2.36867538-14.46138645-6.98135897-3.4906795-4.61268362-4.61268362-9.97336998-3.49067949-16.20672624l32.41345244-129.52914264c2.6180096-9.22536724 8.60203161-13.83805085 17.82739884-13.83805087H252.69238042l36.90146897-147.73054287H110.19785678c-5.85935485 0-10.59670559-2.36867538-14.46138646-6.98135897-3.86468087-5.36068635-4.98668499-10.84603987-3.49067948-16.20672623l32.41345246-129.40447554c1.99467401-9.22536724 7.85402885-13.83805085 17.82739884-13.83805084H331.23266905l46.7501718-189.36936257c2.6180096-9.22536724 8.85136586-13.83805085 18.45073448-13.83805086H525.71338369c5.85935485 0 10.59670559 2.36867538 14.46138652 6.98135899 3.4906795 4.61268362 4.61268362 9.97336998 3.49067949 16.20672623l-45.00483204 180.01932821H645.39382353l46.7501718-189.36936257c2.6180096-9.22536724 8.85136586-13.83805085 18.45073446-13.83805086H839.87453819c5.85935485 0 10.59670559 2.36867538 14.46138649 6.98135899 3.4906795 4.61268362 4.61268362 9.97336998 3.4906795 16.20672623l-45.00483207 180.01932821h179.52065974c5.85935485 0 10.59670559 2.36867538 14.46138645 6.98135898 3.36601233 4.86201785 4.61268362 10.22270424 3.36601236 16.45606048zM566.85353491 585.80293788l36.90146894-147.73054289H457.14646509l-36.90146894 147.73054289H566.85353491z"/>
    </svg>
  )
}

Vue.component('icon-number-sign', Icon)
export default Icon
