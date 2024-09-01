import React from 'react'
import { Comment } from './Comment'
import { Link } from 'react-router-dom'

const data =[
    {
        user: 'Amit Yadav',
        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
        replies: [
            {
                user: 'Amit Yadav',
                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
            },
            {
                user: 'Amit Yadav',
                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                replies: [
                    {
                        user: 'Amit Yadav',
                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                    },
                    {
                        user: 'Amit Yadav',
                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                    },
                    {
                        user: 'Amit Yadav',
                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                        replies: [
                            {
                                user: 'Amit Yadav',
                                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                            },
                            {
                                user: 'Amit Yadav',
                                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                            },
                            {
                                user: 'Amit Yadav',
                                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                                replies: [
                                    {
                                        user: 'Amit Yadav',
                                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                                    },
                                    {
                                        user: 'Amit Yadav',
                                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                                    },
                                    {
                                        user: 'Amit Yadav',
                                        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                user: 'Amit Yadav',
                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
            }
        ]
    },
    {
        user: 'Gaurav Goyal',
        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
        replies: [
            {
                user: 'Amit Yadav',
                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
            },
            {
                user: 'Amit Yadav',
                comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
            }
        ]
    },
    {
        user: 'Shivani Singh',
        comment: 'This is commment is done by user and there can sub comments also that is replies for this comment.',
    },

]

export const CommentBox = () => {
  return (
    <div className=' bg-slate-200 w-100 min-h-screen'>
      <header>
        <nav className='w-100 flex gap-8 font-semibold p-4 sticky'>
          <Link to='/'>Home</Link>
          <Link to='/game'>Game</Link>
          <Link to='/form'>Form</Link>
          <Link to='/project'>Project</Link>
          <Link to='/comments'>Comment</Link>
        </nav>
      </header>
      <div className='w-1/2 m-auto'>
        <Comment data={data} />
      </div>
    </div>
  )
}
