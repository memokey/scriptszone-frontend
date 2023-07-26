import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item, index) => (
      <li key={item.id}>
        <ListItem data={item} key={index} />
      </li>
    ))}
  </ul>
)

export default List
