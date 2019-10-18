import React from 'react'
import {Button, ComboBox} from 'carbon-components-react'

export function CarbonComp() {
    let items=[
        {
            id: 'option-0',
            text: 'Option 1'
        },
        {
            id: 'option-1',
            text: 'Option 2'
        },
        {
            id: 'option-2',
            selected: true,
            text: 'Option 3'
        },
        {
            id: 'option-3',
            text: 'Option 4'
        },
        {
            id: 'option-4',
            text: 'An example option that is really long to show what should be done to handle long text'
        }
        ];
    return (
        <div>
            Hello carbon

            
            <Button
            className="some-class"
            disabled={false}
            iconDescription="Button icon"
            kind="primary"
            onClick={function noRefCheck(){}}
            onFocus={function noRefCheck(){}}
            renderIcon={undefined}
            size="default"
            tabIndex={0}
            type="button"
            >Carbon button</Button>
            
            <div>
                <ComboBox
                    ariaLabel="Choose an item"
                    helperText="Optional helper text here"
                    id="carbon-combobox-example"
                    items = {items}
                    itemToString={item => (item ? item.text : '')}
                    placeholder="Filter..."
                    titleText="Combobox title"
                    type="default"
                />
            </div>
        </div>
    )
}