import { postComment, validPost} from '../../src/service/post_comment'
import { mount } from '@vue/test-utils';
import FizzBuzz from '../../src/components/fizz_buzz.vue'


describe('confirm post comment', () => {
  it ('postのバリデーション', () => {
    expect(validPost({name: 'aaa', comment: 'aaa'})).toStrictEqual([])
    expect(validPost({name: '', comment: 'aaa'})).toStrictEqual(['名前が入力されていません'])
    expect(validPost({name: '', comment: 'aaa'})).toContain('名前が入力されていません')
    expect(validPost({name: 'aaa', comment: ''})).toStrictEqual(['コメントが入力されていません'])
  })

  it ('listsに値を追加', () => {
    expect(postComment([], {name: 'aaa', comment: 'aaa'})).toStrictEqual([{name: 'aaa', comment: 'aaa'}])
    expect(postComment([], {name: 'aaa', comment: 'aaa'})).toContainEqual({name: 'aaa', comment: 'aaa'})
    expect(postComment([{name: 'bbb', comment: 'bbb'}], {name: 'aaa', comment: 'aaa'}))
      .toContainEqual({name: 'bbb', comment: 'bbb'}, {name: 'aaa', comment: 'aaa'})
  })
})

describe('コンポーネントに対するテスト', () => {
  it ('コンポーネントが存在するか', () => {
    const wrapper = mount(FizzBuzz)
    expect(wrapper.exists()).toBe(true)
  })

  it ('post-listが表示されているか', () => {
    const wrapper = mount(FizzBuzz)
    const value = wrapper.element.getElementsByClassName('post-list')
    expect(value).toHaveLength(0)
  })
})