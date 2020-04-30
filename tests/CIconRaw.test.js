import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import {CIconRaw} from 'src/'
import {logo, logo as cilLogo} from './logo'
React.icons = {logo, cilLogo};

describe('CIconRaw', () => {
  it('renders svg with class="c-icon"', () => {
    expect(render(<CIconRaw></CIconRaw>))
    .toContain('class="c-icon')
  })
  it('renders svg with name', () => {
    expect(render(<CIconRaw name='logo'></CIconRaw>))
    .toContain(logo[1])
  })
  it('renders svg with name and className', () => {
    expect(render(<CIconRaw name={'logo'} className='test'></CIconRaw>))
    .toContain(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${logo[0]}" class="c-icon test" role="img">${logo[1]}</svg>`)
  })
  it('renders svg with content', () => {
    expect(render(<CIconRaw content='content'></CIconRaw>))
    .toContain('role="img">content</svg>')
  })
  it('renders svg with size', () => {
    expect(render(<CIconRaw size='xl'></CIconRaw>))
    .toContain('c-icon-xl')
  })
  it('renders svg with custom size', () => {
    expect(render(<CIconRaw size='custom'></CIconRaw>))
    .toContain('c-icon-custom-size')
  })
  it('renders svg with className', () => {
    expect(render(<CIconRaw className='c-icon-test'></CIconRaw>))
    .toContain('c-icon-test')
  })
  it('renders <img> with src', () => {
    expect(render(<CIconRaw src='src'></CIconRaw>))
    .toContain('<img src="src" role="img"/>')
  })
  it('renders <svg> with <use>', () => {
    expect(render(<CIconRaw use='xxx'></CIconRaw>))
    .toContain('<use href="xxx"></use></svg>')
  })
})
