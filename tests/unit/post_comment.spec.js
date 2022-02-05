import { postComment, validPost} from '../../src/service/post_comment'

describe('confirm post comment', () => {
  it ('postのバリデーション', () => {
    expect(validPost({name: 'aaa', comment: 'aaa'})).toStrictEqual([])
    expect(validPost({name: '', comment: 'aaa'})).toStrictEqual(['名前が入力されていません'])
    expect(validPost({name: 'aaa', comment: ''})).toStrictEqual(['コメントが入力されていません'])
  })

  it ('listsに値を追加', () => {
    expect(postComment([], {name: 'aaa', comment: 'aaa'})).toStrictEqual([{name: 'aaa', comment: 'aaa'}])
  })
})