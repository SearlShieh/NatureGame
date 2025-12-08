/**
 * 日期格式化(扩展函数)
 * @param fmt  ---时间格式参数(y-M-d h:m:s S)
 * @returns
 */
// eslint-disable-next-line
Date.prototype.format = function format(fmt) {
  let result = fmt;
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(result)) {
    result = result.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  Object.keys(o).map((k) => {
    if (new RegExp(`(${k})`).test(result)) {
      result = result.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      );
    }
    return result;
  });
  return result;
};

Date.prototype.addDays = function (n) {
  const days = n || 0;
  const time = this.getTime();
  const newTime = time + days * 24 * 60 * 60 * 1000;
  return new Date(newTime);
};

export default Date;
