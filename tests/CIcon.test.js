import expect from 'expect'
import React from 'react'
import { renderToStaticMarkup as render } from 'react-dom/server'

import CIcon from 'src/'
import {logo, logo as cilLogo} from './logo'
React.icons = { logo, cilLogo }

describe('CIcon', () => {
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
})
