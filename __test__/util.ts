import { test, expect } from 'rh-test'
export { expect }

export function testUnit(name: string, func: (...args: any) => any, ...args: any[]) {
	test(name, ...args.map(unit => {
		const { params, tobe = true, name = 'default' } = unit
		if (name === 'default' && params)
			return expect(func(params)).tobe(tobe)
		return unit
	}))
}