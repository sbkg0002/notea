import { FC, useEffect, useRef } from 'react'
import IconSearch from 'heroicons/react/outline/Search'
import { useDebouncedCallback } from 'use-debounce'

const FilterModalInput: FC<{
  doFilter: (keyword: string) => void
  keyword?: string
  placeholder: string
  onClose: () => void
}> = ({ doFilter, keyword, placeholder, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedFilter = useDebouncedCallback((value: string) => {
    doFilter(value)
  }, 200)

  useEffect(() => {
    inputRef.current?.select()
  }, [])

  return (
    <div className="flex py-2 px-4">
      <IconSearch width="20" />
      <input
        ref={inputRef}
        defaultValue={keyword}
        type="text"
        className="appearance-none w-full outline-none ml-2 bg-transparent"
        placeholder={placeholder}
        autoFocus
        onChange={(e) => debouncedFilter.callback(e.target.value)}
      />
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default FilterModalInput