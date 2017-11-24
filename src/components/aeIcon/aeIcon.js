/*
 *arrow
 *burger
 *check
 *chevron
 *close
 *error
 *info
 */

export default {
  name: 'ae-icon',
  props: {
    name: {
      type: String
    }
  },
  computed :{
    iconUrl() {
      return require('../../assets/icons/'+this.name+'.svg')
      //return ''
    },
    cssStyle() {
      return {
        'background-image' : `url(${this.iconUrl})`
      }
    }

  }
}
