import React from 'react'

import { Text, Title, Card } from '../../index'

const CardDemo = () => {
  return (
    <div>
      <Title>Card</Title>
      <Card style={{ maxWidth: '350px' }}>
        <Title>A simple card-type wrapper</Title>
        <Text>
          Lorem ipsum dolors sit ameat, adipiscing elit. Nullam nec purus nec lorem. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec lorem.
        </Text>
      </Card>
    </div>
  )
}

export default CardDemo
