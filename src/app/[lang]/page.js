'use client'
import { useEffect, useState, Suspense } from "react"
import { $t } from '@/lib/i18n';

const Test = ({params}) => {
  const { locale } = params
  return (
    <div>
      <h1>locale - { locale }</h1>
      <h1>test1111</h1>
      <p>{ $t('web.test') }</p>
    </div>
  )
}
export default Test
