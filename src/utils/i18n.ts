// // translate router.meta.title, be used in breadcrumb sidebar tagsview
// import { getCurrentInstance } from "vue";
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
// const { proxy } = getCurrentInstance();
export function generateTitle(title: any) {
  // console.log(title, 'i18n')
  // const translatedTitle = t('route.' + title)
  // return translatedTitle
  return title
}
