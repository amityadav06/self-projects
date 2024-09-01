import React, { useContext } from 'react'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { TokenContext } from '@/context/TokenContext'
import AccountDropDown from './AccountDropDown'
import DragNdrop from './DragFiles'
import Papa from 'papaparse';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const Dashboard = () => {
    const { toast } = useToast()
    const { accounts, files, setFiles } = useContext(TokenContext);
    
    const handleFileUpload = () => {
        console.log('files', files);
        if(!files) return;

        const reader = new FileReader();
        reader.onload = function (event) {
          const csv = event.target.result;
          Papa.parse(csv, {
            header: true,
            complete: function (results) {
              const transformedData = transformData(results.data);
              importBkStatement(transformedData);
            console.log('transfomrdata', transformedData);
            },
          });
        };
        reader.readAsText(files[0]);
    }

    const transformData = (data) => {
        return {
          account_id: data[0].account_id,
          start_date: data[0].start_date,
          end_date: data[0].end_date,
          transactions: data.map((row) => ({
            transaction_id: row.transaction_id,
            date: row.date,
            debit_or_credit: row.debit_or_credit,
            amount: parseFloat(row.amount),
            payee: row.payee,
            description: row.description,
            reference_number: row.reference_number,
          })),
        };
      };

      const token = localStorage.getItem("lastAccessToken")
      const importBkStatement = async (data) => {
        const myHeaders = {
          'Content-Type': 'application/json',
          Authorization: ` Zoho-oauthtoken ${token}`,
          Cookie: 'JSESSIONID=98AA2C5463B359C95B584DD6A3AF21FB; _zcsr_tmp=5b998092-6f79-487d-90d3-19b620e8a774; zalb_54900d29bf=35ae455a8d30147980337fe9cf7e2232; zbcscook=5b998092-6f79-487d-90d3-19b620e8a774',
        };
    
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(data),
          redirect: 'follow',
        };
    
        try {
          const response = await fetch(
            'api/books/v3/bankstatements?organization_id=60029892883',
            requestOptions
          );
          const result = await response.json();
        //   console.log('post result ===========> ',result);
          if(result.code !== 0){
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: result.message,
                action: <ToastAction altText="Try again">Try again</ToastAction>,
              })
          }else{
            toast({
                variant: 'success',
                title: 'Success',
                description: result.message,
              })
          }
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <>
            <div className='flex p-4 mb-12 justify-between items-center'>
                <div>
                    <AccountDropDown accounts={accounts} />
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant='destructive'>Upload Statement</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle className='text-center mb-3'>Upload Files</DialogTitle>
                            <DialogDescription className='text-center'>
                                Limit 15MB per file. Supported files: .PDF, .DOCX, .PPTX, .TXT,
                                .XLSX
                            </DialogDescription>
                            </DialogHeader>
                            <DragNdrop onFilesSelected={setFiles} width="460px" height='400px'/>
                            <DialogTrigger className='flex gap-4'>
                                <Button variant='destructive'>Cancel</Button>
                                <Button 
                                    onClick={handleFileUpload}
                                    className='bg-gray-900 text-white hover:bg-gray-800'
                                >
                                    Confirm
                                </Button>
                            </DialogTrigger>
                        </DialogContent>
                        
                    </Dialog>
                </div>
            </div>
            <div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[150px]">Account Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        
                        {
                            accounts.map((acc) => {
                                const { account_id, account_name, account_type, description  } = acc;
                                return (
                                    <TableRow key={account_id}>
                                        <TableCell className="font-medium">{account_name}</TableCell>
                                        <TableCell>{account_type}</TableCell>
                                        <TableCell>{description}</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default Dashboard