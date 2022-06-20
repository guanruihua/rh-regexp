import { RegExps } from '../src'
import { testUnit } from './util'

testUnit('seKeyboard', RegExps(['seKeyboard']),
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: false },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: false },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: false },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: false },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: '@123A', tobe: true },
	{ params: 'A231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true }
)
