'use client'
import { useEffect, useState, Suspense } from "react"
import { $t } from '@/lib/i18n';

const Test = ({}) => {

  return (
    <div>
      <h1>test22222</h1>
      <p>{ $t('web.test') }</p>
    </div>
  )
}
export default Test
