import React from 'react'

const WidgetButton = React.forwardRef(({ myWidgetFunction, style, buttonText }, ref) => (
  <button
    ref={ref}
    id='cloudinary_upload_button'
    style={
      style || {
        color: 'white',
        border: 'none',
        width: '120px',
        backgroundColor: 'green',
        borderRadius: '4px',
        height: '25px'
      }
    }
    onClick={() => myWidgetFunction()}
  >
    {buttonText || 'Upload files'}
  </button>
))
export default WidgetButton
