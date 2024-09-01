import React, { useState } from 'react'
import useTicTacToe from '../hooks/use-tic-tac-toe';
import { Outlet } from 'react-router-dom';

const TicTacToe = () => {
    const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe()
  return (
    <>
    <Outlet />
      <div className='game'>
        <div className="status">
          {getStatusMessage()}
          <button className="btn bg-slate-400 m-4 p-2 rounded-sm" onClick={resetGame}>Reset Game</button>
        </div>

        <div className="grid grid-cols-3 gap-4 w-[400px] justify-center">
          {board.map((b, index) => {
            return(
              <button
                className='h-[100px] w-[100px] cursor-pointer transition-colors duration-300 ease-in-out bg-blue-500 hover:bg-red-500'
                key={index}
                onClick={() => handleClick(index)}
                disabled={b != null}
              >
                {b}
              </button>
            )
          })}
        </div>
    </div>
    </>
  )
}

export default TicTacToe