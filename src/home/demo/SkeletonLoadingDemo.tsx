import React from 'react'

import { Title, SkeletonLoading } from '../../index'
import { ComponentGrid } from '../helpers'

const GeneralMessageSkeletonLoading = () => {
  return (
    <SkeletonLoading
      $animate={false}
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '410px',
        padding: '32px 16px',
        rowGap: '16px',
        width: '400px',
        maxWidth: '100%',
      }}
    >
      <SkeletonLoading
        style={{
          borderRadius: '50%',
          height: '80px',
          width: '80px',
        }}
      />
      <SkeletonLoading
        style={{
          height: '26px',
          marginBottom: '8px',
          width: '274px',
        }}
      />
      <SkeletonLoading
        style={{
          height: '145px',
          width: '366px',
        }}
      />
      <SkeletonLoading
        style={{
          borderRadius: '4px',
          height: '38px',
          width: '82px',
        }}
      />
    </SkeletonLoading>
  )
}

const CardSkeletonLoading = () => {
  return (
    <SkeletonLoading
      $animate={false}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '410px',
        padding: '16px',
        rowGap: '16px',
        width: '350px',
      }}
    >
      <SkeletonLoading
        style={{
          height: '30px',
          marginBottom: '8px',
          width: '100%',
        }}
      />
      <SkeletonLoading
        style={{
          height: '300px',
          width: '100%',
        }}
      />
    </SkeletonLoading>
  )
}

const SkeletonLoadingDemo = () => {
  return (
    <div>
      <Title>Skeleton Loading</Title>
      <ComponentGrid>
        <CardSkeletonLoading />
        <GeneralMessageSkeletonLoading />
      </ComponentGrid>
    </div>
  )
}

export default SkeletonLoadingDemo
