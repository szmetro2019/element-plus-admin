<template>
  <el-date-picker
    v-model="currentDate"
    class="date-width"
    format="YYYY-MM-DD"
    value-format="YYYY-MM-DD"
    type="date"
    clearable
    :placeholder="placeholder"
  >
    <!-- <template #default="cell">
      <div class="cell" :class="{ current: cell.isCurrent }">
        <span class="text">{{ cell.text }}</span>
        <span v-if="isHoliday(cell)" class="holiday" />
      </div>
    </template> -->
  </el-date-picker>
</template>
<script>
import { defineComponent, toRefs, computed } from 'vue'
export default defineComponent({
  props: {
    datepickerval: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const { datepickerval, placeholder } = toRefs(props)
    const holidays = [
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',

      '2022-01-31',
      '2022-02-01',
      '2022-02-02',
      '2022-02-03',
      '2022-02-04',
      '2022-02-05',
      '2022-02-06',

      '2022-04-03',
      '2022-04-04',
      '2022-04-05',

      '2022-04-30',
      '2022-05-01',
      '2022-05-02',
      '2022-05-03',
      '2022-05-04',

      '2022-06-03',
      '2022-06-04',
      '2022-06-05',

      '2022-09-10',
      '2022-09-11',
      '2022-09-12',

      '2022-10-01',
      '2022-10-02',
      '2022-10-03',
      '2022-10-04',
      '2022-10-05',
      '2022-10-06',
      '2022-10-07'
    ]
    const isHoliday = ({ dayjs }) => {
      return holidays.includes(dayjs.format('YYYY-MM-DD'))
    }
    const currentDate = computed({
      get() {
        return datepickerval.value
      },
      set(val) {
        context.emit('update:datepickerval', val || '')
      }
    })
    return {
      currentDate,
      placeholder,
      isHoliday
    }
  }
})
</script>
<style lang="scss" scoped>
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
}
.cell .text {
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
  line-height: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.cell.current .text {
  background: $color-primary;
  color: #fff;
}
.today .cell .text{
  color: $color-primary;
  font-weight: bold;
}
.current .cell .text{
  color: #fff;
}
.cell .holiday {
  position: absolute;
  width: 6px;
  height: 6px;
  background: red;
  border-radius: 50%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.date-width{
  width: 100%;
}
</style>
