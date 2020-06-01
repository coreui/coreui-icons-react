import expect from 'expect'
import React from 'react'
import { renderToStaticMarkup as render } from 'react-dom/server'

import CIcon from 'src/'
import CIconRaw from 'src/'
import {logo, logo as cilLogo} from './logo'
import { cifAU } from './cif-AU';
React.icons = { logo, cilLogo, cifAU }

describe('CIcon', () => {

  // polyfill 
  String.prototype.replaceAll = function(f,r){return this.split(f).join(r);}

  it('renders svg with class="c-icon"', () => {
    expect(render(<CIcon/>))
    .toContain('class="c-icon')
  })
  it('renders svg with name', () => {
    expect(render(<CIcon name='logo'/>))
    .toContain(logo[1])
  })
  it('renders svg with name and className', () => {
    expect(render(<CIcon name={'logo'} className='test'/>))
    .toContain(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logo[0]}" class="c-icon test" role="img">${logo[1]}</svg>`)
  })
  it('renders svg with content', () => {
    expect(render(<CIcon content='content'/>))
    .toContain('role="img">content</svg>')
  })
  it('renders svg with size', () => {
    expect(render(<CIcon size='xl'/>))
    .toContain('c-icon-xl')
  })
  it('renders svg with custom size', () => {
    expect(render(<CIcon size='custom'/>))
    .toContain('c-icon-custom-size')
  })
  it('renders svg with className', () => {
    expect(render(<CIcon className='c-icon-test'/>))
    .toContain('c-icon-test')
  })
  it('renders <img> with src', () => {
    expect(render(<CIcon src='src'/>))
    .toContain('<img src="src" role="img"/>')
  })
  it('renders <svg> with <use>', () => {
    expect(render(<CIcon use='xxx'/>))
    .toContain('<use href="xxx"></use></svg>')
  })
  it('renders with title', () => {
    expect(render(<CIcon name="cifAU" title="title"/>))
    .toContain(cifAU[1])
  })
  it('warns on CIconRaw', () => {
    expect(render(<CIconRaw/>))
    .toContain('c-icon')
  })
  it('doesn`t warn on existing icon', () => {
    expect(render(<CIcon name='cifAU'/>))
    .toNotContain('undefined')
  })
  it('warns on non existing icon', () => {
    expect(render(<CIcon name='none'/>))
    .toContain('undefined')
  })
  it('converts toCamelCase', () => {
    expect(render(<CIcon name='cif-AU'/>))
    .toContain(cifAU[1])
  })
})
