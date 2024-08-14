import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaSearch } from 'react-icons/fa';

function Input() {
    const [input, setInput] = useState('');
  
    const [todos, setTodos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to add a new item
    const AddItem = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Blank Input is not accepted");
        } else {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    // Function to delete an item
    const DeleteItem = (index) => {
        const deleteInput = [...todos];
        deleteInput.splice(index, 1);
        setTodos(deleteInput);
    };

    // Function to handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter todos based on the search query
    const filteredTodos = todos.filter(todo =>
        todo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className=' flex flex-col '>


            <form onSubmit={AddItem}>
                <input
                    type='text'
                    placeholder='Description of Todo Item...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='w-2/5 lg:w-3/4 m-5 p-2 lg:p-3 outline-none border-[1px] text-center text-gray-700 border-gray-100 bg-neutral-100 rounded-full placeholder:text-center'
                />
               
                
                <button
                    type='submit'
                    className='w-[100px] rounded-full bg-gray-800  m-5 p-2 lg:p-3 text-white text-base'
                >
                    Add Todo
                </button>
            </form>

            <div className='m-5'>
            
                <input
                    type='text'
                    placeholder='Search tasks...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='w-4/5 lg:w-3/4 p-2 outline-none border-[1px] text-center text-gray-700 border-gray-100 bg-neutral-100 rounded-full placeholder:text-center'
                />
                
            </div>

           

            <div className='pt-5 m-5 text-center'>
                {filteredTodos.length} task{filteredTodos.length !== 1 ? 's' : ''} in bucket

                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo, index) => (
                        <li
                            className='bg-sky-100 relative font-semibold text-gray-800 list-none p-2 m-2'
                            key={index}
                        >
                            {todo}
                            <span
                                className='absolute right-3'
                                onClick={() => DeleteItem(index)}
                            >
                                <RiDeleteBin5Line className='text-red-700' size={20} />
                            </span>
                        </li>
                    ))
                ) : (
                    <li className='bg-red-600 relative font-semibold text-white list-none p-2 m-2'>
                        No tasks found
                    </li>
                )}
            </div>
        </div>
    );
}

export default Input;
