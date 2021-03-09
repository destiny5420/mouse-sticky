export default {
  commaFormat: function (val) {
    return Number(val)
      .toString()
      .replace(
        /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
        (all, pre, groupOf3Digital) => pre + groupOf3Digital.replace(/\d{3}/g, ',$&'),
      )
  },
  jqCustomEvent: function (type, data) {
    return $.extend($.Event(type || '', data || {}))
  },

  getDegree: function (value) {
    return (Math.PI / 180) * value
  },
}
