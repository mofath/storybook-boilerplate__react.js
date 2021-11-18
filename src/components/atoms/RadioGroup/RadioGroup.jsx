import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * RadioGroup component
 */
export default function RadioGroup({
    name,
    elements,
    onSelect,
    initialValue = '',
}) {
    const [slected, setSlected] = useState(initialValue);

    const handleSelect = (val) => {
        setSlected(val);
        onSelect(val);
    };

    return (
        <div className='radio-group'>
            {elements.map((element, key) => (
                <label className='radio-group__label' key={key}>
                    <input
                        className='radio-group__input'
                        name={name}
                        type='radio'
                        checked={slected === element.value}
                        onChange={() => handleSelect(element.value)}
                        value={element.value}
                    />
                    {element.label}
                </label>
            ))}
        </div>
    );
}

RadioGroup.propTypes = {
    name: PropTypes.string,
    onSelect: PropTypes.func,
    elements: PropTypes.array,
    initialValue: PropTypes.string,
};
