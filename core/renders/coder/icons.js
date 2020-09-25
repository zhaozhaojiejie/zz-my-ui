const _ = require('lodash')

module.exports = _.template(`
/**
 *  icons
 *  @module $sp/code/icons
 *  @author coder
 */

export const elIcons = <%=elItems%>;

export const spIcons = <%=items%>

export default {elIcons, spIcons}

`)
