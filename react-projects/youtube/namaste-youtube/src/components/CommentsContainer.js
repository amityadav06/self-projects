import React from 'react'
import CommentList from './CommentList'

const commentsData = [
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [

        ]
    },
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [
            {
                name: 'Amit',
                text: 'lorem ispsum dollas sit amet aukens',
                replies: [
                    
                ]
            },
            {
                name: 'Amit',
                text: 'lorem ispsum dollas sit amet aukens',
                replies: [
                    
                ]
            },
            {
                name: 'Amit',
                text: 'lorem ispsum dollas sit amet aukens',
                replies: [
                    {
                        name: 'Amit',
                        text: 'lorem ispsum dollas sit amet aukens',
                        replies: [
                            {
                                name: 'Amit',
                                text: 'lorem ispsum dollas sit amet aukens',
                                replies: [
                                    {
                                        name: 'Amit',
                                        text: 'lorem ispsum dollas sit amet aukens',
                                        replies: [
                                            
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Amit',
                                text: 'lorem ispsum dollas sit amet aukens',
                                replies: [
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [
            
        ]
    },
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [
            
        ]
    },
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [
            
        ]
    },
    {
        name: 'Amit',
        text: 'lorem ispsum dollas sit amet aukens',
        replies: [
            
        ]
    }
]

export const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <div className='text-2xl font-bold'>Comments</div>
        <CommentList comments={commentsData} />
    </div>
  )
}
