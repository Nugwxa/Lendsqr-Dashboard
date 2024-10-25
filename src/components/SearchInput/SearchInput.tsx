'use client'

import { SearchIcon } from '../Icons/General'
import Button from '../Button'
import classNames from 'classnames'
import React from 'react'
import style from './SearchInput.module.scss'

interface SearchInputProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string
}

/**
 * Renders a search input field with a button.
 * It accepts additional props for styling and functionality.
 *
 * @param {String} className - Additional classes to apply to the component (optional)
 */
export default function SearchInput(props: Readonly<SearchInputProps>) {
  const { className, ...rest } = props
  return (
    <div className={classNames(className, style.search)} {...rest}>
      <input
        className={style.searchInput}
        type="text"
        placeholder="Search for anything"
      />
      <Button
        className={style.searchButton}
        type="button"
        icon={<SearchIcon />}
      />
    </div>
  )
}
