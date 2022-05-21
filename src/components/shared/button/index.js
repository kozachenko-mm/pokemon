import React from 'react'

export const Button = ({ children, onClick, type = 'button', disabled, variant }) => {
	return (
		<button className={`button ${variant}`} onClick={onClick} type={type} disabled={disabled}>
			{children}
		</button>
	)
}
