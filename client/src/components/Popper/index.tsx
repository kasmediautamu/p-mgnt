import * as React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
// import 'react-popper-tooltip/dist/styles.css';

function Popper() {
  const [controlledVisible, setControlledVisible] = React.useState(false);

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    trigger: 'click',
    closeOnOutsideClick: true,
    visible: controlledVisible,
    onVisibleChange: setControlledVisible,
  });

  return (
    <div className="App">
      <button type="button" ref={setTriggerRef}>
        Trigger element
      </button>
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: 'tooltip-container' })}
        >
          Tooltip element
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
      )}
    </div>
  );
}

export default Popper
