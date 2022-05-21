import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export const SkeletonList = () => {
	return (
		<>
			{[...Array(20).keys()].map(el => (
				<li key={el} className="list-item">
					<Stack spacing={1}>
						<Skeleton variant="circular" width={96} height={96} />
						<Skeleton className="center" variant="text" width={80} height={18} />
					</Stack>
				</li>
			))}
		</>
	)
}
