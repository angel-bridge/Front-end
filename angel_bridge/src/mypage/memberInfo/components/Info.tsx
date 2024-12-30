import React from 'react'
import Button from './Button'
import InputTag from './InputTag'
import { INFO_LIST } from '../core/info'
import InputWithTag from './InputWithTag'


export default function Info() {
  return (
<div>
<div>
    <Button />
    <Button />

</div>
<div>

</div>
{INFO_LIST.map((info) => {
    return (
        <InputWithTag  key={info} info={info} />
    )
})}
</div>

)
}
