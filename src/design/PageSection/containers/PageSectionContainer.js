import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Observer from '@researchgate/react-intersection-observer';

import PageSection from '../components/PageSection';

const PageSectionContainer = ({
  sectionRef, children, className, ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const handleChange = useCallback(
    ({ isIntersecting }, unobserve) => {
      if (isIntersecting) {
        unobserve();
      }
      setVisible(isIntersecting);
    },
    [visible, setVisible],
  );

  return (
    <Observer onChange={handleChange}>
      <PageSection
        ref={sectionRef}
        {...rest}
        className={className}
        visible={visible}
      >
        {children}
      </PageSection>
    </Observer>
  );
};
PageSectionContainer.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
PageSectionContainer.defaultProps = {
  sectionRef: null,
  className: null,
};

export default PageSectionContainer;
