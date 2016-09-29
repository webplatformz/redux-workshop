import deepFreeze from 'deep-freeze';
import reducer from '../src/reducers';
import {addTodo, toggleTodo, removeTodo, setVisibilityFilter} from '../src/actions';

describe('ToDoAppReducers', function() {

    const initialState = {
        todos: [{
            text: 'hello youse',
            id: 1,
            completed: false
        }],
        visibilityFilter: 'SHOW_ALL'
    };

    beforeEach(function() {
        deepFreeze(initialState);
    });

    it('should return the initial state when no state is given', function() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('the todo reducer', function() {

        it('should add a todo when dispatching ADD_TODO', function() {
            let newState = reducer(initialState, addTodo('a new todo'));

            expect(newState.todos.length).toBe(2);
            expect(newState.todos[1].text).toEqual('a new todo');
        });

        it('should toggle a todo when dispatching TOGGLE_TODO', function() {
            var id = 1;
            let newState = reducer(initialState, toggleTodo(id));

            expect(newState.todos[0].completed).toBe(true);
        });

        it('should remove a todo when dispatching REMOVE_TODO', function() {
            var id = 1;
            let newState = reducer(initialState, removeTodo(id));

            expect(newState.todos.length).toBe(0);
        });
    });

    describe('the visibility filter reducer', function() {

        it('should set the new visibility filter when dispatching SET_VISIBILITY_FILTER', function() {
            let newState = reducer(initialState, setVisibilityFilter('SHOW_COMPLETED'));

            expect(newState.visibilityFilter).toEqual('SHOW_COMPLETED');
        });
    });

});