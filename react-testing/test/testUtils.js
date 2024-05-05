import checkPropTypes from 'check-prop-types';

export const findAllByAltText = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, configureProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        configureProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined()
}