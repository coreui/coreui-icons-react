import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import {CIcon} from 'src/'

describe('CIcon', () => {
  it('renders svg with class="c-icon"', () => {
    expect(render(<CIcon></CIcon>))
    .toContain('class="c-icon')
  })
  it('renders svg with class="c-icon-xl"', () => {
    expect(render(<CIcon size={'xl'}></CIcon>))
    .toContain(' c-icon-xl')
  })
  it('renders <i> with name object', () => {
    expect(render(<CIcon name={{name: 'test', type: 'class', className: 'c-icon'}} size={'sm'}></CIcon>))
    .toContain('<i class="c-icon c-icon-sm"></i>')
  })
  it('renders <span> with name object', () => {
    expect(render(<CIcon tag={'span'} name={{name: 'test', type: 'class', className: 'c-icon'}} size={'lg'}></CIcon>))
    .toContain('<span class="c-icon c-icon-lg"></span>')
  })
})
