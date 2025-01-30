'use client'

import { useState } from 'react'

export default function TestPage() {
	const [inputValue, setInputValue] = useState('')

	const handleClick = () => {
		console.log('按钮被点击')
	}

	return (
		<div style={{ padding: '20px' }}>
			<h1>注册页面</h1>
			<p>这是一个注册页面。</p>
		</div>
	)
}