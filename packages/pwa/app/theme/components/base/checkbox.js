export default {
    baseStyle: {
        container: {style: {alignItems: 'baseline'}},
        label: {
            width: 'full'
        },
        control: {
            marginTop: '3px',
            _checked: {
                backgroundColor: 'blue.600',
                borderColor: 'blue.600',
                _hover: {
                    bg: 'blue.700',
                    borderColor: 'blue.700'
                }
            }
        }
    },
    sizes: {
        md: {
            label: {marginLeft: 3, fontSize: 'sm'}
        }
    }
}
