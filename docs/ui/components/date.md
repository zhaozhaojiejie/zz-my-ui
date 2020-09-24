# Date 日期时间

基于 Dayjs 类库的日期时间格式化组件。
组件文档 <api-link href="components/my-date">MyDate</api-link>

## 何时使用

需要对日期时间格式化展示时

## 代码示例

### 基础用法

显示当前时间

:::demo
```html
<template>
  <my-date></my-date>
</template>

<script>
import {MyDate} from '$ui'
export default {
  components: {
    MyDate
  }
}
</script>

```
:::

### 自定义格式

详情如下:

| 格式   | 输出             | 描述                         |
| ------ | ---------------- | ---------------------------- |
| `YY`   | 18               | 两位数的年份                 |
| `YYYY` | 2018             | 四位数的年份                 |
| `M`    | 1-12             | 月份，从 1 开始              |
| `MM`   | 01-12            | 月份，两位数                 |
| `MMM`  | Jan-Dec          | 简写的月份名称               |
| `MMMM` | January-December | 完整的月份名称               |
| `D`    | 1-31             | 月份里的一天                 |
| `DD`   | 01-31            | 月份里的一天，两位数         |
| `d`    | 0-6              | 一周中的一天，星期天是 0     |
| `dd`   | Su-Sa            | 最简写的一周中一天的名称     |
| `ddd`  | Sun-Sat          | 简写的一周中一天的名称       |
| `dddd` | Sunday-Saturday  | 一周中一天的名称             |
| `H`    | 0-23             | 小时                         |
| `HH`   | 00-23            | 小时，两位数                 |
| `h`    | 1-12             | 小时, 12 小时制              |
| `hh`   | 01-12            | Hours, 12 小时制, 两位数     |
| `m`    | 0-59             | 分钟                         |
| `mm`   | 00-59            | 分钟，两位数                 |
| `s`    | 0-59             | 秒                           |
| `ss`   | 00-59            | 秒 两位数                    |
| `SSS`  | 000-999          | 毫秒 三位数                  |
| `Z`    | +5:00            | UTC 的偏移量                 |
| `ZZ`   | +0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                              |
| `a`    | am pm            |                              |


:::demo
```html
<template>
  <div>
     <my-date value="2019-09-21 21:36:46" format="YYYY/MM/DD"></my-date>
     <my-date :value="new Date()" format="YYYY-MM-DD HH:mm:ss.SSS ZZ A"></my-date>
  </div>

</template>

<script>
import {MyDate} from '$ui'
export default {
  components: {
    MyDate
  }
}
</script>

<style lang="scss" scoped>
.my-date {
  margin: 0 20px;
}
</style>

```
:::

### 相对时间


| Range            | Key | Sample Output          |
| ---------------- | --- | ---------------------- |
| 0 到 44 秒       | s   | 几秒前                 |
| 45 到 89 秒      | m   | 1 分钟前               |
| 90 秒 到 44 分   | mm  | 2 分钟前 ... 44 分钟前 |
| 45 到 89 分      | h   | 1 小时前               |
| 90 分 到 21 小时 | hh  | 2 小时前 ... 21 小时前 |
| 22 到 35 小时    | d   | 1 天前                 |
| 36 小时 到 25 天 | dd  | 2 天前 ... 25 天前     |
| 26 到 45 天      | M   | 1 个月前               |
| 46 天 到 10 月   | MM  | 2 个月前 ... 10 个月前 |
| 11 月 到 17 月   | y   | 1 年前                 |
| 18 月以上        | yy  | 2 年前 ... 20 年前     |


:::demo
```html
<template>
  <div>
     <my-date relative></my-date>
     <my-date value="2019-09-21 21:44:35" relative></my-date>
  </div>

</template>

<script>
import {MyDate} from '$ui'
export default {
  components: {
    MyDate
  }
}
</script>

<style lang="scss" scoped>
.my-date {
  margin: 0 20px;
}
</style>

```
:::


### 文本颜色

:::demo
```html
<template>
  <div>
     <my-date></my-date>
     <my-date type="primary"></my-date>
     <my-date type="success"></my-date>
     <my-date type="warning"></my-date>
     <my-date type="danger"></my-date>
     <my-date type="info"></my-date>
  </div>

</template>

<script>
import {MyDate} from '$ui'
export default {
  components: {
    MyDate
  }
}
</script>

<style lang="scss" scoped>
.my-date {
  margin: 0 20px;
}
</style>

```
:::

### 心跳


:::demo
```html
<template>
  <div>
     <my-date tick></my-date>
  </div>

</template>

<script>
import {MyDate} from '$ui'
export default {
  components: {
    MyDate
  }
}
</script>

<style lang="scss" scoped>
.my-date {
  margin: 0 20px;
}
</style>

```
:::

## Dayjs API

`Dayjs` 并没有改变或覆盖 Javascript 原生的 `Date.prototype`， 而是创造了一个全新的包含 `Javascript Date` 对象的 `Dayjs` 的对象。

`Dayjs` 对象是不可变的, 所有的 API 操作都将返回一个新的 `Dayjs` 对象。

如果没有特别说明，Day.js 的返回值都是新的 `Dayjs` 对象。

### 解析

在 `dayjs()` 中传入支持的格式

#### 当前时间

直接运行 `dayjs()`，得到包含当前时间和日期的 `Dayjs` 对象。

```js
dayjs()
```

### 时间字符串

可以解析传入的一个标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间字符串。

```js
dayjs(String)
dayjs('1995-12-25')
```

### Date 对象

可以解析传入的一个 Javascript Date 对象。

```js
dayjs(Date)
dayjs(new Date(2018, 8, 18))
```

### Unix 时间戳 (毫秒)

可以解析传入的一个 Unix 时间戳 (13 位数字)。

```js
dayjs(Number)
dayjs(1318781876406)
```

### Unix 时间戳 (秒)

可以解析传入的一个 Unix 时间戳 (10 位数字)。

```js
dayjs.unix(Number)
dayjs.unix(1318781876)
```

### 自定义时间格式

- 解析自定义时间格式如 `dayjs("12-25-1995", "MM-DD-YYYY")` 可以使用插件 `CustomParseFormat`

### 复制

`Dayjs` 对象是不可变的，如果您想获得一个对象的拷贝，请执行 `.clone()`。
向 `dayjs()` 里传入一个 `Dayjs` 对象也能实现同样的效果。

```js
dayjs(Dayjs)
dayjs().clone()
```

### 验证

- return Boolean

检测当前 `Dayjs` 对象是否是一个有效的时间。

```js
dayjs().isValid()
```

---

### 获取+设置

获取和改变日期。

#### 年

获取或设置年份。

```js
dayjs().year()
dayjs().year(2000)
```

#### 月

获取或设置月份。从 0 开始

```js
dayjs().month()
dayjs().month(0)
```

#### 日

获取或设置日期。从 1 开始

```js
dayjs().date()
dayjs().date(1)
```

#### 星期

获取或设置星期。从星期天 0 开始

```js
dayjs().day()
dayjs().day(0)
```

#### 时

获取或设置小时。

```js
dayjs().hour()
dayjs().hour(12)
```

#### 分

获取或设置分钟。

```js
dayjs().minute()
dayjs().minute(59)
```

#### 秒

获取或设置秒。

```js
dayjs().second()
dayjs().second(1)
```

#### 毫秒

获取或设置毫秒。

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

#### 获取

获取从 `Dayjs` 对象中取到的信息
传入的单位 (unit) 对大小写不敏感。

```js
dayjs().get(unit : String)
dayjs().get('month') // 从 0 开始
dayjs().get('day')
```

#### 可用单位

| 单位          | 缩写 | 描述                        |
| ------------- | ---- | --------------------------- |
| `date`        |      | 日期                        |
| `day`         | `d`  | 星期几 (星期天 0, 星期六 6) |
| `month`       | `M`  | 月 (一月 0, 十二月 11)      |
| `year`        | `y`  | 年                          |
| `hour`        | `h`  | 时                          |
| `minute`      | `m`  | 分                          |
| `second`      | `s`  | 秒                          |
| `millisecond` | `ms` | 毫秒                        |

#### 设置

设置时间

```js
dayjs().set(unit : String, value : Int);
dayjs().set('date', 1);
dayjs().set('month', 3); // 四月
dayjs().set('second', 30);
```

### 操作

您可以对 `Dayjs` 对象如下增加减少之类的操作：

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .subtract(1, 'year')
```

#### 增加

增加时间并返回一个新的 `Dayjs()` 对象。

```js
dayjs().add(value : Number, unit : String);
dayjs().add(7, 'day');
```

#### 减少

减少时间并返回一个新的 `Dayjs()` 对象。

```js
dayjs().subtract(value : Number, unit : String);
dayjs().subtract(7, 'year');
```

#### 开头时间

返回当前时间的开头时间的 `Dayjs()` 对象，如月份的第一天。

```js
dayjs().startOf(unit : String);
dayjs().startOf('week'); // 取决于 locale 文件里 `weekStart` 的值
```

#### 末尾时间

返回当前时间的末尾时间的 `Dayjs()` 对象，如月份的最后一天。

```js
dayjs().endOf(unit : String);
dayjs().endOf('month');
```

---

### 显示

格式化 `Dayjs` 对象并展示。

#### 格式化

- return String

接收一系列的时间日期字符串并替换成相应的值。

```js
dayjs().format(String)
dayjs('2019-01-25').format('[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]') // 'YYYY 2019-01-25T00:00:00-02:00Z'
dayjs().format('{YYYY} MM-DDTHH:mm:ssZ[Z]') // "{2014} 09-08T08:02:17-05:00Z"
```

详情如下:

| 格式   | 输出             | 描述                         |
| ------ | ---------------- | ---------------------------- |
| `YY`   | 18               | 两位数的年份                 |
| `YYYY` | 2018             | 四位数的年份                 |
| `M`    | 1-12             | 月份，从 1 开始              |
| `MM`   | 01-12            | 月份，两位数                 |
| `MMM`  | Jan-Dec          | 简写的月份名称               |
| `MMMM` | January-December | 完整的月份名称               |
| `D`    | 1-31             | 月份里的一天                 |
| `DD`   | 01-31            | 月份里的一天，两位数         |
| `d`    | 0-6              | 一周中的一天，星期天是 0     |
| `dd`   | Su-Sa            | 最简写的一周中一天的名称     |
| `ddd`  | Sun-Sat          | 简写的一周中一天的名称       |
| `dddd` | Sunday-Saturday  | 一周中一天的名称             |
| `H`    | 0-23             | 小时                         |
| `HH`   | 00-23            | 小时，两位数                 |
| `h`    | 1-12             | 小时, 12 小时制              |
| `hh`   | 01-12            | Hours, 12 小时制, 两位数     |
| `m`    | 0-59             | 分钟                         |
| `mm`   | 00-59            | 分钟，两位数                 |
| `s`    | 0-59             | 秒                           |
| `ss`   | 00-59            | 秒 两位数                    |
| `SSS`  | 000-999          | 毫秒 三位数                  |
| `Z`    | +5:00            | UTC 的偏移量                 |
| `ZZ`   | +0500            | UTC 的偏移量，数字前面加上 0 |
| `A`    | AM PM            |                              |
| `a`    | am pm            |                              |

- 更多格式化的选项 `Q Do k kk X x ...` 可以使用插件 `AdvancedFormat`
- 本地化的长日期格式 `L LT LTS ...` 可以使用插件 `LocalizedFormat`

#### 时间差

- return Number

获取两个 `Dayjs` 对象的时间差，默认毫秒。

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

#### Unix 时间戳 (毫秒)

- return Number

返回 Unix 时间戳 (毫秒)

```js
dayjs().valueOf()
```

#### Unix 时间戳 (秒)

- return Number

返回 Unix 时间戳 (秒)。

```js
dayjs().unix()
```

### UTC 偏移量 (分)

返回 UTC 偏移量 (分)

```js
dayjs().utcOffset()
```

#### 天数 (月)

- return Number

返回月份的天数。

```js
dayjs().daysInMonth()
```

#### Date 对象

- return Javascript `Date` object

返回原生的 `Date` 对象。

```js
dayjs().toDate()
```

#### As JSON

- return JSON String

当序列化 `Dayjs` 对象时，会返回 ISO8601 格式的字符串。

```js
dayjs().toJSON() //"2018-08-08T00:00:00.000Z"
```

#### ISO 8601 字符串

- return String

返回 ISO8601 格式的字符串。

```js
dayjs().toISOString()
```

#### 字符串

- return String

```js
dayjs().toString()
```

---

### 查询

#### 是否之前

- return Boolean

检查一个 `Dayjs` 对象是否在另一个 `Dayjs` 对象时间之前。

```js
dayjs().isBefore(Dayjs, unit? : String);
dayjs().isBefore(dayjs()); // false
dayjs().isBefore(dayjs(), 'year'); // false
```

#### 是否相同

- return Boolean

检查一个 `Dayjs` 对象是否和另一个 `Dayjs` 对象时间相同。

```js
dayjs().isSame(Dayjs, unit? : String);
dayjs().isSame(dayjs()); // true
dayjs().isSame(dayjs(), 'year'); // true
```

#### 是否之后

- return Boolean

检查一个 `Dayjs` 对象是否在另一个 `Dayjs` 对象时间之后。

```js
dayjs().isAfter(Dayjs, unit? : String);
dayjs().isAfter(dayjs()); // false
dayjs().isAfter(dayjs(), 'year'); // false
```

### 是否是 Dayjs `.isDayjs(compared: any)`

返回一个 `boolean` 验证传入值是否是一个 Dayjs 对象.

```js
dayjs.isDayjs(dayjs()) // true
dayjs.isDayjs(new Date()) // false
```

也可以使用 `instanceof`

```js
dayjs() instanceof dayjs // true
```
