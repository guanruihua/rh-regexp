import { RegExpRaw } from '../type'
export * from './keyboard'
export * from './number'
export * from './letter'
export * from './special'

/** 长度 */
export function _length_(str: string, rule: RegExpRaw): boolean {
	const { min = 4, max = 15 }: RegExpRaw = rule
	return str.length >= min && str.length < max;
}

/* 字符数量 */
export function charCount(str: string, rule: RegExpRaw) {
	const { min = 4, max = 15, reg = /\*/ }: RegExpRaw = rule
	let len = str.length
	let countNum = 0
	while (len--) {
		if (new RegExp(reg).test(str)) {
			countNum++;
			continue;
		}
		if (countNum >= max) {
			return false
		}
	}
	return countNum >= min
}

/* 字符种类数量 */
export function typeCount(str: string, rule: RegExpRaw) {
	const { regs = [/[a-z]/, /[A-Z]/, /[0-9]/, /[_]/], min = 3, max = 15 } = rule
	let len = regs.length
	let countNum = 0
	while (len--) {
		if (new RegExp(regs[len]).test(str)) {
			countNum++;
			continue;
		}
		if (countNum >= max ) {
			return false
		}
	}
	return countNum >=min
}

/* 电话号码 */
export function phone(str: string) {
	return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(str)
}
