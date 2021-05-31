import React from 'react'
import { H1, Layout, Li, Ul } from '@/Components'

const meta = {
  title: 'inertia-react@v0.1.2',
}

const Page = () => {
  return (
    <>
      <H1>inertia-react@v0.1.2</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on August 14, 2019</div>
      <Ul>
        <Li>Update dependencies.</Li>
        <Li>Remove Inertia core export from typings.</Li>
      </Ul>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page
