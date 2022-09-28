import { useCallback, useState } from 'react'
import type { Tag } from 'react-tag-autocomplete'
import { ReactTags } from 'react-tag-autocomplete'
import { countries } from './country-list'

export function CountrySelector() {
  const suggestions = countries.map((label) => ({label, value: label}))
  const [selected, setSelected] = useState<Tag[]>([])

  const onAdd = useCallback(
    (newTag: Tag) => {
      setSelected([...selected, newTag])
    },
    [selected]
  )

  const onDelete = useCallback(
    (tagIndex: number) => {
      setSelected(selected.filter((_, i) => i !== tagIndex))
    },
    [selected]
  )

  return (
    <ReactTags
      labelText="Select countries"
      selected={selected}
      suggestions={suggestions}
      onAdd={onAdd}
      onDelete={onDelete}
      noOptionsText="No matching countries"
    />
  )
}
