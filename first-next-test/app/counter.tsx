'use client';

import { useState, useReducer } from 'react';

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<>
			<h2>{count}</h2>
			<button type='button' onClick={() => setCount(count + 1)}>
				+
			</button>
		</>
	);
}

export function Checkbox() {
	const [checked, setChecked] = useReducer(
		(checked: boolean) => !checked,
		false
	);
	return (
		<>
			<label htmlFor='checked'>{checked ? 'checked' : 'not checked'}</label>
			<input
				id='checked'
				type='checkbox'
				checked={checked}
				onChange={setChecked}
			/>
		</>
	);
}
