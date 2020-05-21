import expect from 'expect'
import React from 'react'
import {renderToStaticMarkup as render} from 'react-dom/server'

import {CIcon} from 'src/'

describe('CIcon', () => {
  it('renders svg with class="c-icon"', () => {
    expect(render(<CIcon/>))
    .toContain('class="c-icon')
  })
  it('renders svg with class="c-icon-xl"', () => {
    expect(render(<CIcon size={'xl'}/>))
    .toContain(' c-icon-xl')
  })
})
