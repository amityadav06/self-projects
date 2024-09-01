import React  from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const AccountDropDown = ({accounts}) => {

    return (
        <>
            <Select>
                <SelectTrigger className="w-[280px] bg-gray-900">
                    <SelectValue placeholder="Select Account" />
                </SelectTrigger>
                <SelectContent>
                    {
                        accounts?.map((acc) => {
                            const { account_id, account_name } = acc;
                            return <SelectItem key={account_id} className='cursor-pointer' value={account_id}>
                                {account_name}
                            </SelectItem>
                        })
                    }
                    
                </SelectContent>
            </Select>
        </>

    )
}

export default AccountDropDown