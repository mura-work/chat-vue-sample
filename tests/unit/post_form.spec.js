import PostForm from '../../src/components/PostForm.vue'
import { mount } from '@vue/test-utils';

describe('フォームの挙動確認テスト', () => {
  it ('propsのテスト', () => {
    const wrapper = mount(PostForm, {
      propsData: {
        name: 'aaa'
      }
    })
    expect(wrapper.vm.$props.name).toBe('aaa')
  })
})