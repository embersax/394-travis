import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListPage from './ListPage';
import ItemList from './Itemlist';
test('ListPage should update product name on change', () => {
    const testFn = jest.fn();
    const items = [];
    const selected = {}
    const user = { a: 1 };
    const house = { a: 1 };

    const { getByTestId } = render(
        <ItemList items={items} user={user} selectedState={selected} house={house} testFn={testFn} />
    );

})