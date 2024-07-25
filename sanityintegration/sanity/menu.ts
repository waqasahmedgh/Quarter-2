export const arrayMenu = {
    title: 'Category Set',
    name: 'categorySet',
    type: 'array',
    of: [{type: 'string'}],
    options: {
      list: [
        {title: 'Building', value: 'building'},
        {title: 'Master plan', value: 'masterPlan'},
        {title: 'Infrastructure', value: 'infrastructure'},
        {title: 'Private Home', value: 'privateHome'}
      ]
    }
}