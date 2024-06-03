const { createSideBarConfig } = require('./util')
const FRONT_END = '/blogs/front_end'
const TOOL = '/blogs/tool'
const ESSAY = '/blogs/essay'

module.exports = {
  [FRONT_END]: [createSideBarConfig('前端', FRONT_END)],
  [TOOL]: [createSideBarConfig('工具', TOOL)],
  [ESSAY]: [createSideBarConfig('随笔', ESSAY)],
}
