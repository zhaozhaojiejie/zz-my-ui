/**
 * 文本框组件，继承Base
 * @module $ui/components/sp-date-picker
 */

import {DatePicker, TimePicker, TimeSelect} from 'element-ui'
import Base from '../Base'

export default {
  name: 'spDatePicker',
  mixins: [Base],
  components: {
    DatePicker,
    TimePicker,
    TimeSelect
  },
  props: {
    value: [Date, String, Number, Array],
    mode: {
      type: String,
      default: 'date',
      validator(val) {
        return ['time', 'timeSelect', 'date', 'dateTime'].includes(val)
      }
    }
  },
  methods: {},
  render() {
    let vnode = null
    if (this.mode === 'date') {
      vnode = (
        <DatePicker ref="comp"
                    class="sp-date-picker"
                    {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
                    vModel={this.fieldValue}>
        </DatePicker>
      )
    } else if (this.mode === 'dateTime') {
      vnode = (
        <DatePicker ref="comp"
                    class="sp-date-picker"
                    {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
                    type="datetime"
                    vModel={this.fieldValue}>
        </DatePicker>
      )
    } else if (this.mode === 'time') {
      vnode = (
        <TimePicker ref="comp"
                    class="sp-date-picker"
                    {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
                    vModel={this.fieldValue}>
        </TimePicker>
      )
    } else if (this.mode === 'timeSelect') {
      vnode = (
        <TimeSelect ref="comp"
                    class="sp-date-picker"
                    {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
                    vModel={this.fieldValue}>
        </TimeSelect>
      )
    }
    
    
    return this.renderComponent(vnode)
  },
  mounted() {
    this.extendMethods(this.$refs.comp, ['focus'])
  }
  
}
