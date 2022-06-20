import { RegExps } from '../src'
import { testUnit } from './util'

testUnit('letter', RegExps('letter'),
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: 'abc1de', tobe: true },
	{ params: '1abcde', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abCd', tobe: false },
	{ params: 'wxyaz', tobe: false },
	{ params: 'dcba', tobe: false },
	{ params: 'edcba', tobe: false },
	{ params: 'fedcba', tobe: false },
	{ params: '1adgk_', tobe: false },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: false },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
)

testUnit('letterBegin', RegExps('letterBegin'),
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	{ params: '1abcde', tobe: false },
	{ params: '2341111', tobe: false },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: false },
	{ params: '432a1', tobe: false },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: false },
	{ params: '11qaz', tobe: false },
	{ params: '11qas', tobe: false },
	{ params: '11qqaz', tobe: false },
	{ params: '1543a2', tobe: false },
	{ params: '1543a234a5', tobe: false },
	{ params: '4543a2', tobe: false },
	{ params: '23456', tobe: false },
	{ params: '234567', tobe: false },
	{ params: '1111', tobe: false },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: false },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: false },
)

testUnit('letterEnd', RegExps('letterEnd'),
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	{ params: '1abcde', tobe: true },
	{ params: '1abcde1', tobe: false },
	{ params: '2341111', tobe: false },
	{ params: '2345', tobe: false },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: false },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: false },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: false },
	{ params: '1543a234a5', tobe: false },
	{ params: '4543a2', tobe: false },
	{ params: '23456', tobe: false },
	{ params: '234567', tobe: false },
	{ params: '1111', tobe: false },
	{ params: '5432', tobe: false },
	{ params: 'aA111112345', tobe: false },
	{ params: 'aA11111', tobe: false },
	{ params: '3333@', tobe: false },
	{ params: 'aA123123123123333@', tobe: false },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: false },
	{ params: 'aA123123123123!', tobe: false },
	{ params: 'aA123123123123(', tobe: false },
	{ params: 'aA123123123123)', tobe: false },
	{ params: 'aA123123123123_', tobe: false },
	{ params: 'aA123123123123', tobe: false },
	{ params: 'a123123123123@', tobe: false },
	{ params: '_a123123123123', tobe: false },
)

testUnit('seLetter', RegExps('seLetter'),
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: '1abcde', tobe: false },
	{ params: '1abcde1', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abCd', tobe: true },
	{ params: 'ABCD', tobe: false },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'edcba', tobe: false },
	{ params: 'fedcba', tobe: false },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)

testUnit('seLetterAsc', RegExps('seLetterAsc'),
	{ params: 'edba', tobe: true },
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: '1abcde', tobe: false },
	{ params: '1abcde1', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abCd', tobe: true },
	{ params: 'ABCD', tobe: false },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)

testUnit('seLetterDesc', RegExps('seLetterDesc'),
	{ params: 'edba', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	{ params: '1abcde', tobe: true },
	{ params: '1abcde1', tobe: true },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'ABCD', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'edcba', tobe: false },
	{ params: 'fedcba', tobe: false },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)

testUnit('seLetterIgCase', RegExps('seLetterIgCase'),
	{ params: 'aBCd', tobe: false },
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: '1abcde', tobe: false },
	{ params: '1abcde1', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abCd', tobe: false },
	{ params: 'ABCD', tobe: false },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'edcba', tobe: false },
	{ params: 'fedcba', tobe: false },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)

testUnit('seLetterIgCaseAsc', RegExps('seLetterIgCaseAsc'),
	{ params: 'aBCd', tobe: false },
	{ params: 'edba', tobe: true },
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abcde', tobe: false },
	{ params: '1abcde', tobe: false },
	{ params: '1abcde1', tobe: false },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: false },
	{ params: 'abCd', tobe: false },
	{ params: 'ABCD', tobe: false },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: true },
	{ params: 'edcba', tobe: true },
	{ params: 'fedcba', tobe: true },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)

testUnit('seLetterIgCaseDesc', RegExps('seLetterIgCaseDesc'),
	{ params: 'dCbA', tobe: false },
	{ params: 'aBCd', tobe: true },
	{ params: 'edba', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'a', tobe: true },
	{ params: 'ab', tobe: true },
	{ params: 'abc', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abcde', tobe: true },
	{ params: '1abcde', tobe: true },
	{ params: '1abcde1', tobe: true },
	{ params: '2341111', tobe: true },
	{ params: '2345', tobe: true },
	{ params: '1qaz', tobe: true },
	{ params: '432a1', tobe: true },
	{ params: 'abcd', tobe: true },
	{ params: 'abCd', tobe: true },
	{ params: 'ABCD', tobe: true },
	{ params: 'wxyaz', tobe: true },
	{ params: 'dcba', tobe: false },
	{ params: 'edcba', tobe: false },
	{ params: 'fedcba', tobe: false },
	{ params: '1adgk_', tobe: true },
	{ params: '11qaz', tobe: true },
	{ params: '11qas', tobe: true },
	{ params: '11qqaz', tobe: true },
	{ params: '1543a2', tobe: true },
	{ params: '1543a234a5', tobe: true },
	{ params: '4543a2', tobe: true },
	{ params: '23456', tobe: true },
	{ params: '234567', tobe: true },
	{ params: '1111', tobe: true },
	{ params: '5432', tobe: true },
	{ params: 'aA111112345', tobe: true },
	{ params: 'aA11111', tobe: true },
	{ params: '3333@', tobe: true },
	{ params: 'aA123123123123333@', tobe: true },
	{ params: 'a@123A', tobe: true },
	{ params: 'aA231@123a45abC432', tobe: true },
	{ params: 'aA123123123123!', tobe: true },
	{ params: 'aA123123123123(', tobe: true },
	{ params: 'aA123123123123)', tobe: true },
	{ params: 'aA123123123123_', tobe: true },
	{ params: 'aA123123123123', tobe: true },
	{ params: 'a123123123123@', tobe: true },
	{ params: '_a123123123123', tobe: true },
)
