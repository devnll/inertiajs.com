import React from 'react'
import { A, Code, H1, Layout, Li, Ul } from '@/Components'

const meta = {
  title: 'inertia@v0.8.2',
}

const Page = () => {
  return (
    <>
      <H1>inertia@v0.8.2</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on December 29, 2020</div>
      <Ul>
        <Li>
          Fix regression caused by <Code>Inertia.delete()</Code> method signature change (
          <A href="https://github.com/inertiajs/inertia/issues/378">#378</A>).
        </Li>
      </Ul>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
