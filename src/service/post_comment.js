export function postComment(lists, targetValue) {
  // 代入
  lists.push(targetValue)
  return lists
}

export function validPost(value) {
  const validate = []
  if (!value.name) validate.push('名前が入力されていません')
  if (!value.comment) validate.push('コメントが入力されていません')
  return validate
}
