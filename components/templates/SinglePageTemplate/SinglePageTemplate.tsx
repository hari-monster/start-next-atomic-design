import React, { FC, ReactNode } from 'react'

interface PageTemplateProps {
  footer: ReactNode
}

const PageTemplate: FC<PageTemplateProps> = ({ footer, children }) => {
  return (
    <>
      <>{children}</>
      {/*TODO:Error: Objects are not valid as a React child (found: object with keys {footer}). If you meant to render a collection of children, use an array instead.*/}
      {footer && <>{footer}</>}
    </>
  )
}

export default PageTemplate
